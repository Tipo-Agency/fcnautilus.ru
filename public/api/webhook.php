<?php
/**
 * PHP Backend Endpoint для webhook 1С
 * Browser → Backend → 1C, без CORS и без 401
 */

// Логирование ошибок
error_log('Webhook request: ' . $_SERVER['REQUEST_METHOD'] . ' ' . date('Y-m-d H:i:s'));

// CORS заголовки
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Обработка OPTIONS запроса (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Только POST запросы
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed', 'method' => $_SERVER['REQUEST_METHOD']]);
    error_log('Webhook error: Method not allowed - ' . $_SERVER['REQUEST_METHOD']);
    exit;
}

// URL webhook 1С
$webhookUrl = 'https://cloud.1c.fitness/api/hs/lead/Webhook/6538ea95-c58a-45bf-a73d-844677185d8e';

// Получаем тело запроса
$data = file_get_contents('php://input');

// Логируем данные (только для отладки)
error_log('Webhook data: ' . $data);

if (empty($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Empty request body']);
    error_log('Webhook error: Empty request body');
    exit;
}

// Валидация JSON
$jsonData = json_decode($data, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON', 'message' => json_last_error_msg()]);
    error_log('Webhook error: Invalid JSON - ' . json_last_error_msg());
    exit;
}

// Проверяем обязательные поля
if (empty($jsonData['phone'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Phone is required']);
    error_log('Webhook error: Phone is required');
    exit;
}

// Инициализируем cURL
$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $webhookUrl,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $data,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'Accept: application/json',
        'Content-Length: ' . strlen($data)
    ],
    CURLOPT_TIMEOUT => 30,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
]);

// Выполняем запрос
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
$curlErrno = curl_errno($ch);
curl_close($ch);

// Логируем результат
error_log('Webhook response: HTTP ' . $httpCode . ' | cURL error: ' . ($curlError ?: 'none'));

// Если была ошибка cURL
if ($curlError) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Proxy error',
        'message' => $curlError,
        'code' => $curlErrno
    ]);
    error_log('Webhook cURL error: ' . $curlError . ' (code: ' . $curlErrno . ')');
    exit;
}

// КАК В FCRIVERCLUB.RU: Возвращаем реальный HTTP статус от 1С
// Это позволяет фронтенду видеть реальные ошибки (500, 401, 400 и т.д.)
// Но всегда возвращаем 200 фронту, чтобы не было проблем с CORS
http_response_code(200);

// Возвращаем JSON с результатом, как в fcriverclub.ru
echo json_encode([
    'success' => $httpCode >= 200 && $httpCode < 300,
    'data' => $response
]);

// Логируем результат
if ($httpCode >= 400) {
    error_log('Webhook 1C error: HTTP ' . $httpCode . ' | Response: ' . $response);
} else {
    error_log('Webhook success: HTTP ' . $httpCode);
}

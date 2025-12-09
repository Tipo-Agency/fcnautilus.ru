import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
              Политика конфиденциальности
            </h1>
            <p className="text-center text-slate-600 mb-12">
              Последнее обновление: 12 октября 2025 года
            </p>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Общие положения</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
                  данных пользователей сайта и клиентов фитнес-клуба «Наутилус» (далее — Клуб).
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Используя наш сайт или услуги, вы соглашаетесь с условиями данной Политики
                  конфиденциальности и даете согласие на обработку ваших персональных данных.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Собираемая информация</h2>
                <p className="text-slate-700 leading-relaxed mb-4">Мы можем собирать следующие данные:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Фамилию, имя, отчество</li>
                  <li>Контактные данные (номер телефона, адрес электронной почты)</li>
                  <li>Дату рождения</li>
                  <li>Паспортные данные (при оформлении договора)</li>
                  <li>Фотографию (для оформления клубной карты)</li>
                  <li>Данные о посещениях и использовании услуг</li>
                  <li>Информацию об абонементах и платежах</li>
                  <li>Медицинские данные (при необходимости, с вашего согласия)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Цели обработки данных</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Мы используем ваши персональные данные для:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Предоставления услуг фитнес-клуба</li>
                  <li>Оформления и управления абонементами</li>
                  <li>Идентификации клиентов при входе в клуб</li>
                  <li>Связи с вами по вопросам предоставления услуг</li>
                  <li>Информирования о новых услугах, акциях и специальных предложениях</li>
                  <li>Улучшения качества обслуживания</li>
                  <li>Выполнения обязательств по договору</li>
                  <li>Соблюдения требований законодательства</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Защита информации</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Мы применяем технические и организационные меры для защиты ваших персональных данных от
                  несанкционированного доступа, изменения, раскрытия или уничтожения:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Шифрование данных при передаче</li>
                  <li>Ограниченный доступ к персональным данным только уполномоченными сотрудниками</li>
                  <li>Регулярное резервное копирование данных</li>
                  <li>Использование защищенных серверов</li>
                  <li>Регулярный аудит системы безопасности</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Передача данных третьим лицам</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Мы не передаем ваши персональные данные третьим лицам, за исключением следующих случаев:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>С вашего явного согласия</li>
                  <li>Для выполнения услуг (платежные системы, SMS-сервисы)</li>
                  <li>По требованию закона или государственных органов</li>
                  <li>Для защиты прав и безопасности Клуба и его клиентов</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Ваши права</h2>
                <p className="text-slate-700 leading-relaxed mb-4">Вы имеете право:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Получать информацию об обработке ваших персональных данных</li>
                  <li>Требовать уточнения, блокирования или удаления ваших данных</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                  <li>Обжаловать действия Клуба в уполномоченном органе по защите прав субъектов</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Файлы cookie</h2>
                <p className="text-slate-700 leading-relaxed">
                  Наш сайт использует cookie-файлы для улучшения работы сайта и повышения удобства его
                  использования. Вы можете настроить свой браузер для отказа от cookie-файлов или
                  получения уведомлений об их отправке.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Срок хранения данных</h2>
                <p className="text-slate-700 leading-relaxed">
                  Мы храним ваши персональные данные в течение срока действия договора и в течение трех лет
                  после его прекращения, если иное не предусмотрено законодательством. После истечения
                  срока хранения данные уничтожаются.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Изменения политики</h2>
                <p className="text-slate-700 leading-relaxed">
                  Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности.
                  Актуальная версия всегда доступна на данной странице. Существенные изменения вступают в
                  силу после публикации обновленной версии на сайте.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Контактная информация</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  По вопросам обработки персональных данных вы можете обратиться:
                </p>
                <div className="bg-cyan-50 rounded-2xl p-6">
                  <p className="text-slate-700 mb-2">
                    <strong>Email:</strong> privacy@nautilus-fitness.ru
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Телефон:</strong> +7 (4212) 45-67-89
                  </p>
                  <p className="text-slate-700">
                    <strong>Адрес:</strong> г. Хабаровск, ул. Суворова, 25а
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}


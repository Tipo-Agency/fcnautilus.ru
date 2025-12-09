import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
              Пользовательское соглашение
            </h1>
            <p className="text-center text-slate-600 mb-12">
              Последнее обновление: 12 октября 2025 года
            </p>

            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Общие положения</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между
                  фитнес-клубом «Наутилус» (далее — Клуб) и посетителями сайта nautilus-fitness.ru и
                  клиентами Клуба.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Используя сайт или услуги Клуба, вы подтверждаете, что прочитали, поняли и согласны со
                  всеми условиями настоящего Соглашения.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Услуги клуба</h2>
                <p className="text-slate-700 leading-relaxed mb-4">Клуб предоставляет следующие услуги:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Доступ к тренажерному залу</li>
                  <li>Доступ к бассейну и термальному комплексу</li>
                  <li>Групповые фитнес-программы</li>
                  <li>Персональные тренировки</li>
                  <li>Детские программы</li>
                  <li>Дополнительные услуги (массаж, солярий, бар и т.д.)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Абонементы</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">3.1. Типы абонементов</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Клуб предлагает различные типы абонементов с разными условиями посещения, сроком
                      действия и стоимостью. Подробная информация доступна на сайте и у администраторов.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">3.2. Оплата</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Оплата абонемента производится полностью до начала его действия. Принимаются наличные
                      и безналичные платежи.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">3.3. Срок действия</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Абонемент действителен в течение указанного при покупке срока. Неиспользованные дни не
                      компенсируются и не переносятся.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">3.4. Заморозка</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Заморозка абонемента возможна по медицинским показаниям или другим уважительным
                      причинам на срок от 7 до 30 дней. Условия заморозки зависят от типа абонемента.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Правила посещения</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Вход в клуб осуществляется по клубной карте или через систему распознавания</li>
                  <li>Обязательна сменная обувь и спортивная форма</li>
                  <li>Для посещения бассейна необходима медицинская справка</li>
                  <li>Дети до 14 лет допускаются в сопровождении взрослых</li>
                  <li>Запрещено курение, употребление алкоголя и наркотических веществ</li>
                  <li>Необходимо соблюдать правила безопасности и гигиены</li>
                  <li>Запрещена фото- и видеосъемка других посетителей без их согласия</li>
                  <li>
                    Клуб не несет ответственности за ценности, оставленные в раздевалках (используйте сейфы)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Отказ от услуг и возврат средств</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">5.1. Возврат абонемента</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Возврат абонемента возможен в течение 14 дней с момента покупки при наличии
                      уважительной причины. Сумма возврата рассчитывается пропорционально неиспользованным
                      дням за вычетом стоимости уже оказанных услуг.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">5.2. Невозвратные ситуации</h3>
                    <p className="text-slate-700 leading-relaxed">
                      Возврат невозможен, если абонемент приобретен со скидкой по акции, или если вы
                      нарушили правила клуба.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Ответственность</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">6.1. Ответственность клиента</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mt-2">
                      <li>Соблюдение правил клуба</li>
                      <li>Состояние своего здоровья при занятиях</li>
                      <li>Сохранность личных вещей</li>
                      <li>Правильное использование оборудования</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">6.2. Ответственность клуба</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4 mt-2">
                      <li>Предоставление доступа к заявленным услугам</li>
                      <li>Поддержание оборудования в рабочем состоянии</li>
                      <li>Обеспечение безопасности в пределах зоны ответственности</li>
                      <li>Защита персональных данных клиентов</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      6.3. Ограничение ответственности
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Клуб не несет ответственности за травмы, полученные в результате несоблюдения правил
                      безопасности, техники выполнения упражнений, или при наличии медицинских
                      противопоказаний.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Медицинские ограничения</h2>
                <p className="text-slate-700 leading-relaxed">
                  Перед началом занятий рекомендуется проконсультироваться с врачом. Клуб имеет право
                  отказать в предоставлении услуг при наличии явных медицинских противопоказаний или в
                  состоянии, опасном для здоровья.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Приостановка и прекращение услуг</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Клуб оставляет за собой право приостановить или прекратить предоставление услуг в
                  следующих случаях:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                  <li>Нарушение правил клуба</li>
                  <li>Неуважительное отношение к персоналу или другим клиентам</li>
                  <li>Создание угрозы безопасности или здоровью других посетителей</li>
                  <li>Технические неполадки или форс-мажорные обстоятельства</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Изменение условий</h2>
                <p className="text-slate-700 leading-relaxed">
                  Клуб оставляет за собой право вносить изменения в настоящее Соглашение. Актуальная версия
                  всегда доступна на сайте. Продолжая пользоваться услугами после внесения изменений, вы
                  соглашаетесь с новыми условиями.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Разрешение споров</h2>
                <p className="text-slate-700 leading-relaxed">
                  Все споры решаются путем переговоров. При невозможности достижения согласия споры
                  рассматриваются в судебном порядке в соответствии с законодательством Российской Федерации.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Контактная информация</h2>
                <div className="bg-cyan-50 rounded-2xl p-6">
                  <p className="text-slate-700 mb-2">
                    <strong>Наименование:</strong> ООО «Наутилус Фитнес»
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Адрес:</strong> г. Хабаровск, ул. Суворова, 25а
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Телефон:</strong> +7 (4212) 45-67-89
                  </p>
                  <p className="text-slate-700">
                    <strong>Email:</strong> info@nautilus-fitness.ru
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


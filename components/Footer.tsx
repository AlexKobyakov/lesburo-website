import { TreePine, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: 'Услуги',
      links: [
        'Арендаторам лесного фонда',
        'Инвесторам в лесную отрасль', 
        'Банкам и финансовым организациям',
        'ООПТ',
        'Органам исполнительной власти',
        'Научно-исследовательским организациям'
      ]
    },
    {
      title: 'Ключевые услуги',
      links: [
        'Лесоустройство',
        'Лесопатологические обследования',
        'Проектирование лесных участков',
        'Технический надзор',
        'Инвентаризация лесов',
        'ГИС технологии'
      ]
    },
    {
      title: 'Продукты',
      links: [
        'Система СОЛИ',
        'Демо-версия СОЛИ',
        'Техническая документация',
        'Внедрение и обучение',
        'Техническая поддержка',
        'Обновления системы'
      ]
    },
    {
      title: 'Ресурсы',
      links: [
        'Библиотека документов',
        'Глоссарий терминов',
        'Блог и статьи',
        'Нормативная база',
        'Методические материалы',
        'Научные публикации'
      ]
    },
    {
      title: 'Компания',
      links: [
        'О нас',
        'Наша команда',
        'Лицензии и сертификаты',
        'Партнеры',
        'Карьера',
        'Контакты'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl text-white">ООО "Лесбюро"</h3>
                <p className="text-sm text-gray-400">Лесопроектная организация</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Профессиональные услуги в области лесного хозяйства. 
              Комплексные решения для эффективного управления лесными ресурсами 
              с применением современных технологий и собственной системы СОЛИ.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-400" />
                <span>info@lesburo.ru</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                <span>г. Москва, ул. Лесная, д. 1, офис 101</span>
              </div>
            </div>

            {/* SOLI CTA */}
            <div className="bg-blue-900/50 rounded-lg p-4 border border-blue-800">
              <h4 className="text-white mb-2">Система СОЛИ</h4>
              <p className="text-blue-200 text-sm mb-3">
                Геоинформационная система для лесного хозяйства
              </p>
              <a 
                href="#soli" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Узнать больше
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 ООО "Лесбюро". Все права защищены.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Пользовательское соглашение
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Карта сайта
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                API документация
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
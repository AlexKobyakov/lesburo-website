"use client";
import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const mainNavItems = [
    { name: 'Главная', href: '#home' },
    { 
      name: 'О компании', 
      href: '#about',
      submenu: [
        'Общая информация',
        'История компании',
        'Команда',
        'Лицензии и сертификаты',
        'Партнеры'
      ]
    },
    { 
      name: 'Услуги по клиентам', 
      href: '#services-clients',
      submenu: [
        'Арендаторам лесного фонда',
        'Инвесторам в лесную отрасль',
        'Банкам и финансовым организациям',
        'ООПТ',
        'Органам исполнительной власти',
        'Научно-исследовательским организациям'
      ]
    },
    { 
      name: 'Ключевые услуги', 
      href: '#services-key',
      submenu: [
        'Лесоустройство',
        'Лесопатологические обследования',
        'Проектирование лесных участков',
        'Технический надзор',
        'Инвентаризация лесов',
        'ГИС технологии'
      ]
    },
    { name: 'СОЛИ', href: '#soli' },
    { name: 'Проекты', href: '#projects' },
    { 
      name: 'Ресурсы', 
      href: '#resources',
      submenu: [
        'Библиотека документов',
        'Глоссарий',
        'Блог',
        'Нормативная база'
      ]
    },
    { name: 'Контакты', href: '#contacts' }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-green-800 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              <span>info@lesburo.ru</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Москва, ул. Лесная, д. 1</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white">🌲</span>
              </div>
              <div>
                <h1 className="text-xl text-green-800">ООО "Лесбюро"</h1>
                <p className="text-sm text-gray-600">Лесопроектная организация</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a 
                    href={item.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors py-2"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-72 bg-white shadow-lg border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-green-600 hover:bg-green-700">
                Демо СОЛИ
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="py-4">
                  {mainNavItems.map((item) => (
                    <div key={item.name} className="mb-4">
                      <a
                        href={item.href}
                        className="block py-2 text-lg hover:text-green-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </a>
                      {item.submenu && (
                        <div className="ml-4 mt-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block py-1 text-sm text-gray-600 hover:text-green-600"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Демо СОЛИ
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}


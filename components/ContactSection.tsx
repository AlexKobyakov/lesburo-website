"use client";
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send
} from 'lucide-react';

export function ContactSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Москва, ул. Лесная, д. 1, офис 101',
      details: 'БЦ "Лесной", 3 этаж'
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      details: '+7 (926) 123-45-67 (моб.)'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@lesburo.ru',
      details: 'projects@lesburo.ru'
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      details: 'Сб-Вс: выходные дни'
    }
  ];

  // Предотвращение hydration error
  if (!mounted) {
    return (
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-4">
              <Phone className="w-4 h-4" />
              Контакты
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы ответить на ваши вопросы и предоставить профессиональную консультацию
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="animate-pulse">
              <div className="h-96 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-4">
            <Phone className="w-4 h-4" />
            Контакты
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы ответить на ваши вопросы и предоставить профессиональную консультацию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">
                Как с нами связаться
              </h3>
              <p className="text-gray-600 mb-8">
                Мы всегда рады обсудить ваши проекты и предложить оптимальные решения. 
                Выберите удобный способ связи или заполните форму обратной связи.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-gray-50 hover:bg-green-50 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-700 text-sm mb-1">{info.content}</p>
                        <p className="text-gray-500 text-xs">{info.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="border-0 overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Карта офиса</p>
                  <p className="text-sm">г. Москва, ул. Лесная, д. 1</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Отправить сообщение
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-700">Имя *</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-700">Компания</label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-700">Телефон *</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-700">Email *</label>
                    <Input placeholder="your@email.com" type="email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Тип услуги</label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Выберите услугу</option>
                    <option>Лесоустройство</option>
                    <option>Лесопатологические обследования</option>
                    <option>Проектирование лесных участков</option>
                    <option>Технический надзор</option>
                    <option>Инвентаризация лесов</option>
                    <option>ГИС технологии</option>
                    <option>Консультация</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Сообщение *</label>
                  <Textarea 
                    placeholder="Расскажите подробнее о вашем проекте..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Отправить сообщение
                  <Send className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Отправляя форму, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

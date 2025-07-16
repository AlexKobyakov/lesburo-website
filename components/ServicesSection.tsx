import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  MapPin, 
  Search, 
  FileText, 
  Eye, 
  Settings, 
  TreePine,
  ArrowRight
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: MapPin,
      title: 'Лесоустройство',
      description: 'Комплексное обследование лесных территорий, составление планов лесонасаждений и определение границ лесных участков.',
      features: ['Таксация лесов', 'Картографирование', 'Планы лесонасаждений']
    },
    {
      icon: Search,
      title: 'Лесопатологические обследования',
      description: 'Диагностика состояния лесных экосистем, выявление болезней и вредителей, оценка ущерба.',
      features: ['Санитарное состояние', 'Выявление вредителей', 'Рекомендации по лечению']
    },
    {
      icon: FileText,
      title: 'Проектирование лесных участков',
      description: 'Разработка проектной документации для создания лесных культур и лесохозяйственных мероприятий.',
      features: ['Проекты лесовосстановления', 'Планы рубок', 'Техдокументация']
    },
    {
      icon: Eye,
      title: 'Технический надзор',
      description: 'Контроль качества выполнения лесохозяйственных работ и соблюдения проектных решений.',
      features: ['Контроль качества', 'Авторский надзор', 'Приемка работ']
    },
    {
      icon: Settings,
      title: 'Инвентаризация лесов',
      description: 'Учет лесного фонда, определение качественных и количественных характеристик лесных ресурсов.',
      features: ['Учет лесного фонда', 'Оценка ресурсов', 'Кадастровые работы']
    },
    {
      icon: TreePine,
      title: 'ГИС технологии',
      description: 'Применение современных геоинформационных систем для анализа и управления лесными ресурсами.',
      features: ['Цифровые карты', 'Космоснимки', 'Базы данных']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-4">
            <Settings className="w-4 h-4" />
            Наши услуги
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Полный спектр лесопроектных услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем комплексные решения для эффективного управления 
            лесными ресурсами с применением современных технологий
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full justify-between text-green-600 hover:bg-green-50 p-0 h-auto mt-4">
                  Подробнее
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Нужна консультация по выбору услуг?
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Связаться с экспертом
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
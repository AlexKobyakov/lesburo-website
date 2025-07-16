import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Monitor, 
  Map, 
  Database, 
  BarChart3, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Layers,
  Calculator,
  FileText
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SoliSection() {
  const features = [
    {
      icon: Map,
      title: 'ГИС-технологии',
      description: 'Полноценная веб-ГИС с картографическими сервисами'
    },
    {
      icon: Database,
      title: 'База данных лесов',
      description: 'Централизованное хранение лесоустроительной информации'
    },
    {
      icon: BarChart3,
      title: 'Аналитика и отчеты',
      description: 'Автоматическая генерация отчетов и аналитических сводок'
    },
    {
      icon: Users,
      title: 'Многопользовательский доступ',
      description: 'Разграничение прав доступа для разных типов пользователей'
    },
    {
      icon: Globe,
      title: 'Веб-доступ',
      description: 'Работа через браузер без установки дополнительного ПО'
    },
    {
      icon: Zap,
      title: 'Автоматизация процессов',
      description: 'Автоматизация рутинных лесохозяйственных операций'
    }
  ];

  const modules = [
    {
      icon: Layers,
      title: 'Модуль картографии',
      description: 'Создание и редактирование лесных карт, слоев, тематических карт'
    },
    {
      icon: Calculator,
      title: 'Модуль расчетов',
      description: 'Автоматические расчеты запасов, площадей, объемов заготовки'
    },
    {
      icon: FileText,
      title: 'Модуль документооборота',
      description: 'Ведение проектной документации и отчетности'
    },
    {
      icon: BarChart3,
      title: 'Модуль мониторинга',
      description: 'Отслеживание изменений в лесном фонде в реальном времени'
    }
  ];

  const benefits = [
    'Сокращение времени на подготовку документации в 3-5 раз',
    'Повышение точности лесоустроительных работ',
    'Централизованное управление лесной информацией',
    'Интеграция с государственными информационными системами',
    'Соответствие всем требованиям лесного законодательства',
    'Техническая поддержка и обучение пользователей'
  ];

  return (
    <section id="soli" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                <Monitor className="w-4 h-4 mr-2" />
                Собственная разработка
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                <span className="text-blue-600">СОЛИ</span> — Система обработки 
                лесоустроительной информации
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Полноценная веб-геоинформационная система для комплексного управления 
                лесными ресурсами. Автоматизируем все процессы лесоустройства и 
                лесопользования.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Демо-версия СОЛИ
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                Техническая документация
              </Button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl text-blue-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">Внедрений системы</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Пользователей</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
              alt="Интерфейс системы СОЛИ"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            
            {/* Floating feature cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Map className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-900">ГИС-технологии</div>
                  <div className="text-xs text-gray-600">Веб-картография</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Возможности системы СОЛИ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексное решение для автоматизации всех процессов лесного хозяйства
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Modules Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4">
              Модули системы
            </h3>
            <p className="text-lg text-gray-600">
              Гибкая модульная архитектура для различных задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="p-6 border-0 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg text-gray-900 mb-2">{module.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits & CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl text-gray-900 mb-6">
                Преимущества внедрения СОЛИ
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h4 className="text-xl text-gray-900 mb-4">
                Готовы внедрить СОЛИ в вашей организации?
              </h4>
              <p className="text-gray-600 mb-6">
                Получите персональную демонстрацию системы и оценку 
                возможностей для вашей организации.
              </p>
              <div className="space-y-3">
                <Button size="lg" className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700">
                  Заказать демонстрацию
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <div className="text-sm text-gray-500">
                  Бесплатная консультация и тестовый период
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Building, 
  TrendingUp, 
  CreditCard, 
  Shield, 
  Building2, 
  GraduationCap,
  ArrowRight,
  Users
} from 'lucide-react';

export function ClientServicesSection() {
  const clientTypes = [
    {
      icon: Building,
      title: 'Арендаторам лесного фонда',
      description: 'Комплексные услуги для эффективного использования арендованных лесных участков',
      services: [
        'Проекты освоения лесов',
        'Лесохозяйственные регламенты',
        'Отчеты об использовании лесов',
        'Проекты рубок',
        'Лесовосстановительные мероприятия',
        'Мониторинг лесного фонда'
      ],
      color: 'bg-green-100 text-green-800',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      title: 'Инвесторам в лесную отрасль',
      description: 'Аналитические и консультационные услуги для принятия инвестиционных решений',
      services: [
        'Due diligence лесных активов',
        'Оценка лесосырьевой базы',
        'Инвестиционные проекты',
        'Технико-экономические обоснования',
        'Анализ рисков',
        'Стратегическое планирование'
      ],
      color: 'bg-blue-100 text-blue-800',
      bgColor: 'bg-blue-50'
    },
    {
      icon: CreditCard,
      title: 'Банкам и финансовым организациям',
      description: 'Независимая экспертиза для кредитования лесных проектов',
      services: [
        'Оценка залоговых лесных активов',
        'Экспертиза бизнес-планов',
        'Мониторинг кредитных проектов',
        'Аудит лесохозяйственной деятельности',
        'Оценка рисков проектов',
        'Техническое сопровождение'
      ],
      color: 'bg-yellow-100 text-yellow-800',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Shield,
      title: 'Особо охраняемым природным территориям',
      description: 'Специализированные услуги для ООПТ и природоохранных организаций',
      services: [
        'Проекты организации ООПТ',
        'Планы управления территориями',
        'Мониторинг биоразнообразия',
        'Экологическая экспертиза',
        'Проекты реабилитации экосистем',
        'Научные исследования'
      ],
      color: 'bg-emerald-100 text-emerald-800',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: Building2,
      title: 'Органам исполнительной власти субъектов РФ',
      description: 'Государственные услуги в сфере управления лесами',
      services: [
        'Лесные планы субъектов РФ',
        'Лесохозяйственные регламенты',
        'Проектирование лесничеств',
        'Государственная инвентаризация лесов',
        'Мониторинг лесных пожаров',
        'Внедрение СОЛИ'
      ],
      color: 'bg-purple-100 text-purple-800',
      bgColor: 'bg-purple-50'
    },
    {
      icon: GraduationCap,
      title: 'Научно-исследовательским организациям',
      description: 'Сотрудничество в области лесных исследований и разработок',
      services: [
        'Совместные исследования',
        'Научные публикации',
        'Экспериментальные проекты',
        'Методические разработки',
        'Обучение и стажировки',
        'Международные проекты'
      ],
      color: 'bg-orange-100 text-orange-800',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="services-clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-4">
            <Users className="w-4 h-4" />
            Услуги по типам клиентов
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Персонализированные решения для каждой отрасли
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы понимаем специфику работы различных организаций и предлагаем 
            целевые решения для каждого типа клиентов
          </p>
        </div>

        {/* Client Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-0 ${client.bgColor}`}>
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${client.color.replace('text-', 'bg-').replace('-800', '-200')} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <client.icon className={`w-8 h-8 ${client.color.split(' ')[1]}`} />
                </div>
                <CardTitle className="text-xl text-gray-900 leading-tight">
                  {client.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {client.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-gray-900 mb-3">Основные услуги:</h4>
                  <div className="space-y-2">
                    {client.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 ${client.color.split(' ')[1].replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className={`w-full justify-between ${client.color.split(' ')[1]} hover:${client.bgColor.replace('bg-', 'bg-').replace('-50', '-100')} p-0 h-auto mt-6`}
                >
                  Подробнее об услугах
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl text-gray-900 mb-4">
            Не нашли подходящую категорию?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Мы работаем с любыми организациями в сфере лесного хозяйства. 
            Обратитесь к нам для обсуждения индивидуальных решений.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Получить консультацию
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
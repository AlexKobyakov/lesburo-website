import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Users, 
  Award, 
  Target, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const advantages = [
    {
      icon: Users,
      title: 'Опытная команда',
      description: 'Высококвалифицированные специалисты с профильным образованием и многолетним опытом'
    },
    {
      icon: Award,
      title: 'Качество работ',
      description: 'Строгое соблюдение технических требований и стандартов качества'
    },
    {
      icon: Target,
      title: 'Индивидуальный подход',
      description: 'Учитываем специфику каждого проекта и потребности клиента'
    },
    {
      icon: Zap,
      title: 'Современные технологии',
      description: 'Используем передовые ГИС-технологии и современное оборудование'
    }
  ];

  const achievements = [
    'Более 500 успешно реализованных проектов',
    'Работаем с крупнейшими лесозаготовительными компаниями',
    'Полный пакет необходимых лицензий и разрешений',
    'Соблюдение сроков выполнения работ',
    'Гарантия качества всех выполненных услуг'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-4">
            <Users className="w-4 h-4" />
            О компании
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Надежный партнер в области лесопроектирования
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ООО "Лесбюро" — профессиональная команда экспертов, 
            предоставляющая качественные услуги в сфере лесного хозяйства
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-900">
                Профессиональный подход к каждому проекту
              </h3>
              <p className="text-gray-600 leading-relaxed">
                С 2008 года мы специализируемся на предоставлении комплексных 
                услуг в области лесного хозяйства. Наша компания объединяет 
                опытных специалистов с глубокими знаниями в области лесоустройства, 
                лесопатологии и современных ГИС-технологий.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Мы гордимся тем, что помогаем нашим клиентам эффективно управлять 
                лесными ресурсами, обеспечивая устойчивое развитие лесного хозяйства 
                и сохранение природных экосистем.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <Button className="bg-green-600 hover:bg-green-700">
              Узнать больше о компании
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="/images/team-work.svg"
              alt="Команда специалистов в лесу"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-3xl text-green-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">лет успешной работы</div>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center p-6 border-0 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <advantage.icon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg text-gray-900">{advantage.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
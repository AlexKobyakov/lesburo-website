import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Calendar, TreePine, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Лесоустройство Вологодской области',
      location: 'Вологодская область',
      area: '15 000 га',
      year: '2023',
      category: 'Лесоустройство',
      description: 'Комплексное лесоустройство с применением ГИС-технологий и космической съемки.',
      image: 'https://images.unsplash.com/photo-1574946113821-178a72e61888?w=400&h=250&fit=crop',
      tags: ['ГИС-технологии', 'Космоснимки', 'Картографирование']
    },
    {
      title: 'Лесопатологическое обследование Карелии',
      location: 'Республика Карелия',
      area: '8 500 га',
      year: '2023',
      category: 'Лесопатология',
      description: 'Выявление очагов короеда и разработка мер борьбы с вредителями.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      tags: ['Диагностика', 'Мониторинг', 'Рекомендации']
    },
    {
      title: 'Проект лесовосстановления в Тверской области',
      location: 'Тверская область',
      area: '12 000 га',
      year: '2022',
      category: 'Проектирование',
      description: 'Разработка проекта лесных культур на участках после сплошных рубок.',
      image: 'https://images.unsplash.com/photo-1516475080664-ed2fc6a32937?w=400&h=250&fit=crop',
      tags: ['Лесные культуры', 'Восстановление', 'Проектирование']
    },
    {
      title: 'ГИС-система управления лесами Псковской области',
      location: 'Псковская область',
      area: '25 000 га',
      year: '2022',
      category: 'ГИС-технологии',
      description: 'Создание цифровой системы учета и управления лесными ресурсами.',
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c27a?w=400&h=250&fit=crop',
      tags: ['Цифровизация', 'Базы данных', 'Автоматизация']
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Лесоустройство': return 'bg-green-100 text-green-800';
      case 'Лесопатология': return 'bg-orange-100 text-orange-800';
      case 'Проектирование': return 'bg-blue-100 text-blue-800';
      case 'ГИС-технологии': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-4">
            <TreePine className="w-4 h-4" />
            Наши проекты
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Примеры выполненных работ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ознакомьтесь с нашими успешными проектами в различных регионах России
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-white hover:shadow-xl transition-all duration-300">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Project Info */}
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TreePine className="w-4 h-4" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button variant="ghost" className="w-full justify-between text-green-600 hover:bg-green-50 mt-4">
                  Подробнее о проекте
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Выполненных проектов</div>
            </div>
            <div>
              <div className="text-3xl text-green-600 mb-2">2.5М</div>
              <div className="text-gray-600">Гектаров обследовано</div>
            </div>
            <div>
              <div className="text-3xl text-green-600 mb-2">85</div>
              <div className="text-gray-600">Регионов РФ</div>
            </div>
            <div>
              <div className="text-3xl text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Хотите увидеть больше примеров наших работ?
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Полное портфолио
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
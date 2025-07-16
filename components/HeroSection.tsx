import { Button } from './ui/button';
import { ArrowRight, TreePine, Shield, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const stats = [
    { icon: TreePine, value: '500+', label: 'Реализованных проектов' },
    { icon: Shield, value: '15+', label: 'Лет опыта' },
    { icon: Award, value: '100%', label: 'Качество работ' },
  ];

  return (
    <section id="home" className="relative bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
                <TreePine className="w-4 h-4" />
                Профессиональные лесные услуги
              </div>
              
              <h1 className="text-4xl lg:text-5xl text-gray-900 leading-tight">
                Комплексные решения для 
                <span className="text-green-600"> лесного хозяйства</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                ООО "Лесбюро" — ведущая лесопроектная организация, 
                предоставляющая полный спектр услуг по лесоустройству, 
                проектированию и сопровождению лесных участков.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Наши услуги
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                Скачать презентацию
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                alt="Лесной ландшафт"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-300 rounded-full opacity-20 z-0"></div>
            
            {/* Floating card */}
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-900">Лицензированная деятельность</div>
                  <div className="text-xs text-gray-600">Все необходимые разрешения</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
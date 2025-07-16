import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Calendar, 
  User, 
  Eye, 
  MessageSquare,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Clock
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BlogSection() {
  const blogPosts = [
    {
      title: 'Цифровизация лесного хозяйства: тренды 2024 года',
      excerpt: 'Обзор современных технологий в лесном хозяйстве: от дронов до искусственного интеллекта. Как цифровые решения меняют отрасль.',
      author: 'Иванов А.С.',
      date: '2024-02-15',
      category: 'Технологии',
      readTime: '7 мин',
      views: 1245,
      comments: 18,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
      tags: ['ГИС', 'Цифровизация', 'Дроны', 'ИИ'],
      featured: true
    },
    {
      title: 'Методы борьбы с короедом-типографом в сосновых лесах',
      excerpt: 'Практические рекомендации по выявлению, мониторингу и борьбе с короедом-типографом. Опыт европейских стран.',
      author: 'Петрова М.В.',
      date: '2024-02-10',
      category: 'Лесопатология',
      readTime: '12 мин',
      views: 987,
      comments: 24,
      image: 'https://images.unsplash.com/photo-1574946113821-178a72e61888?w=400&h=250&fit=crop',
      tags: ['Короед', 'Вредители', 'Защита леса', 'Мониторинг'],
      featured: false
    },
    {
      title: 'Новые требования к лесоустройству в 2024 году',
      excerpt: 'Анализ изменений в нормативной базе лесоустройства. Что изменилось и как это влияет на практическую деятельность.',
      author: 'Смирнов В.К.',
      date: '2024-02-05',
      category: 'Нормативная база',
      readTime: '9 мин',
      views: 756,
      comments: 12,
      image: 'https://images.unsplash.com/photo-1516475080664-ed2fc6a32937?w=400&h=250&fit=crop',
      tags: ['Лесоустройство', 'Законодательство', 'Регламенты'],
      featured: false
    },
    {
      title: 'Устойчивое лесопользование: баланс экологии и экономики',
      excerpt: 'Как совместить экономическую эффективность лесопользования с сохранением экосистем. Международный опыт.',
      author: 'Козлова Е.А.',
      date: '2024-01-28',
      category: 'Устойчивое развитие',
      readTime: '15 мин',
      views: 1123,
      comments: 31,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      tags: ['FSC', 'Сертификация', 'Экология', 'Экономика'],
      featured: true
    },
    {
      title: 'ГИС в лесном хозяйстве: практическое применение',
      excerpt: 'Подробный обзор применения геоинформационных систем в лесном хозяйстве. Кейсы и примеры успешного внедрения.',
      author: 'Николаев Д.И.',
      date: '2024-01-20',
      category: 'ГИС-технологии',
      readTime: '11 мин',
      views: 892,
      comments: 16,
      image: 'https://images.unsplash.com/photo-1520637736862-4d197d17c27a?w=400&h=250&fit=crop',
      tags: ['ГИС', 'Картография', 'Данные', 'Автоматизация'],
      featured: false
    },
    {
      title: 'Климатические изменения и их влияние на российские леса',
      excerpt: 'Анализ влияния климатических изменений на лесные экосистемы России. Прогнозы и адаптационные стратегии.',
      author: 'Федорова О.Н.',
      date: '2024-01-15',
      category: 'Климат',
      readTime: '13 мин',
      views: 1034,
      comments: 22,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
      tags: ['Климат', 'Экосистемы', 'Адаптация', 'Прогнозы'],
      featured: false
    }
  ];

  const categories = [
    { name: 'Все категории', count: blogPosts.length },
    { name: 'Технологии', count: 2 },
    { name: 'Лесопатология', count: 1 },
    { name: 'Нормативная база', count: 1 },
    { name: 'Устойчивое развитие', count: 1 },
    { name: 'ГИС-технологии', count: 1 }
  ];

  const popularTags = [
    'ГИС', 'Цифровизация', 'Лесоустройство', 'Экология', 
    'Мониторинг', 'Технологии', 'Законодательство', 'Защита леса'
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Технологии': 'bg-blue-100 text-blue-800',
      'Лесопатология': 'bg-red-100 text-red-800',
      'Нормативная база': 'bg-purple-100 text-purple-800',
      'Устойчивое развитие': 'bg-green-100 text-green-800',
      'ГИС-технологии': 'bg-indigo-100 text-indigo-800',
      'Климат': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            Блог
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Экспертные материалы по лесному хозяйству
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Актуальные статьи, аналитические обзоры и практические рекомендации 
            от ведущих специалистов отрасли
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <Card className="mb-6 border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm text-gray-700">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="mb-6 border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="text-xs cursor-pointer hover:bg-indigo-100 hover:text-indigo-800"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="border-0 bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h4 className="text-lg text-gray-900 mb-2">Подписка на блог</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Получайте новые статьи на почту
                </p>
                <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  <h3 className="text-xl text-gray-900">Рекомендуемые статьи</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post, index) => (
                    <Card key={index} className="group overflow-hidden border-0 bg-white hover:shadow-xl transition-all duration-300">
                      <div className="relative">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={getCategoryColor(post.category)}>
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <h4 className="text-lg text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>{post.comments}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-indigo-600 hover:bg-indigo-50 p-0">
                            Читать далее
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Posts */}
            <div>
              <h3 className="text-xl text-gray-900 mb-6">Последние статьи</h3>
              
              <div className="space-y-6">
                {regularPosts.map((post, index) => (
                  <Card key={index} className="group border-0 bg-white hover:shadow-lg transition-all duration-300">
                    <div className="grid md:grid-cols-3 gap-6 p-6">
                      <div className="relative overflow-hidden rounded-lg">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={getCategoryColor(post.category)}>
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 space-y-4">
                        <div>
                          <h4 className="text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors leading-tight">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              <span>{post.views}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-indigo-600 hover:bg-indigo-50">
                            Читать
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Загрузить больше статей
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

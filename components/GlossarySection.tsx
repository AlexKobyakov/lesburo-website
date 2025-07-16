import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, 
  BookOpen, 
  Hash,
  Edit,
  Heart,
  MessageSquare,
  TreePine,
  Compass
} from 'lucide-react';
import { useState } from 'react';

export function GlossarySection() {
  const [searchTerm, setSearchTerm] = useState('');

  const alphabetButtons = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ'.split('');

  const glossaryTerms = [
    {
      term: 'Арендатор лесного участка',
      definition: 'Гражданин или юридическое лицо, которому предоставлен лесной участок в аренду для осуществления одного или нескольких видов использования лесов.',
      category: 'Лесное право',
      views: 1245,
      likes: 23,
      comments: 5,
      lastUpdated: '2024-01-15',
      relatedTerms: ['Лесной участок', 'Договор аренды', 'Лесопользование']
    },
    {
      term: 'Биологическое разнообразие',
      definition: 'Вариабельность живых организмов из всех источников, включая наземные, морские и иные водные экосистемы и экологические комплексы, частью которых они являются.',
      category: 'Экология',
      views: 987,
      likes: 45,
      comments: 12,
      lastUpdated: '2024-02-03',
      relatedTerms: ['Экосистема', 'Биоценоз', 'Популяция']
    },
    {
      term: 'Возраст рубки',
      definition: 'Возраст, устанавливаемый для рубки спелых и перестойных лесных насаждений при ведении интенсивного лесного хозяйства.',
      category: 'Лесоводство',
      views: 756,
      likes: 18,
      comments: 8,
      lastUpdated: '2024-01-28',
      relatedTerms: ['Спелость древостоя', 'Рубки главного пользования', 'Интенсивное лесное хозяйство']
    },
    {
      term: 'ГИС',
      definition: 'Географическая информационная система - система сбора, хранения, анализа и графической визуализации пространственных данных и связанной с ними информации.',
      category: 'Технологии',
      views: 2156,
      likes: 67,
      comments: 24,
      lastUpdated: '2024-02-10',
      relatedTerms: ['Картография', 'Пространственные данные', 'Геоинформатика']
    },
    {
      term: 'Диаметр на высоте груди',
      definition: 'Диаметр ствола дерева, измеряемый на высоте 1,3 м от корневой шейки. Основной таксационный показатель.',
      category: 'Лесная таксация',
      views: 543,
      likes: 12,
      comments: 3,
      lastUpdated: '2024-01-20',
      relatedTerms: ['Таксация леса', 'Высота дерева', 'Объем ствола']
    },
    {
      term: 'Естественное возобновление',
      definition: 'Процесс восстановления леса путем самосева и появления поросли без участия человека.',
      category: 'Лесовосстановление',
      views: 834,
      likes: 29,
      comments: 7,
      lastUpdated: '2024-02-05',
      relatedTerms: ['Лесовосстановление', 'Самосев', 'Подрост']
    }
  ];

  const categories = [
    { name: 'Все категории', count: glossaryTerms.length, color: 'bg-gray-100 text-gray-800' },
    { name: 'Лесное право', count: 1, color: 'bg-blue-100 text-blue-800' },
    { name: 'Экология', count: 1, color: 'bg-green-100 text-green-800' },
    { name: 'Лесоводство', count: 1, color: 'bg-emerald-100 text-emerald-800' },
    { name: 'Технологии', count: 1, color: 'bg-purple-100 text-purple-800' },
    { name: 'Лесная таксация', count: 1, color: 'bg-orange-100 text-orange-800' },
    { name: 'Лесовосстановление', count: 1, color: 'bg-teal-100 text-teal-800' }
  ];

  const filteredTerms = glossaryTerms.filter(term => 
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossary" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            Глоссарий
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Энциклопедия лесного хозяйства
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексный справочник терминов и определений в области лесного хозяйства, 
            лесоводства и смежных дисциплин
          </p>
        </div>

        {/* Search */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Поиск терминов и определений..."
                className="pl-12 py-3 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Alphabet Navigation */}
            <div className="flex flex-wrap justify-center gap-2">
              {alphabetButtons.map((letter) => (
                <Button
                  key={letter}
                  variant="ghost"
                  size="sm"
                  className="w-8 h-8 p-0 hover:bg-purple-100 hover:text-purple-700"
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-0 bg-gray-50">
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-white transition-colors cursor-pointer"
                  >
                    <span className="text-sm text-gray-700">{category.name}</span>
                    <Badge className={`${category.color} text-xs`}>
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="mt-6 border-0 bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="p-6 text-center">
                <TreePine className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-2xl text-gray-900 mb-1">{glossaryTerms.length}+</div>
                <div className="text-sm text-gray-600 mb-4">терминов в глоссарии</div>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Edit className="w-4 h-4 mr-2" />
                  Предложить термин
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredTerms.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <div className="space-y-4">
                    {/* Term Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl text-gray-900">{item.term}</h3>
                          <Badge className="bg-purple-100 text-purple-800 text-xs">
                            {item.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {item.definition}
                        </p>
                      </div>
                    </div>

                    {/* Related Terms */}
                    {item.relatedTerms.length > 0 && (
                      <div>
                        <h4 className="text-sm text-gray-700 mb-2">Связанные термины:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.relatedTerms.map((related, relatedIndex) => (
                            <Badge 
                              key={relatedIndex}
                              variant="secondary"
                              className="text-xs cursor-pointer hover:bg-purple-100"
                            >
                              {related}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stats and Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Compass className="w-4 h-4" />
                          <span>{item.views} просмотров</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{item.comments}</span>
                        </div>
                        <span>Обновлено: {new Date(item.lastUpdated).toLocaleDateString('ru-RU')}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          Редактировать
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Hash className="w-4 h-4 mr-2" />
                          Ссылка
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Загрузить больше терминов
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
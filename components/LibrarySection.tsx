import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { 
  FileText, 
  Download, 
  Search, 
  Filter,
  Calendar,
  Tag,
  BookOpen,
  AlertCircle
} from 'lucide-react';

export function LibrarySection() {
  const documentCategories = [
    {
      name: 'Федеральные законы',
      count: 25,
      color: 'bg-red-100 text-red-800'
    },
    {
      name: 'Постановления Правительства',
      count: 48,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Приказы Минприроды',
      count: 89,
      color: 'bg-green-100 text-green-800'
    },
    {
      name: 'ГОСТы и СНиПы',
      count: 67,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      name: 'Методические указания',
      count: 124,
      color: 'bg-orange-100 text-orange-800'
    },
    {
      name: 'Научная литература',
      count: 156,
      color: 'bg-indigo-100 text-indigo-800'
    }
  ];

  const featuredDocuments = [
    {
      title: 'Лесной кодекс Российской Федерации',
      description: 'Основной федеральный закон, регулирующий лесные отношения в РФ',
      date: '2024-01-15',
      category: 'Федеральные законы',
      size: '2.5 МБ',
      format: 'PDF',
      downloads: 1456,
      isNew: true
    },
    {
      title: 'Правила заготовки древесины и особенности заготовки древесины',
      description: 'Постановление Правительства РФ о порядке заготовки древесины',
      date: '2023-12-20',
      category: 'Постановления Правительства',
      size: '1.8 МБ',
      format: 'PDF',
      downloads: 892,
      isNew: false
    },
    {
      title: 'ГОСТ 18486-87. Лесоводство. Термины и определения',
      description: 'Основные термины и определения в области лесоводства',
      date: '2023-11-10',
      category: 'ГОСТы и СНиПы',
      size: '1.2 МБ',
      format: 'PDF',
      downloads: 634,
      isNew: false
    },
    {
      title: 'Методика проведения лесопатологических обследований',
      description: 'Утвержденная методика проведения лесопатологических обследований',
      date: '2024-02-05',
      category: 'Методические указания',
      size: '3.1 МБ',
      format: 'PDF',
      downloads: 445,
      isNew: true
    }
  ];

  return (
    <section id="library" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm mb-4">
            <BookOpen className="w-4 h-4" />
            Библиотека документов
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
            Нормативно-правовая база лесного хозяйства
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Актуальная база документов, законов, ГОСТов и методических материалов 
            для специалистов лесной отрасли
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Поиск по названию, номеру документа, тексту..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Фильтры
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Найти документы
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h3 className="text-xl text-gray-900 mb-6">Категории документов</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentCategories.map((category, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer border-0 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-gray-900 mb-1">{category.name}</h4>
                    <p className="text-sm text-gray-600">{category.count} документов</p>
                  </div>
                  <Badge className={category.color}>
                    {category.count}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Documents */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl text-gray-900">Популярные документы</h3>
            <Button variant="outline">
              Все документы
            </Button>
          </div>

          <div className="grid gap-6">
            {featuredDocuments.map((doc, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-lg text-gray-900">{doc.title}</h4>
                          {doc.isNew && (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              Новый
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{doc.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(doc.date).toLocaleDateString('ru-RU')}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <span>{doc.category}</span>
                          </div>
                          <span>{doc.format} • {doc.size}</span>
                          <span>{doc.downloads} скачиваний</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">
                      Предпросмотр
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Скачать
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-amber-900 mb-2">Важное примечание</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                Все документы представлены в ознакомительных целях. Перед применением 
                обязательно проверяйте актуальность документов на официальных сайтах 
                государственных органов. ООО "Лесбюро" не несет ответственности за 
                возможные изменения в нормативно-правовых актах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
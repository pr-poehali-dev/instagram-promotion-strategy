import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center">
              <Icon name="Instagram" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              SMM PRO
            </span>
          </div>
          <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
            Начать продвижение
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
            <span className="text-sm font-semibold text-purple-700">✨ Топ SMM-агентство 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Взрывной рост
            </span>
            <br />
            в Instagram
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Превратим ваш аккаунт в магнит для подписчиков и клиентов. 
            Реальные результаты за 30 дней 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all"
            >
              Получить консультацию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-purple-300 hover:border-purple-500"
            >
              Посмотреть кейсы
            </Button>
          </div>
          <div className="mt-12 flex justify-center gap-12 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-purple-600">1200+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-pink-600">3.5M+</div>
              <div className="text-gray-600">Новых подписчиков</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-orange-500">97%</div>
              <div className="text-gray-600">Успешных кампаний</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/60">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Что мы делаем
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Полный спектр услуг для вашего успеха в Instagram</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "TrendingUp",
                title: "Таргетированная реклама",
                description: "Настройка рекламы с точным попаданием в вашу целевую аудиторию. ROI от 300%",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: "PenTool",
                title: "Контент-производство",
                description: "Создание вирусного контента, который приносит подписчиков и продажи",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: "Users",
                title: "Комьюнити-менеджмент",
                description: "Работа с аудиторией, ответы на комментарии, повышение вовлеченности",
                gradient: "from-orange-500 to-amber-500"
              },
              {
                icon: "BarChart3",
                title: "Аналитика и отчёты",
                description: "Еженедельные отчёты с понятными метриками и рекомендациями",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "Zap",
                title: "Массфолловинг и лайкинг",
                description: "Безопасное продвижение через активности для органического роста",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: "Star",
                title: "Работа с блогерами",
                description: "Подбор и ведение рекламных интеграций с микро и макро-инфлюенсерами",
                gradient: "from-pink-500 to-purple-500"
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Отзывы клиентов
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Реальные истории успеха наших клиентов</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Анна Петрова",
                username: "@beauty_anna",
                avatar: "👩‍🦰",
                text: "За 2 месяца работы мой Instagram вырос с 3К до 45К подписчиков! Продажи выросли в 8 раз. Команда просто волшебники 🔥",
                result: "+42K подписчиков",
                metric: "800% рост продаж"
              },
              {
                name: "Максим Орлов",
                username: "@fitmax_coach",
                avatar: "💪",
                text: "Долго искал толковое SMM-агентство. Здесь не только подписчики, но и реальные клиенты на тренировки. Окупилось за 3 недели!",
                result: "+28K подписчиков",
                metric: "150 новых клиентов"
              },
              {
                name: "Екатерина Смирнова",
                username: "@eco_shop_natural",
                avatar: "🌿",
                text: "Таргет настроен идеально - приходят именно те, кто покупает. Конверсия в продажи выросла вдвое. Рекомендую всем!",
                result: "+15K подписчиков",
                metric: "200% рост конверсии"
              }
            ].map((review, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-purple-100"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.username}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{review.text}</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                      {review.result}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                      {review.metric}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Начните расти уже сегодня!
            </h2>
            <p className="text-xl text-white/90">
              Оставьте заявку и получите бесплатный аудит вашего Instagram
            </p>
          </div>
          
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Анна"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="text-lg py-6"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Ваш Instagram
                  </label>
                  <Input 
                    placeholder="@your_instagram"
                    value={formData.instagram}
                    onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                    className="text-lg py-6"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Расскажите о ваших целях
                  </label>
                  <Textarea 
                    placeholder="Хочу увеличить продажи через Instagram..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="text-lg min-h-32"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-xl"
                >
                  Получить бесплатный аудит
                  <Icon name="Sparkles" size={20} className="ml-2" />
                </Button>
                
                <p className="text-sm text-center text-gray-500">
                  Ответим в течение 15 минут • Без спама и навязывания
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center">
              <Icon name="Instagram" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold">SMM PRO</span>
          </div>
          <p className="text-gray-400 mb-4">
            Профессиональное продвижение в Instagram
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Icon name="Send" size={24} />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 SMM PRO. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}

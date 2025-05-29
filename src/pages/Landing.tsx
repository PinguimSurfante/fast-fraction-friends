
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, BookOpen, Gamepad2, BarChart3, Check, Users, User, Shield, Globe, TrendingUp, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  const testimonials = [
    {
      text: "Minha filha aprendeu em uma semana o que levou meses na escola!",
      parent: "Maria, mãe da Sofia"
    },
    {
      text: "Ele nem percebe que está estudando — acha que está jogando!",
      parent: "João, pai do Pedro"
    },
    {
      text: "Finalmente uma forma divertida de ensinar matemática!",
      parent: "Ana, mãe do Lucas"
    }
  ];

  const features = [
    {
      icon: "📘",
      title: "Lições interativas",
      description: "Com personagens divertidos que tornam o aprendizado uma aventura!"
    },
    {
      icon: "🎮",
      title: "Mini-jogos",
      description: "Pratique frações enquanto se diverte com jogos incríveis!"
    },
    {
      icon: "📊",
      title: "Acompanhamento",
      description: "Medalhas e estrelas para celebrar cada conquista!"
    }
  ];

  const faqs = [
    {
      question: "É seguro para crianças?",
      answer: "Sim! Nossa plataforma é 100% segura, sem anúncios externos e com proteção total da privacidade das crianças."
    },
    {
      question: "Precisa instalar ou funciona online?",
      answer: "Funciona direto no navegador! Não precisa instalar nada, apenas acesse de qualquer dispositivo."
    },
    {
      question: "Como acompanho o progresso do meu filho?",
      answer: "Você recebe relatórios semanais detalhados e pode acompanhar em tempo real pelo dashboard dos pais."
    },
    {
      question: "O conteúdo é alinhado ao currículo escolar?",
      answer: "Sim! Todo o conteúdo segue a Base Nacional Comum Curricular (BNCC) para o 3º ano do ensino fundamental."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-yellow via-kid-blue to-kid-purple">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b-4 border-kid-purple/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🧮</div>
            <div>
              <h1 className="text-2xl font-bold text-purple-700">Fraction Fast Pack</h1>
              <p className="text-sm text-purple-500 font-medium">Aprender frações brincando!</p>
            </div>
          </div>
          <Link to="/lessons">
            <Button className="kid-button text-lg px-6 py-3">
              Entrar 🚀
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="kid-card max-w-4xl mx-auto">
            <div className="text-8xl mb-6 animate-bounce-slow">🎯</div>
            <h1 className="text-5xl font-bold text-purple-700 mb-6 leading-tight">
              Aprender frações nunca foi tão divertido! 🎉
            </h1>
            <p className="text-2xl text-purple-600 font-medium mb-8 leading-relaxed">
              Com jogos, lições e atividades, seu filho aprende brincando e se diverte estudando matemática!
            </p>
            <div className="flex justify-center mb-8">
              <div className="bg-kid-green/20 rounded-3xl p-8 border-4 border-kid-green/30">
                <div className="text-6xl">👨‍💻👧</div>
                <p className="text-purple-600 font-medium mt-4">Diversão garantida para toda a família!</p>
              </div>
            </div>
            <Link to="/lessons">
              <Button className="kid-button text-2xl px-12 py-6 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110">
                Começar agora! ✨
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 px-6 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-4">
            Como funciona? 🤔
          </h2>
          <p className="text-xl text-purple-600 text-center mb-12 font-medium">
            Três passos simples para transformar seu filho em um expert em frações!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="kid-card text-center hover:scale-105 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="text-6xl mb-6 animate-wiggle">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">{feature.title}</h3>
                  <p className="text-lg text-purple-600 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-4">
            O que os pais estão dizendo? 💬
          </h2>
          <p className="text-xl text-purple-600 text-center mb-12 font-medium">
            Milhares de famílias já estão aprendendo com a gente!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <Card className="kid-card bg-gradient-to-br from-kid-pink to-white border-4 border-kid-pink/30">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4 text-center">👨‍👩‍👧‍👦</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg text-purple-700 font-medium mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-purple-600 font-bold text-center">
                      — {testimonial.parent}
                    </p>
                  </CardContent>
                </Card>
                <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-kid-pink/30"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-20 px-6 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">
            Acesso completo por apenas $9/mês! 💰
          </h2>
          <p className="text-xl text-purple-600 mb-12 font-medium">
            Menos que um combo no McDonald's, mas muito mais nutritivo para o cérebro! 🧠
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plano Pais */}
            <Card className="kid-card border-4 border-kid-green/50 bg-gradient-to-br from-kid-green/10 to-white">
              <CardContent className="pt-8">
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">Plano para Pais</h3>
                <div className="text-4xl font-bold text-purple-700 mb-4">$9/mês</div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-purple-600 font-medium">Acesso completo para 1 criança</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-purple-600 font-medium">Relatórios de progresso semanais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-purple-600 font-medium">Suporte pedagógico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-purple-600 font-medium">Certificados de conclusão</span>
                  </li>
                </ul>
                <Button className="kid-button w-full text-xl py-4">
                  Assinar agora! 🚀
                </Button>
              </CardContent>
            </Card>

            {/* Plano Professoras */}
            <Card className="kid-card border-4 border-kid-orange/50 bg-gradient-to-br from-kid-orange/10 to-white">
              <CardContent className="pt-8">
                <div className="text-5xl mb-4">👩‍🏫</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">Plano para Professoras</h3>
                <div className="text-4xl font-bold text-purple-700 mb-4">$19/mês</div>
                <div className="text-sm text-purple-600 font-medium mb-4">por turma</div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-purple-600 font-medium">Múltiplos alunos por turma</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-purple-600 font-medium">Dashboard especial para sala</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-purple-600 font-medium">Relatórios individuais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-purple-600 font-medium">Material didático exclusivo</span>
                  </li>
                </ul>
                <Button className="kid-button w-full text-xl py-4">
                  Assinar agora! 📚
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-4">
            Dúvidas dos pais 🤔
          </h2>
          <p className="text-xl text-purple-600 text-center mb-12 font-medium">
            Aqui estão as respostas para as perguntas mais comuns!
          </p>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="kid-card">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                    <div className="text-2xl">❓</div>
                    {faq.question}
                  </h3>
                  <p className="text-lg text-purple-600 font-medium leading-relaxed pl-10">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-purple-700 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <div className="text-3xl">🧮</div>
                <h3 className="text-xl font-bold">Fraction Fast Pack</h3>
              </div>
              <p className="text-purple-200 font-medium">
                Transformando o aprendizado de frações em diversão!
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Para Educadores</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Plano Escolar</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Material Didático</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Treinamentos</a></li>
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-3xl hover:scale-110 transition-transform">📘</a>
                <a href="#" className="text-3xl hover:scale-110 transition-transform">📷</a>
                <a href="#" className="text-3xl hover:scale-110 transition-transform">🐦</a>
                <a href="#" className="text-3xl hover:scale-110 transition-transform">🎥</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-500 pt-8 text-center">
            <p className="text-purple-200 font-medium">
              © 2024 Fraction Fast Pack. Todos os direitos reservados. Feito com 💜 para crianças do Brasil!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

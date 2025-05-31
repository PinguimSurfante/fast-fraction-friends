// Landing.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate()
  const testimonials = [
    {
      text: "My daughter learned in one week what took months at school!",
      parent: "Maria, Sofia's mom"
    },
    {
      text: "He doesn't even realize he's studying — he thinks he's playing!",
      parent: "John, Pedro's dad"
    },
    {
      text: "Finally a fun way to teach math!",
      parent: "Anna, Lucas's mom"
    }
  ];

  const features = [
    {
      icon: "📘",
      title: "Interactive lessons",
      description: "With fun characters that turn learning into an adventure!"
    },
    {
      icon: "🎮",
      title: "Mini-games",
      description: "Practice fractions while having fun with amazing games!"
    },
    {
      icon: "📊",
      title: "Progress tracking",
      description: "Medals and stars to celebrate every achievement!"
    }
  ];

  const faqs = [
    {
      question: "Is it safe for children?",
      answer: "Yes! Our platform is 100% safe, with no external ads and complete protection of children's privacy."
    },
    {
      question: "Do I need to install anything or does it work online?",
      answer: "It works directly in the browser! No installation needed, just access from any device."
    },
    {
      question: "How do I track my child's progress?",
      answer: "You receive detailed weekly reports and can track progress in real-time through the parent dashboard."
    },
    {
      question: "Is the content aligned with school curriculum?",
      answer: "Yes! All content follows the Common Core State Standards for 3rd grade elementary math."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9c3] via-[#d9f99d] to-[#a5f3fc]">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b-4 border-kid-purple/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🧮</div>
            <div>
              <h1 className="text-2xl font-bold text-purple-700">Fraction Fast</h1>
              <p className="text-sm text-purple-500 font-medium">Learn fractions while playing!</p>
            </div>
          </div>
          <a
            href="https://pay.hotmart.com/Y100039546J?off=69lop8m2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="kid-button text-2xl px-12 py-6 text-black shadow-2xl hover:shadow-3xl transform hover:scale-110">
              Start now! ✨
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#fef9c3] via-[#d9f99d] to-[#a5f3fc]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-white/90 rounded-3xl p-10 shadow-xl border-4 border-white/50">
            <div className="text-8xl mb-6 animate-bounce-slow">🎯</div>
            <h1 className="text-5xl font-bold text-purple-700 mb-6 leading-tight">
              Learning fractions has never been so fun! 🎉
            </h1>
            <p className="text-2xl text-purple-600 font-medium mb-8 leading-relaxed">
              With games, lessons and activities, your child learns while playing and has fun studying math!
            </p>
            <div className="flex justify-center mb-8">
              <div className="bg-kid-green/20 rounded-3xl p-8 border-4 border-kid-green/30">
                <div className="text-6xl">👨‍💻👧</div>
                <p className="text-purple-600 font-medium mt-4">Fun guaranteed for the whole family!</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full max-w-md mx-auto">
                        <a
                          href="https://pay.hotmart.com/Y100039546J?off=69lop8m2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button className="kid-button text-2xl px-10 py-6 text-black rounded-2xl hover:scale-105 transition w-full">
                            Standard
                          </Button>
                        </a>
                        <a
                          href="https://pay.hotmart.com/Y100039546J?off=w575f5jj"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button className="kid-button text-2xl px-10 py-6 text-black bg-yellow-300 hover:bg-yellow-400 rounded-2xl hover:scale-105 transition w-full">
                            Premium 🌟
                          </Button>
                        </a>
                      </div>


          </div>
        </div>
      </section>


      {/* How it works */}
    {/* Plans Section */}
    <section className="py-20 px-6 bg-gradient-to-br from-[#fff1f2] via-[#fde68a] to-[#d8b4fe]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-700 text-center mb-10">
          Find the right plan for your family 👨‍👩‍👧‍👦
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Plan */}
          <Card className="bg-white border-4 border-purple-200 rounded-3xl p-8 shadow-xl text-center hover:scale-105 transition-all duration-300">
            <CardContent>
              <div className="text-6xl mb-2">🥈</div>
              <h3 className="text-3xl font-bold text-purple-700 mb-1">Standard Plan</h3>
              <p className="text-xl font-bold text-purple-500 mb-4">$9 per-month</p>
              <p className="text-lg text-purple-600 font-medium mb-6 leading-relaxed">
                ✔️ Interactive Lessons<br />
                ✔️ Fun Mini-Games<br />
                ✔️ Progress Tracking
              </p>
              <a
                href="https://pay.hotmart.com/Y100039546J?off=69lop8m2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="kid-button text-xl px-10 py-4 text-black rounded-2xl bg-kid-yellow hover:scale-105 transition">
                  Get Standard Plan
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-white border-4 border-yellow-300 rounded-3xl p-8 shadow-xl text-center hover:scale-105 transition-all duration-300">
            <CardContent>
              <div className="text-6xl mb-2">🌟</div>
              <h3 className="text-3xl font-bold text-yellow-700 mb-1">Premium Plan</h3>
              <p className="text-xl font-bold text-yellow-600 mb-4">$19 per-month</p>
              <p className="text-lg text-yellow-600 font-medium mb-6 leading-relaxed">
                ✅ Everything from Standard<br />
                ⭐ Exclusive Challenges<br />
                🧩 Future Game Updates<br />
                🎁 Special Rewards
              </p>
              <a
                href="https://pay.hotmart.com/Y100039546J?off=w575f5jj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="kid-button text-xl px-10 py-4 text-black bg-yellow-300 hover:bg-yellow-400 rounded-2xl hover:scale-105 transition">
                  Go Premium 🌟
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>



      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#e0f2fe] via-[#dbeafe] to-[#c7d2fe]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-4">
            What parents are saying? 💬
          </h2>
          <p className="text-xl text-purple-600 text-center mb-12 font-medium">
            Thousands of families are already learning with us!
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

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-700 text-center mb-4">
            Parents' questions 🤔
          </h2>
          <p className="text-xl text-purple-600 text-center mb-12 font-medium">
            Here are the answers to the most common questions!
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-rosy text-center hover:scale-105 transition-all duration-300">
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

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <div className="text-3xl">🧮</div>
                <h3 className="text-xl font-bold">Fraction Fast Pack</h3>
              </div>
              <p className="text-purple-200 font-medium">
                Transforming fraction learning into fun!
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Useful Links</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-purple-200 hover:text-white transition-colors">
                        Terms of Use
                      </Link>
                      </li>
                <li><Link to="/privacy" className="text-purple-200 hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                      </li>
                <li><Link to="/contact" className="text-purple-200 hover:text-white transition-colors">
                        Contact
                      </Link></li>
              </ul>
            </div>

            {/* <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">For Educators</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">School Plan</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Teaching Materials</a></li>
                <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Training</a></li>
              </ul>
            </div> */}

            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Social Media</h4>
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
              © 2024 Fraction Fast Pack. All rights reserved. Made with 💜 for children everywhere!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

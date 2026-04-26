import { useState } from 'react';
import { MessageCircle, CheckCircle, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState(null);

  const testimonials = [
    {
      name: "Priya K.",
      income: "₹8,000-10,000",
      text: "Ghar baithe handwriting karte hue mahine mein achchi kamain kar rahi hoon. Bohot flexible!"
    },
    {
      name: "Rajesh M.",
      income: "₹12,000-15,000",
      text: "Part-time kiya to itna achcha earn hua. Payment on time milta hai."
    },
    {
      name: "Isha P.",
      income: "₹6,000-8,000",
      text: "Student hoon, padhai ke sath yeh karte hoon. Kaafi helpful!"
    }
  ];

  const faqs = [
    {
      q: "Kya experience chahiye?",
      a: "Bilkul nahi! Beginner ho ya experienced, sabhi ke liye projects hain."
    },
    {
      q: "Payment kab milta hai?",
      a: "Weekly ya monthly - aapki choice. Direct bank transfer."
    },
    {
      q: "Kitna time lagta hai per project?",
      a: "Simple projects 2-3 ghante mein, complex 4-6 ghante."
    },
    {
      q: "Kya materials khud khareedne padenge?",
      a: "Nahi! Hum sab materials provide karte hain ya online format mein karte ho."
    },
    {
      q: "Mobile se kar sakte ho?",
      a: "Haan, tablet/mobile par bhi kar sakte ho. Document upload karte ho."
    },
    {
      q: "Kitna minimum earn kar sakte ho?",
      a: "Ek project se ₹500-2,000 tak. Jitna zyada karte ho utna zyada earn!"
    }
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Header - Sticky */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">✍️</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-green-600">HandWriting Home</h1>
          </div>
          <a
            href="https://t.me/handwriting_home_work"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 md:px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Join Now</span>
          </a>
        </div>
      </header>

      {/* Hero Section - High Impact */}
      <section className="bg-gradient-to-b from-green-50 via-white to-blue-50 px-4 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1">
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✨ 1000+ Active Members
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900">
                Ghar Baithe <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Handwriting</span> Karte Kamen Karo
              </h2>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Flexible timing, easy work, real income. Har mahine <span className="font-bold text-green-600">₹5,000 - ₹20,000+</span> earn karo ghar se!
              </p>

              {/* Key Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">₹500-2,000 per project</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">Weekly/Monthly payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">No experience needed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">24/7 Support available</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/handwriting_home_work"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center"
                >
                  Join Telegram Channel
                </a>
                <button
                  onClick={() => {
                    document.getElementById('details').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all"
                >
                  Aur Jano
                </button>
              </div>
            </div>

            {/* Right - Image/Stats */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-2xl">
                      <div className="text-4xl font-black text-green-600 mb-2">1000+</div>
                      <p className="text-sm text-gray-600 font-semibold">Active Members</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-2xl">
                      <div className="text-4xl font-black text-blue-600 mb-2">₹20K+</div>
                      <p className="text-sm text-gray-600 font-semibold">Max Monthly</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-2xl">
                      <div className="text-4xl font-black text-purple-600 mb-2">100%</div>
                      <p className="text-sm text-gray-600 font-semibold">Payment Guarantee</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-2xl">
                      <div className="text-4xl font-black text-orange-600 mb-2">5+</div>
                      <p className="text-sm text-gray-600 font-semibold">Project Types</p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border-2 border-green-200">
                    <p className="text-sm text-gray-700 mb-3">
                      <span className="font-bold text-green-700">⭐ Sabse Badi Baat:</span>
                    </p>
                    <p className="text-lg font-bold text-green-800">
                      Aaj Hi Join Karo, Kal Se Paise Kamane Shuru Karo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us - Features */}
      <section id="details" className="px-4 md:px-8 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-4 text-gray-900">
            Kyun Join Kare?
          </h3>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Hazar se zyada log already kar rahe hain aur paise kama rahe hain
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-green-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                💰
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">High Income</h4>
              <p className="text-gray-600 mb-4 text-lg">
                Simple handwriting se <span className="font-bold text-green-600">₹500-2,000</span> per project earn karo
              </p>
              <p className="text-sm text-gray-500">Monthly ₹5,000 - ₹20,000+ possible</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-blue-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                ⏰
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">Flexible Timing</h4>
              <p className="text-gray-600 mb-4 text-lg">
                Apni speed se kaam karo. <span className="font-bold">24/7</span> project available
              </p>
              <p className="text-sm text-gray-500">Student, homemaker, part-time worker - sabke liye</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-purple-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 text-3xl">
                ✅
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">Easy Process</h4>
              <p className="text-gray-600 mb-4 text-lg">
                Koi experience nahi chahiye. <span className="font-bold">Beginner friendly</span> projects
              </p>
              <p className="text-sm text-gray-500">Complete guide aur support milti hai</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
            Kaise Shuru Kare? (4 Easy Steps)
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: 1, title: "Join Telegram", desc: "Channel join karo" },
              { num: 2, title: "Get Projects", desc: "Available projects dekho" },
              { num: 3, title: "Complete Work", desc: "Handwriting complete karo" },
              { num: 4, title: "Get Paid", desc: "Payment receive karo" }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-b from-green-50 to-emerald-50 p-8 rounded-2xl text-center border-2 border-green-200 hover:border-green-400 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-2xl font-black rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.num}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 text-3xl text-green-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-300 text-center">
            <p className="text-gray-700 text-lg">
              <span className="font-bold text-green-700">⚡ Important:</span> Join karte hi aapko channel mein <span className="font-bold">complete guide</span> milegi. Koi confusion nahi hogi!
            </p>
          </div>
        </div>
      </section>

      {/* Projects Available */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
            Kaunse Projects Milte Hain?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "📚", title: "Books/Copies", desc: "Textbooks aur copies likhne ke projects - ₹500-1,500" },
              { icon: "📝", title: "Forms Filling", desc: "Important forms fill karne - ₹400-1,000" },
              { icon: "📄", title: "Document Writing", desc: "Official documents aur letters - ₹800-2,000" },
              { icon: "📖", title: "Notes Transcription", desc: "Notes ko likhna aur organize karna - ₹600-1,500" },
              { icon: "✏️", title: "Handwriting Practice", desc: "Calligraphy aur handwriting practice - ₹500-1,200" },
              { icon: "🎓", title: "Academic Work", desc: "Student assignments aur projects - ₹700-1,800" }
            ].map((project, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-green-500">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
            Hamari Community Kya Kehti Hai?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-2 border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-800 mb-6 italic text-lg">"{testimonial.text}"</p>
                <div className="border-t-2 border-green-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-green-600 font-semibold">Monthly: {testimonial.income}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all"
                >
                  <h4 className="text-left font-bold text-gray-900 text-lg">{faq.q}</h4>
                  <span className={`text-2xl text-green-500 transition-transform ${activeTab === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {activeTab === idx && (
                  <div className="px-6 pb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-t-2 border-green-200">
                    <p className="text-gray-700 text-lg">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border-3 border-yellow-300 p-8 rounded-2xl">
            <p className="text-gray-800 font-semibold text-lg">
              <span className="text-2xl">🎯</span> Koi aur sawal hai? Join karke directly channel mein pooch sakte ho! Team 24/7 available hai.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA - Strong Conversion */}
      <section className="px-4 md:px-8 py-16 md:py-24 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Ab Aur Der Mat Karo!
          </h3>
          <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
            Har din <span className="font-bold">100+ naye members</span> join kar rahe hain aur paise kama rahe hain. Tum bhi shuru karo aaj hi!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://t.me/handwriting_home_work"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-110 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              Join Telegram Now
            </a>
          </div>

          <p className="text-sm opacity-80">
            ✅ Free to join • ✅ No Registration Fee • ✅ Start Earning Immediately
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-8 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">About Us</h4>
              <p className="text-sm">Handwriting Home - Ghar baithe paise kamane ka safal platform</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><a href="https://t.me/handwriting_home_work" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Join Channel</a></li>
                <li><a href="#details" className="hover:text-green-400">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <p className="text-sm">Join Telegram channel for 24/7 support</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm">© 2026 HandWriting Home • All rights reserved</p>
            <p className="text-xs mt-4 text-gray-500">Disclaimer: Income results may vary based on effort and project availability</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
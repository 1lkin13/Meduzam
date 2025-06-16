"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Beer, Cookie } from "lucide-react"
import { menuData } from "./data"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

export default function MeduzaPage() {
  const [currentLang, setCurrentLang] = useState<"az" | "en" | "ar">("az")
  const [activeSection, setActiveSection] = useState<string>("shishalar")
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const data = menuData[currentLang]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openWhatsApp = (): void => {
    window.open("https://wa.me/994508773373?text=Salam! Meduza haqqında məlumat almaq istəyirəm.", "_blank")
  }

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getSectionIcon = (sectionId: string): JSX.Element => {
    switch (sectionId) {
      case "shishalar":
        return <img src="/images/shisha.png" alt="Shisha" width={26} height={26} />
      case "beer":
        return <Beer size={24} />
      case "snacks":
        return <Cookie size={24} />
      default:
        return <Beer size={24} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-950 to-stone-950">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-stone-900/95 backdrop-blur-xl shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl flex items-center justify-center shadow-lg">
       <img src="/images/logo.png" alt="Shisha" />
            
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                {data.brand.name}
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {data.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-amber-700/30 text-amber-200 shadow-lg border border-amber-600/30"
                      : "text-stone-300 hover:text-amber-300 hover:bg-amber-800/20"
                  }`}
                >
                  {getSectionIcon(item.id)}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 bg-stone-800/60 backdrop-blur-sm rounded-xl p-1 border border-stone-700/50">
              {(["az", "en", "ar"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    currentLang === lang
                      ? "bg-gradient-to-r from-amber-600 to-orange-700 text-white shadow-lg"
                      : "text-stone-400 hover:text-amber-200 hover:bg-stone-700/50"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Arka plan görseli ve koyu overlay */}
        <div className="absolute inset-0">
          <img src="/images/meduzahero.jpg" alt="Meduzam Pub Hero" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-stone-900/60 to-amber-950/70"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
              {data.hero.title}
            </h1>
            {/* İletişim ve adres kutusu */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-stone-900/80 border border-amber-700/30 rounded-2xl px-6 py-4 mb-4 shadow-lg backdrop-blur-sm">
              <a href={`tel:${data.footer.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-amber-300 hover:text-amber-400 font-semibold text-base md:text-lg transition">
                <span role="img" aria-label="Telefon">{data.footer.phone}</span>
              </a>
              <span className="hidden md:inline text-stone-500">|</span>
              <span className="flex items-center gap-2 text-amber-200 font-medium text-base md:text-lg">
                <span role="img" aria-label="Ünvan"></span> {data.footer.address}
              </span>
              <span className="hidden md:inline text-stone-500">|</span>
              <span className="flex items-center gap-2 text-green-300 font-medium text-base md:text-lg">
                <span role="img" aria-label="Çatdırılma">{data.footer.delivery}</span>
              </span>
            </div>
            <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-2xl mx-auto leading-relaxed font-serif">
              {data.hero.subtitle}
            </p>
            <button
              onClick={() => scrollToSection("shishalar")}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-700 to-orange-800 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-700/25 border border-amber-600/30 backdrop-blur-sm"
            >
              <span className="relative z-10">{data.hero.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-orange-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Alt ve üst koyu geçişler */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-900 to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-stone-900 to-transparent"></div>
      </section>

      {/* Menu Sections */}
      {data.categories.map((category, categoryIndex) => (
        <section key={categoryIndex} id={category.id} className="py-24 mb-2">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-700 to-orange-800 rounded-2xl flex items-center justify-center shadow-xl border border-amber-600/30">
                  {getSectionIcon(category.id)}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                  {category.name}
                </h2>
              </div>
              <p className="text-xl text-stone-400 max-w-2xl mx-auto">{category.description}</p>
            </div>

            {/* Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group relative bg-gradient-to-br from-stone-800/70 to-stone-900/70 backdrop-blur-sm rounded-3xl p-6 border border-stone-700/60 hover:border-amber-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-700/20 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${itemIndex * 0.1}s` }}
                  onClick={() => openWhatsApp()}
                >
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl border border-stone-600/30">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-stone-400 leading-relaxed">{item.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.seafood && (
                        <span className="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full border border-blue-500/40">
                        🐟 {data.labels.seafood}
                        </span>
                      )}
                      {item.spicy && (
                        <span className="px-3 py-1 bg-red-700/30 text-red-300 text-xs rounded-full border border-red-600/40">
                          🌶️ {data.labels.spicy}
                        </span>
                      )}
                        {item.popular && (
                        <span className="px-3 py-1 bg-green-700/30 text-green-300 text-xs rounded-full border border-green-600/40">
                          😋 {data.labels.popular}
                        </span>
                      )}
                      {item.alcohol && (
                        <span className="px-3 py-1 bg-amber-700/30 text-amber-300 text-xs rounded-full border border-amber-600/40">
                          {item.alcohol}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700/10 to-orange-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-16 bg-stone-900/70 backdrop-blur-sm border-t border-stone-700/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-4">
              {data.footer.title}
            </h3>
            <p className="text-stone-400 text-lg">{data.footer.subtitle}</p>
          </div>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border border-green-500/30"
          >
            <MessageCircle size={24} />
            <span>{data.footer.whatsapp}</span>
          </button>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center border-4 border-green-500/30"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  )
}

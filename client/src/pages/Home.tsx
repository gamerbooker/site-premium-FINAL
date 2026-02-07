import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles, Zap, Play, Star, Shield, Clock, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

/**
 * DESIGN PHILOSOPHY: Ultra Premium 2026
 * Inspirado em: Disney (magia), Apple (minimalismo), Meta (conexão), NVIDIA (tech), Microsoft (confiança)
 * 
 * Paleta: 
 * - Fundo: #000000 → #0a0a0f (preto profundo)
 * - Primário: #00D4FF (cyan elétrico - NVIDIA)
 * - Secundário: #7C3AED (roxo mágico - Disney)
 * - Accent: #00FF88 (verde sucesso)
 * - Gradientes: Multi-color premium
 * 
 * Tipografia: SF Pro Display / Inter (Apple-style)
 * Animações: Suaves, cinematográficas, mágicas
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden">
      
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#7C3AED]/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#00FF88]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation - Apple Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Prompts Virais
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#resultados" className="text-sm font-medium text-white/70 hover:text-white transition-all duration-300">Resultados</a>
            <a href="#como-funciona" className="text-sm font-medium text-white/70 hover:text-white transition-all duration-300">Como Funciona</a>
            <a href="#beneficios" className="text-sm font-medium text-white/70 hover:text-white transition-all duration-300">Benefícios</a>
          </div>
          
          <a 
            href="https://pay.kiwify.com.br/3YHOg1n" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
            <button className="relative px-6 py-2.5 bg-black rounded-xl text-sm font-semibold text-white border border-white/10 hover:border-white/20 transition-all duration-300">
              Acessar Agora
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section - Disney Magic + Apple Minimalism */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                <span className="text-sm font-medium text-white/80">+5.000 criadores ativos</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white">Crie Vídeos</span>
                <span className="block bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#00FF88] bg-clip-text text-transparent">
                  Virais com IA
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/60 max-w-xl leading-relaxed">
                50 prompts prontos para TikTok, YouTube e Instagram. 
                <span className="text-white font-medium"> Copie. Cole. Poste.</span>
              </p>
              
              {/* Platform Logos */}
              <div className="flex items-center gap-6 py-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <svg viewBox="0 0 48 48" className="w-6 h-6">
                    <path fill="#00f2ea" d="M34.1,10.1c-2.1-2.4-3.2-5.4-3.2-8.6h-6.8v28.1c0,3.5-2.9,6.4-6.4,6.4s-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4c0.7,0,1.3,0.1,1.9,0.3v-6.9c-0.6-0.1-1.3-0.1-1.9-0.1c-7.3,0-13.2,5.9-13.2,13.2s5.9,13.2,13.2,13.2s13.2-5.9,13.2-13.2V18.3c2.6,1.9,5.8,3,9.2,3v-6.8C37.6,14.5,35.5,12.7,34.1,10.1z"/>
                  </svg>
                  <span className="text-sm font-medium text-white/80">TikTok</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-sm font-medium text-white/80">YouTube</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <defs>
                      <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFDC80"/>
                        <stop offset="25%" stopColor="#FCAF45"/>
                        <stop offset="50%" stopColor="#F77737"/>
                        <stop offset="75%" stopColor="#F56040"/>
                        <stop offset="100%" stopColor="#C13584"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm font-medium text-white/80">Instagram</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://pay.kiwify.com.br/3YHOg1n" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#00FF88] rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
                  <span className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-xl text-lg font-bold text-white shadow-2xl shadow-[#7C3AED]/30 hover:shadow-[#7C3AED]/50 transition-all duration-300">
                    Acessar Agora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <a 
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-lg font-semibold text-white/80 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  Ver Como Funciona
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#00FF88]" />
                  <span className="text-sm text-white/60">Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#00D4FF]" />
                  <span className="text-sm text-white/60">Acesso imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#7C3AED]" />
                  <span className="text-sm text-white/60">Atualizações grátis</span>
                </div>
              </div>
            </div>
            
            {/* Right - Hero Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF]/20 via-[#7C3AED]/20 to-[#00FF88]/20 rounded-3xl blur-3xl" />
              <img 
                src="/images/hero-creator.png"
                alt="Criador de conteúdo com dashboards de ganhos"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/50 border border-white/10"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 p-4 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FF88] to-[#00D4FF] flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">$14,511</p>
                    <p className="text-sm text-white/60">Ganhos este mês</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Real Earnings */}
      <section id="resultados" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/20 mb-6">
              <Star className="w-4 h-4 text-[#00FF88]" />
              <span className="text-sm font-medium text-[#00FF88]">Resultados Reais</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Ganhos </span>
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">Comprovados</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Criadores usando nossos prompts estão gerando receita real nas principais plataformas
            </p>
          </div>
          
          {/* Earnings Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* TikTok Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative p-6 bg-[#0a0a0f] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00f2ea] to-[#ff0050] flex items-center justify-center">
                    <svg viewBox="0 0 48 48" className="w-8 h-8">
                      <path fill="white" d="M34.1,10.1c-2.1-2.4-3.2-5.4-3.2-8.6h-6.8v28.1c0,3.5-2.9,6.4-6.4,6.4s-6.4-2.9-6.4-6.4s2.9-6.4,6.4-6.4c0.7,0,1.3,0.1,1.9,0.3v-6.9c-0.6-0.1-1.3-0.1-1.9-0.1c-7.3,0-13.2,5.9-13.2,13.2s5.9,13.2,13.2,13.2s13.2-5.9,13.2-13.2V18.3c2.6,1.9,5.8,3,9.2,3v-6.8C37.6,14.5,35.5,12.7,34.1,10.1z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">TikTok</h3>
                    <p className="text-sm text-white/50">Creator Fund</p>
                  </div>
                </div>
                
                <img 
                  src="/images/tiktok-earnings.png"
                  alt="TikTok earnings dashboard"
                  className="w-full h-auto rounded-xl mb-6 border border-white/5"
                />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Ganhos (30 dias)</span>
                    <span className="text-2xl font-bold text-[#00FF88]">$4,250.80</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-xs text-white/50 mb-1">Views</p>
                      <p className="text-lg font-semibold text-white">400K</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-xs text-white/50 mb-1">Seguidores</p>
                      <p className="text-lg font-semibold text-white">+12K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* YouTube Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF0000] to-[#CC0000] rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative p-6 bg-[#0a0a0f] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF0000] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8">
                      <path fill="white" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">YouTube</h3>
                    <p className="text-sm text-white/50">Studio Analytics</p>
                  </div>
                </div>
                
                <img 
                  src="/images/youtube-earnings.png"
                  alt="YouTube earnings dashboard"
                  className="w-full h-auto rounded-xl mb-6 border border-white/5"
                />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Receita (28 dias)</span>
                    <span className="text-2xl font-bold text-[#00FF88]">$8,120.45</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-xs text-white/50 mb-1">Views</p>
                      <p className="text-lg font-semibold text-white">1.2M</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-xs text-white/50 mb-1">Inscritos</p>
                      <p className="text-lg font-semibold text-white">+5.3K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Instagram Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative p-6 bg-[#0a0a0f] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-8 h-8">
                      <path fill="white" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Instagram</h3>
                    <p className="text-sm text-white/50">Reels Bonus</p>
                  </div>
                </div>
                
                <img 
                  src="/images/instagram-earnings.png"
                  alt="Instagram earnings dashboard"
                  className="w-full h-auto rounded-xl mb-6 border border-white/5"
                />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Bônus (30 dias)</span>
                    <span className="text-2xl font-bold text-[#00FF88]">$2,140.15</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-xs text-white/50 mb-1">Alcance</p>
                      <p className="text-lg font-semibold text-white">850K</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-xs text-white/50 mb-1">Plays</p>
                      <p className="text-lg font-semibold text-white">3.5M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Total Stats */}
          <div className="mt-20 p-8 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-3xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] bg-clip-text text-transparent">$2.5M+</p>
                <p className="text-white/60 mt-2">Ganhos gerados</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white">5,000+</p>
                <p className="text-white/60 mt-2">Criadores ativos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#00FF88]">34%</p>
                <p className="text-white/60 mt-2">Taxa de viralização</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white">50</p>
                <p className="text-white/60 mt-2">Prompts premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Apple Style */}
      <section id="como-funciona" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 mb-6">
              <Zap className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-sm font-medium text-[#7C3AED]">Simples e Rápido</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Como </span>
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] bg-clip-text text-transparent">Funciona</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Em 3 passos simples, você estará criando conteúdo viral
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative p-8 bg-white/[0.02] rounded-3xl border border-white/10 hover:border-[#00D4FF]/30 transition-all duration-500 group">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-[#7C3AED]/30">
                1
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-4">Escolha o Prompt</h3>
                <p className="text-white/60 leading-relaxed">
                  Navegue pelos 50 prompts organizados em 5 categorias estratégicas. Cada um foi criado para um objetivo específico de viralização.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative p-8 bg-white/[0.02] rounded-3xl border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-500 group">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#00FF88] flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-[#7C3AED]/30">
                2
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-4">Copie e Cole</h3>
                <p className="text-white/60 leading-relaxed">
                  Copie o prompt e cole no ChatGPT ou sua IA preferida. Em segundos, você terá um roteiro completo para seu vídeo.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative p-8 bg-white/[0.02] rounded-3xl border border-white/10 hover:border-[#00FF88]/30 transition-all duration-500 group">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00FF88] to-[#00D4FF] flex items-center justify-center text-xl font-bold text-black shadow-lg shadow-[#00FF88]/30">
                3
              </div>
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-4">Poste e Lucre</h3>
                <p className="text-white/60 leading-relaxed">
                  Grave seu vídeo seguindo o roteiro e poste. Repita o processo em escala e veja seus ganhos crescerem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Por que </span>
              <span className="bg-gradient-to-r from-[#00FF88] to-[#00D4FF] bg-clip-text text-transparent">Escolher</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Tudo o que você precisa para dominar o conteúdo viral
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "50 Prompts Premium", desc: "Cada prompt foi testado e otimizado para máxima viralização" },
              { icon: Zap, title: "Resultados Rápidos", desc: "Comece a criar conteúdo viral em menos de 5 minutos" },
              { icon: Users, title: "Qualquer Nicho", desc: "Funciona para fitness, finanças, humor, educação e mais" },
              { icon: TrendingUp, title: "Escalável", desc: "Use os prompts infinitamente em diferentes ângulos" },
              { icon: Shield, title: "Garantia 7 Dias", desc: "Se não gostar, devolvemos 100% do seu dinheiro" },
              { icon: Clock, title: "Acesso Vitalício", desc: "Pague uma vez e tenha acesso para sempre, com atualizações" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/[0.02] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#7C3AED]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-12 rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/30 via-[#00D4FF]/20 to-[#00FF88]/30 blur-3xl" />
            <div className="absolute inset-0 bg-[#0a0a0f]/80" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Comece a </span>
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#00FF88] bg-clip-text text-transparent">Viralizar Hoje</span>
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                Junte-se a mais de 5.000 criadores que já estão gerando milhares de dólares com nossos prompts
              </p>
              
              {/* Price */}
              <div className="mb-8">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-2xl text-white/40 line-through">R$197</span>
                  <span className="text-5xl font-bold text-white">R$47</span>
                </div>
                <p className="text-white/60 mt-2">Acesso vitalício • Pagamento único</p>
              </div>
              
              <a 
                href="https://pay.kiwify.com.br/3YHOg1n" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#00FF88] rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
                <span className="relative flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-xl text-xl font-bold text-white shadow-2xl shadow-[#7C3AED]/30 hover:shadow-[#7C3AED]/50 transition-all duration-300">
                  Quero Acessar Agora
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <div className="flex justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#00FF88]" />
                  <span className="text-sm text-white/60">Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#00D4FF]" />
                  <span className="text-sm text-white/60">Acesso imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#7C3AED] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Prompts Virais</span>
          </div>
          <p className="text-white/40 text-sm">
            © 2026 Prompts Virais. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-xl border-t border-white/10 md:hidden z-50">
        <a 
          href="https://pay.kiwify.com.br/3YHOg1n" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] rounded-xl text-lg font-bold text-white"
        >
          Acessar Agora - R$47
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

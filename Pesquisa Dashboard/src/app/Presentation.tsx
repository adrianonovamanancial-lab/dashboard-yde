import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Music, Calendar, CheckCircle, Youtube, Clock, Users, Settings, ArrowRight } from 'lucide-react';
import heroLogoImage from 'figma:asset/72d9b08afad15dd6d1ecf014c3b58f2eeb402ba9.png';
import footerLogoImage from 'figma:asset/e2514aa9132679fba4963166d8be0f228763286d.png';
import cardIconImage from 'figma:asset/57b4ce9e8b74258366ddd1a38e29d5ccadde40cb.png';
import canalThumbnail from 'figma:asset/64581d4d5fb9f96d19eb939c410b678e284e9f8e.png';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1 - Intro
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8" style={{ backgroundColor: '#162C46' }}>
          <img src={heroLogoImage} alt="Yde Symbol" className="h-32 w-auto mb-12" />
          <h1 
            className="text-6xl lg:text-7xl mb-6 text-center leading-tight"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            Yde
          </h1>
          <p 
            className="text-3xl mb-8 text-center"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#B8963A',
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}
          >
            Por todo o mundo
          </p>
          <p 
            className="text-2xl text-center max-w-3xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#FFFFFF',
              opacity: 0.9
            }}
          >
            Sua igreja no YouTube sem precisar operar nada
          </p>
        </div>
      )
    },

    // Slide 2 - Missão
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8" style={{ backgroundColor: '#162C46' }}>
          <h1 
            className="text-6xl lg:text-7xl mb-8 text-center leading-tight max-w-5xl"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            A missão vai além do templo
          </h1>
          <p 
            className="text-3xl text-center max-w-4xl mb-6"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#FFFFFF',
              opacity: 0.95
            }}
          >
            Sua igreja no YouTube sem precisar operar nada.
          </p>
          <p 
            className="text-2xl text-center max-w-3xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#B8963A',
              fontWeight: 600,
              fontStyle: 'italic'
            }}
          >
            O YouTube é hoje o maior púlpito do mundo
          </p>
        </div>
      )
    },

    // Slide 3 - A Realidade
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8 py-16 bg-white">
          <h2 
            className="text-5xl lg:text-6xl mb-6 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            A Realidade
          </h2>
          <p 
            className="text-2xl text-center mb-16 max-w-4xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Muitas igrejas não estão presentes no YouTube, não por falta de visão, mas por limitações práticas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            <div className="bg-gray-50 p-10 rounded-lg border-2 border-gray-200 text-center">
              <Users size={64} className="mb-6 mx-auto" style={{ color: '#B8963A' }} />
              <h3 
                className="text-2xl mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Falta de equipe
              </h3>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                Não há pessoas disponíveis para operar canais digitais de forma contínua.
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-lg border-2 border-gray-200 text-center">
              <Clock size={64} className="mb-6 mx-auto" style={{ color: '#B8963A' }} />
              <h3 
                className="text-2xl mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Falta de tempo
              </h3>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                A liderança está focada no ministério, não em gestão de redes sociais.
              </p>
            </div>

            <div className="bg-gray-50 p-10 rounded-lg border-2 border-gray-200 text-center">
              <Settings size={64} className="mb-6 mx-auto" style={{ color: '#B8963A' }} />
              <h3 
                className="text-2xl mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Falta de conhecimento técnico
              </h3>
              <p 
                className="text-lg"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                A operação digital exige conhecimento que não faz parte da rotina ministerial.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4 - A Proposta
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8 py-16 bg-gray-50">
          <h2 
            className="text-5xl lg:text-6xl mb-6 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            A Proposta
          </h2>
          <p 
            className="text-2xl text-center mb-16 max-w-4xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Yde disponibiliza a estrutura que sustenta a presença contínua da sua igreja no YouTube.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            <div className="flex items-start gap-4 p-8 bg-white rounded-lg border-2 border-gray-200">
              <CheckCircle size={36} className="flex-shrink-0 mt-1" style={{ color: '#B8963A' }} />
              <div>
                <h3 
                  className="text-2xl mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46'
                  }}
                >
                  Canal estruturado
                </h3>
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    color: '#162C46', 
                    opacity: 0.7 
                  }}
                >
                  Um canal profissional configurado e pronto para representar sua igreja.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-8 bg-white rounded-lg border-2 border-gray-200">
              <CheckCircle size={36} className="flex-shrink-0 mt-1" style={{ color: '#B8963A' }} />
              <div>
                <h3 
                  className="text-2xl mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46'
                  }}
                >
                  Presença contínua
                </h3>
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    color: '#162C46', 
                    opacity: 0.7 
                  }}
                >
                  Conteúdo sendo distribuído regularmente, sem que sua igreja precise operar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-8 bg-white rounded-lg border-2 border-gray-200">
              <CheckCircle size={36} className="flex-shrink-0 mt-1" style={{ color: '#B8963A' }} />
              <div>
                <h3 
                  className="text-2xl mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46'
                  }}
                >
                  Conteúdo recorrente
                </h3>
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    color: '#162C46', 
                    opacity: 0.7 
                  }}
                >
                  A Palavra sendo transmitida de forma consistente e organizada.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-8 bg-white rounded-lg border-2 border-gray-200">
              <CheckCircle size={36} className="flex-shrink-0 mt-1" style={{ color: '#B8963A' }} />
              <div>
                <h3 
                  className="text-2xl mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#162C46'
                  }}
                >
                  Identidade própria
                </h3>
                <p 
                  className="text-lg"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    color: '#162C46', 
                    opacity: 0.7 
                  }}
                >
                  O canal reflete a identidade e missão da sua igreja.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5 - Como Funciona
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8 py-16" style={{ backgroundColor: '#162C46' }}>
          <h2 
            className="text-5xl lg:text-6xl mb-16 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl">
            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                1
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Criamos o canal
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#FFFFFF', 
                  opacity: 0.8 
                }}
              >
                Estruturamos o canal do zero com identidade profissional.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                2
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Personalizamos
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#FFFFFF', 
                  opacity: 0.8 
                }}
              >
                Adaptamos tudo à identidade e missão da sua igreja.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                3
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Mantemos ativo
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#FFFFFF', 
                  opacity: 0.8 
                }}
              >
                Cuidamos da presença contínua e organização do conteúdo.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                4
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Caminhamos juntos
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#FFFFFF', 
                  opacity: 0.8 
                }}
              >
                Reunião mensal com o pastor para alinhamento do conteúdo.
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
                style={{ 
                  backgroundColor: '#B8963A',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                5
              </div>
              <h3 
                className="text-xl mb-4"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Usa quando quiser
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#FFFFFF', 
                  opacity: 0.8 
                }}
              >
                A igreja publica cultos e mensagens sempre que desejar.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6 - Louvores
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8 bg-white">
          <div className="max-w-5xl">
            <div className="bg-gradient-to-br from-[#162C46] to-[#1a3556] p-16 rounded-2xl shadow-2xl border-2 border-[#B8963A]">
              <div className="flex justify-center items-center gap-6 mb-8">
                <Music size={56} style={{ color: '#B8963A' }} />
                <Calendar size={56} style={{ color: '#B8963A' }} />
              </div>

              <div className="text-center mb-8">
                <span 
                  className="inline-block"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                    fontSize: '140px',
                    lineHeight: 1,
                    color: '#B8963A',
                    textShadow: '0 4px 20px rgba(184, 150, 58, 0.3)'
                  }}
                >
                  12
                </span>
              </div>

              <h2 
                className="text-5xl mb-8 text-center leading-tight"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#FFFFFF'
                }}
              >
                Louvores exclusivos por mês
              </h2>

              <p 
                className="text-2xl mb-8 text-center max-w-3xl mx-auto"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#FFFFFF',
                  opacity: 0.95,
                  lineHeight: 1.6
                }}
              >
                Sua igreja terá uma playlist própria, atualizada semanalmente com louvores exclusivos.
              </p>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#B8963A]/30 max-w-2xl mx-auto">
                <p 
                  className="text-center text-xl"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    letterSpacing: '0.02em'
                  }}
                >
                  Conteúdo novo, constante e alinhado com a direção pastoral.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7 - O que você recebe
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8 py-16 bg-gray-50 overflow-y-auto">
          <h2 
            className="text-5xl lg:text-6xl mb-6 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            O que você recebe da Yde
          </h2>
          <p 
            className="text-2xl text-center mb-12 max-w-4xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Uma estrutura pronta para sua igreja ter presença contínua no YouTube.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mb-8">
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Canal pronto e organizado
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                Estrutura completa com capa, foto e organização inicial.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Identidade visual da sua igreja
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                Thumb padrão e personalização com a marca da igreja.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Presença contínua com louvores
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                Conteúdo recorrente para manter o canal ativo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Testemunhos personalizados
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                Histórias reais com identidade da igreja.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Suporte e padronização
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                A igreja não precisa entender YouTube.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-[#B8963A] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <img src={cardIconImage} alt="" className="w-full h-full object-contain" />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontWeight: 700,
                  color: '#162C46'
                }}
              >
                Liberdade para lives e cultos
              </h3>
              <p 
                className="text-base"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  color: '#162C46', 
                  opacity: 0.7 
                }}
              >
                A igreja pode transmitir quando desejar.
              </p>
            </div>
          </div>

          <p 
            className="text-3xl text-center italic"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: 600,
              color: '#162C46'
            }}
          >
            "Sua igreja não precisa operar. Só precisa ministrar."
          </p>
        </div>
      )
    },

    // Slide 8 - Autonomia
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8 bg-white">
          <div className="max-w-5xl text-center">
            <h2 
              className="text-5xl lg:text-6xl mb-10"
              style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontWeight: 700,
                color: '#162C46'
              }}
            >
              Autonomia
            </h2>
            
            <p 
              className="text-2xl leading-relaxed"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#162C46',
                opacity: 0.8
              }}
            >
              Tudo relacionado ao relacionamento com membros, comentários e interações permanece totalmente com a igreja. 
              O Yde atua exclusivamente como estrutura de presença, mantendo o canal ativo e organizado. 
              Sua igreja mantém total controle sobre a comunicação com sua comunidade.
            </p>
          </div>
        </div>
      )
    },

    // Slide 9 - Plano e Investimento
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8" style={{ backgroundColor: '#F9FAFB' }}>
          <h2 
            className="text-5xl lg:text-6xl mb-12 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Plano simples
          </h2>
          
          <div className="bg-white p-16 rounded-lg shadow-lg border-2 max-w-3xl" style={{ borderColor: '#B8963A' }}>
            <p 
              className="text-xl mb-4 text-center"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#162C46',
                opacity: 0.7,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 700
              }}
            >
              Estrutura + presença contínua
            </p>
            
            <div className="mb-3 text-center">
              <span 
                className="text-3xl line-through"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.4
                }}
              >
                R$ 550,00
              </span>
            </div>
            
            <div className="mb-10 text-center">
              <span 
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '100px',
                  color: '#162C46'
                }}
              >
                R$ 350
              </span>
              <span 
                className="text-4xl ml-3"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.6
                }}
              >
                /mês
              </span>
            </div>

            <div className="max-w-md mx-auto mb-10">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} style={{ color: '#B8963A' }} />
                  <span 
                    className="text-lg"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif', 
                      color: '#162C46' 
                    }}
                  >
                    Canal estruturado
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} style={{ color: '#B8963A' }} />
                  <span 
                    className="text-lg"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif', 
                      color: '#162C46' 
                    }}
                  >
                    Identidade visual
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} style={{ color: '#B8963A' }} />
                  <span 
                    className="text-lg"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif', 
                      color: '#162C46' 
                    }}
                  >
                    Presença recorrente
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} style={{ color: '#B8963A' }} />
                  <span 
                    className="text-lg"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif', 
                      color: '#162C46' 
                    }}
                  >
                    Organização do conteúdo
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p 
                className="text-base leading-relaxed text-center"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#162C46',
                  opacity: 0.7
                }}
              >
                A monetização por anúncios do YouTube sustenta a estrutura do projeto. 
                As iniciativas da igreja permanecem 100% da igreja.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10 - Canal Atendido (Case)
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8 py-8 bg-white">
          <h2 
            className="text-3xl lg:text-4xl mb-3 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Um dos canais que cuidamos
          </h2>
          
          <p 
            className="text-lg mb-6 text-center max-w-3xl"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Veja na prática como funciona nossa estrutura de presença contínua
          </p>

          <div className="w-full max-w-5xl">
            <div className="bg-gradient-to-br from-[#162C46] to-[#1a3556] p-6 rounded-2xl shadow-2xl border-2 mb-4" style={{ borderColor: '#B8963A' }}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Youtube size={36} style={{ color: '#B8963A' }} />
                <h3 
                  className="text-2xl text-center"
                  style={{ 
                    fontFamily: 'Playfair Display, serif', 
                    fontWeight: 700,
                    color: '#FFFFFF'
                  }}
                >
                  Espaço de Oração
                </h3>
              </div>

              <p 
                className="text-base text-center mb-4"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#FFFFFF',
                  opacity: 0.95
                }}
              >
                Canal estruturado com presença contínua, identidade visual própria e conteúdo organizado semanalmente.
              </p>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <CheckCircle size={24} className="mx-auto mb-1" style={{ color: '#B8963A' }} />
                  <p 
                    className="text-xs"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#FFFFFF',
                      opacity: 0.9
                    }}
                  >
                    Canal ativo
                  </p>
                </div>
                <div>
                  <CheckCircle size={24} className="mx-auto mb-1" style={{ color: '#B8963A' }} />
                  <p 
                    className="text-xs"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#FFFFFF',
                      opacity: 0.9
                    }}
                  >
                    Identidade própria
                  </p>
                </div>
                <div>
                  <CheckCircle size={24} className="mx-auto mb-1" style={{ color: '#B8963A' }} />
                  <p 
                    className="text-xs"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#FFFFFF',
                      opacity: 0.9
                    }}
                  >
                    Presença contínua
                  </p>
                </div>
              </div>
            </div>

            {/* Canal Incorporado */}
            <div className="w-full bg-black rounded-xl shadow-2xl overflow-hidden border-4" style={{ borderColor: '#B8963A' }}>
              <a 
                href="https://www.youtube.com/watch?v=HPqy-EwGfVs"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer hover:opacity-90 transition-opacity"
              >
                <img
                  src={canalThumbnail}
                  alt="Canal Espaço de Oração - Amor Infinito"
                  className="w-full"
                  style={{ height: '360px', objectFit: 'cover' }}
                />
              </a>
            </div>
          </div>
        </div>
      )
    },

    // Slide 11 - CTA Final
    {
      component: () => (
        <div className="h-screen flex flex-col items-center justify-center px-8" style={{ backgroundColor: '#162C46' }}>
          <img src={footerLogoImage} alt="Yde Symbol" className="h-24 w-auto mb-12" />
          
          <h2 
            className="text-5xl lg:text-6xl mb-8 text-center leading-tight max-w-5xl"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            Sua igreja pode estar presente no digital sem precisar de equipe ou estrutura.
          </h2>
          
          <p 
            className="text-6xl mb-12 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              color: '#FFFFFF'
            }}
          >
            YDE
          </p>

          <div className="flex flex-col items-center gap-4">
            <p 
              className="text-lg"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#B8963A',
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}
            >
              Por todo o mundo
            </p>
          </div>
        </div>
      )
    }
  ];

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Content */}
      <CurrentSlideComponent />

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
          style={{
            backgroundColor: '#B8963A',
            color: '#FFFFFF'
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all rounded-full"
              style={{
                width: currentSlide === index ? '32px' : '12px',
                height: '12px',
                backgroundColor: currentSlide === index ? '#B8963A' : 'rgba(184, 150, 58, 0.3)'
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
          style={{
            backgroundColor: '#B8963A',
            color: '#FFFFFF'
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Counter */}
      <div 
        className="fixed top-8 right-8 text-xl z-50"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          color: currentSlide === 2 || currentSlide === 3 || currentSlide === 6 || currentSlide === 7 || currentSlide === 8 ? '#162C46' : '#FFFFFF'
        }}
      >
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
}
import { Logo } from '../components/Logo';
import { LogoHorizontal } from '../components/LogoHorizontal';
import { LogoSymbol } from '../components/LogoSymbol';
import { ExportableLogoCard } from '../components/ExportableLogoCard';

export function ExportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 
            className="text-5xl mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Exportação — Ydde
          </h1>
          <p 
            className="text-lg"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.7
            }}
          >
            Todas as versões da identidade visual prontas para download
          </p>
        </div>

        {/* Instruções */}
        <div className="mb-16 p-8 bg-gray-50 rounded-lg">
          <h2 
            className="text-2xl mb-4"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Como Exportar
          </h2>
          <ul 
            className="space-y-2"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              opacity: 0.8
            }}
          >
            <li>• <strong>PNG:</strong> Clique no tamanho desejado (512px, 1024px, 2048px, 4096px)</li>
            <li>• <strong>SVG:</strong> Clique no botão "Exportar SVG" para formato vetorial escalável</li>
            <li>• <strong>Fundo Transparente:</strong> Todos os arquivos PNG e SVG têm fundo transparente</li>
            <li>• <strong>Versões:</strong> Clara (azul + dourado), Escura (branco + dourado), Dourada (monocromática)</li>
          </ul>
        </div>

        {/* Logo Principal */}
        <section className="mb-20">
          <h2 
            className="text-3xl mb-8"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Logo Principal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExportableLogoCard
              title="Versão Clara"
              description="Para fundos brancos e claros"
              filename="altar-digital-logo-clara"
              backgroundColor="#FFFFFF"
            >
              <Logo size={200} variant="light" />
            </ExportableLogoCard>

            <ExportableLogoCard
              title="Versão Escura"
              description="Para fundos escuros"
              filename="altar-digital-logo-escura"
              backgroundColor="#162C46"
            >
              <Logo size={200} variant="dark" />
            </ExportableLogoCard>

            <ExportableLogoCard
              title="Fundo Transparente"
              description="SVG com transparência"
              filename="altar-digital-logo-transparente"
              isPattern={true}
            >
              <Logo size={200} variant="light" />
            </ExportableLogoCard>
          </div>
        </section>

        {/* Logo Horizontal */}
        <section className="mb-20">
          <h2 
            className="text-3xl mb-8"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Logo Horizontal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExportableLogoCard
              title="Versão Clara"
              description="Para banners e cabeçalhos claros"
              filename="altar-digital-horizontal-clara"
              backgroundColor="#FFFFFF"
              isHorizontal={true}
            >
              <LogoHorizontal size={80} variant="light" />
            </ExportableLogoCard>

            <ExportableLogoCard
              title="Versão Escura"
              description="Para banners e cabeçalhos escuros"
              filename="altar-digital-horizontal-escura"
              backgroundColor="#162C46"
              isHorizontal={true}
            >
              <LogoHorizontal size={80} variant="dark" />
            </ExportableLogoCard>

            <ExportableLogoCard
              title="Versão Dourada"
              description="Monocromática dourada"
              filename="altar-digital-horizontal-dourada"
              backgroundColor="#FFFFFF"
              isHorizontal={true}
            >
              <LogoHorizontal size={80} variant="gold" />
            </ExportableLogoCard>
          </div>
        </section>

        {/* Símbolo Isolado */}
        <section className="mb-20">
          <h2 
            className="text-3xl mb-8"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Símbolo Isolado
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ExportableLogoCard
              title="Versão Clara"
              description="Padrão"
              filename="altar-digital-simbolo-clara"
              backgroundColor="#FFFFFF"
            >
              <LogoSymbol size={150} variant="light" />
            </ExportableLogoCard>

            <ExportableLogoCard
              title="Versão Escura"
              description="Fundos escuros"
              filename="altar-digital-simbolo-escura"
              backgroundColor="#162C46"
            >
              <LogoSymbol size={150} variant="dark" />
            </ExportableLogoCard>

            <ExportableLogoCard
              title="Versão Dourada"
              description="Monocromática"
              filename="altar-digital-simbolo-dourada"
              backgroundColor="#FFFFFF"
            >
              <LogoSymbol size={150} variant="gold" />
            </ExportableLogoCard>

            <ExportableLogoCard
              title="Transparente"
              description="Fundo transparente"
              filename="altar-digital-simbolo-transparente"
              isPattern={true}
            >
              <LogoSymbol size={150} variant="light" />
            </ExportableLogoCard>
          </div>
        </section>
      </div>
    </div>
  );
}
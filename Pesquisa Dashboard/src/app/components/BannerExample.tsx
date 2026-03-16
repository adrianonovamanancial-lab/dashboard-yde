import { LogoHorizontal } from './LogoHorizontal';

export function BannerExample() {
  return (
    <div className="w-full">
      <div 
        className="relative overflow-hidden"
        style={{ 
          backgroundColor: '#162C46',
          minHeight: '300px'
        }}
      >
        {/* Padrão de fundo discreto */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(184, 150, 58, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(184, 150, 58, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Elementos decorativos */}
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 150, 58, 0.1) 0%, transparent 70%)',
            transform: 'translate(-40%, -40%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(184, 150, 58, 0.1) 0%, transparent 70%)',
            transform: 'translate(40%, 40%)'
          }}
        />

        {/* Conteúdo principal */}
        <div className="relative z-10 flex items-center justify-between px-16 py-12">
          <div className="flex-1">
            <LogoHorizontal height={100} variant="dark" />
          </div>

          <div className="flex-1 text-right">
            <h2 
              className="text-3xl mb-3"
              style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.02em'
              }}
            >
              Uma estrutura que serve
            </h2>
            <p 
              className="text-base max-w-md ml-auto"
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '0.03em',
                lineHeight: 1.7
              }}
            >
              Permitindo que igrejas evangélicas mantenham
              presença contínua no YouTube
            </p>

            {/* Linha decorativa */}
            <div className="mt-6 flex items-center justify-end gap-4">
              <div 
                className="h-px flex-1 max-w-32"
                style={{ backgroundColor: 'rgba(184, 150, 58, 0.5)' }}
              />
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#B8963A' }}
              />
            </div>
          </div>
        </div>

        {/* Detalhe inferior */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(184, 150, 58, 0.5) 50%, transparent 100%)'
          }}
        />
      </div>
    </div>
  );
}
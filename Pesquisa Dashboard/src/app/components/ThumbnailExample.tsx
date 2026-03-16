import { LogoWatermark } from './LogoWatermark';

export function ThumbnailExample() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div 
        className="aspect-video rounded-lg overflow-hidden relative"
        style={{ backgroundColor: '#162C46' }}
      >
        {/* Grid sutil de fundo */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(184, 150, 58, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(184, 150, 58, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Área de conteúdo principal */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
          <div 
            className="text-center max-w-2xl border-2 rounded-lg p-8"
            style={{ 
              borderColor: 'rgba(184, 150, 58, 0.4)',
              backgroundColor: 'rgba(22, 44, 70, 0.4)'
            }}
          >
            <h2 
              className="text-5xl mb-4"
              style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
                lineHeight: 1.3
              }}
            >
              Título do Sermão
            </h2>
            <p 
              className="text-xl"
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '0.05em'
              }}
            >
              Pastor · Igreja Local
            </p>
          </div>
        </div>

        {/* Marca d'água discreta no canto inferior direito */}
        <div className="absolute bottom-6 right-6">
          <div style={{ opacity: 0.6 }}>
            <LogoWatermark size={50} />
          </div>
        </div>

        {/* Detalhe decorativo superior esquerdo */}
        <div 
          className="absolute top-0 left-0 w-32 h-32"
          style={{
            background: 'linear-gradient(135deg, rgba(184, 150, 58, 0.2) 0%, transparent 70%)'
          }}
        />

        {/* Detalhe decorativo inferior direito */}
        <div 
          className="absolute bottom-0 right-0 w-40 h-40"
          style={{
            background: 'linear-gradient(-45deg, rgba(184, 150, 58, 0.15) 0%, transparent 70%)'
          }}
        />
      </div>
    </div>
  );
}
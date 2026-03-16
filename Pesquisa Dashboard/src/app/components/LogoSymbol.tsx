interface LogoSymbolProps {
  size?: number;
  variant?: 'light' | 'dark' | 'gold';
}

export function LogoSymbol({ size = 200, variant = 'light' }: LogoSymbolProps) {
  const primaryColor = variant === 'dark' ? '#FFFFFF' : variant === 'gold' ? '#B8963A' : '#162C46';
  const accentColor = variant === 'dark' ? '#B8963A' : variant === 'gold' ? '#162C46' : '#B8963A';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Livro aberto - páginas esquerda e direita */}
      {/* Página esquerda */}
      <path
        d="M 50 70 Q 50 60, 60 60 L 95 60 L 95 140 L 60 140 Q 50 140, 50 130 Z"
        fill={primaryColor}
      />
      
      {/* Página direita */}
      <path
        d="M 105 60 L 140 60 Q 150 60, 150 70 L 150 130 Q 150 140, 140 140 L 105 140 Z"
        fill={primaryColor}
      />
      
      {/* Base/lombada do livro */}
      <rect
        x="95"
        y="60"
        width="10"
        height="80"
        fill={primaryColor}
        opacity="0.3"
      />
      
      {/* Triângulo de play em espaço negativo (cortado do livro) */}
      <path
        d="M 85 80 L 115 100 L 85 120 Z"
        fill={accentColor}
        opacity="0.9"
      />
      
      {/* Linhas de texto estilizadas nas páginas (sutis) */}
      {/* Página esquerda */}
      <line x1="60" y1="75" x2="88" y2="75" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      <line x1="60" y1="85" x2="88" y2="85" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      <line x1="60" y1="95" x2="85" y2="95" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      
      {/* Página direita */}
      <line x1="112" y1="75" x2="140" y2="75" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      <line x1="112" y1="85" x2="140" y2="85" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      <line x1="115" y1="95" x2="140" y2="95" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      
      <line x1="60" y1="115" x2="88" y2="115" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      <line x1="60" y1="125" x2="85" y2="125" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      
      <line x1="112" y1="115" x2="140" y2="115" stroke={accentColor} strokeWidth="2" opacity="0.3" />
      <line x1="115" y1="125" x2="140" y2="125" stroke={accentColor} strokeWidth="2" opacity="0.3" />
    </svg>
  );
}
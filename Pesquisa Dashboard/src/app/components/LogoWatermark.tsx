interface LogoWatermarkProps {
  size?: number;
}

export function LogoWatermark({ size = 60 }: LogoWatermarkProps) {
  return (
    <div className="flex items-center gap-2" style={{ opacity: 0.5 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Livro aberto */}
        <path d="M 50 70 Q 50 60, 60 60 L 95 60 L 95 140 L 60 140 Q 50 140, 50 130 Z" fill="#162C46" />
        <path d="M 105 60 L 140 60 Q 150 60, 150 70 L 150 130 Q 150 140, 140 140 L 105 140 Z" fill="#162C46" />
        
        {/* Base/lombada */}
        <rect x="95" y="60" width="10" height="80" fill="#162C46" opacity="0.3" />
        
        {/* Triângulo de play */}
        <path d="M 85 80 L 115 100 L 85 120 Z" fill="#B8963A" opacity="0.9" />
        
        {/* Linhas de texto */}
        <line x1="60" y1="75" x2="88" y2="75" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="60" y1="85" x2="88" y2="85" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="60" y1="95" x2="85" y2="95" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="112" y1="75" x2="140" y2="75" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="112" y1="85" x2="140" y2="85" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="115" y1="95" x2="140" y2="95" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="60" y1="115" x2="88" y2="115" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="60" y1="125" x2="85" y2="125" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="112" y1="115" x2="140" y2="115" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
        <line x1="115" y1="125" x2="140" y2="125" stroke="#B8963A" strokeWidth="2" opacity="0.3" />
      </svg>

      <span 
        style={{ 
          fontFamily: 'Playfair Display, serif', 
          fontSize: `${size * 0.28}px`,
          fontWeight: 700,
          color: '#162C46',
          letterSpacing: '0.03em'
        }}
      >
        Ydde
      </span>
    </div>
  );
}
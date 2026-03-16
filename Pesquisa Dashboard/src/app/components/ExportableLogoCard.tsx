import { Download } from 'lucide-react';
import { useRef } from 'react';

interface ExportableLogoCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  backgroundColor?: string;
  filename: string;
  isPattern?: boolean;
  isHorizontal?: boolean;
}

export function ExportableLogoCard({
  title,
  description,
  children,
  backgroundColor = '#FFFFFF',
  filename,
  isPattern = false,
  isHorizontal = false
}: ExportableLogoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const exportAsPNG = (size: number) => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Para logos horizontais, usar proporção 3:1, senão quadrado
    const canvasWidth = isHorizontal ? size * 3 : size;
    const canvasHeight = size;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Desenhar fundo se necessário
    if (!isPattern && backgroundColor !== '#FFFFFF') {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    // Capturar todo o conteúdo HTML usando html2canvas seria ideal,
    // mas vamos usar uma abordagem SVG
    const svgElement = containerElement.querySelector('svg');
    if (!svgElement) return;

    // Criar SVG temporário com todo o conteúdo
    const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    tempSvg.setAttribute('width', canvasWidth.toString());
    tempSvg.setAttribute('height', canvasHeight.toString());
    tempSvg.setAttribute('viewBox', `0 0 ${canvasWidth} ${canvasHeight}`);

    // Clonar e adicionar todos os SVGs
    const svgs = containerElement.querySelectorAll('svg');
    svgs.forEach((svg, index) => {
      const clone = svg.cloneNode(true) as SVGSVGElement;
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      
      // Posicionar baseado no layout
      if (isHorizontal) {
        // Logo horizontal: ícone à esquerda
        const iconSize = size * 0.8;
        const iconX = size * 0.3;
        const iconY = (canvasHeight - iconSize) / 2;
        g.setAttribute('transform', `translate(${iconX}, ${iconY}) scale(${iconSize / 200})`);
      } else {
        // Logo quadrada centralizada
        const scale = (size * 0.8) / 200;
        const x = (canvasWidth - 200 * scale) / 2;
        const y = (canvasHeight - 200 * scale) / 2;
        g.setAttribute('transform', `translate(${x}, ${y}) scale(${scale})`);
      }
      
      // Copiar conteúdo do SVG para o grupo
      while (clone.firstChild) {
        g.appendChild(clone.firstChild);
      }
      tempSvg.appendChild(g);
    });

    // Adicionar textos se existirem
    const textElements = containerElement.querySelectorAll('h1, p, span');
    textElements.forEach((textEl) => {
      if (textEl.textContent && isHorizontal) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const computedStyle = window.getComputedStyle(textEl);
        
        text.textContent = textEl.textContent;
        text.setAttribute('fill', computedStyle.color);
        text.setAttribute('font-family', computedStyle.fontFamily);
        text.setAttribute('font-weight', computedStyle.fontWeight);
        text.setAttribute('font-size', (size * 0.15).toString());
        
        if (textEl.tagName === 'H1') {
          text.setAttribute('x', (size * 1.3).toString());
          text.setAttribute('y', (size * 0.48).toString());
          text.setAttribute('font-size', (size * 0.18).toString());
        } else if (textEl.tagName === 'P') {
          text.setAttribute('x', (size * 1.3).toString());
          text.setAttribute('y', (size * 0.65).toString());
          text.setAttribute('font-size', (size * 0.055).toString());
          text.setAttribute('opacity', '0.85');
          text.setAttribute('letter-spacing', '0.1em');
        }
        
        tempSvg.appendChild(text);
      }
    });

    const svgString = new XMLSerializer().serializeToString(tempSvg);
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svg);

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
      canvas.toBlob((blob) => {
        if (blob) {
          const link = document.createElement('a');
          link.download = `${filename}-${size}px.png`;
          link.href = URL.createObjectURL(blob);
          link.click();
          URL.revokeObjectURL(url);
        }
      }, 'image/png');
    };
    img.src = url;
  };

  const exportAsSVG = () => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    // Para logos horizontais, usar proporção 3:1
    const svgWidth = isHorizontal ? 600 : 200;
    const svgHeight = 200;

    const tempSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    tempSvg.setAttribute('width', svgWidth.toString());
    tempSvg.setAttribute('height', svgHeight.toString());
    tempSvg.setAttribute('viewBox', `0 0 ${svgWidth} ${svgHeight}`);
    tempSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    // Clonar SVGs
    const svgs = containerElement.querySelectorAll('svg');
    svgs.forEach((svg) => {
      const clone = svg.cloneNode(true) as SVGSVGElement;
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      
      if (isHorizontal) {
        g.setAttribute('transform', 'translate(50, 20) scale(0.8)');
      } else {
        g.setAttribute('transform', 'translate(0, 0)');
      }
      
      while (clone.firstChild) {
        g.appendChild(clone.firstChild);
      }
      tempSvg.appendChild(g);
    });

    // Adicionar textos
    const textElements = containerElement.querySelectorAll('h1, p');
    textElements.forEach((textEl) => {
      if (textEl.textContent && isHorizontal) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const computedStyle = window.getComputedStyle(textEl);
        
        text.textContent = textEl.textContent;
        text.setAttribute('fill', computedStyle.color);
        text.setAttribute('font-family', computedStyle.fontFamily);
        text.setAttribute('font-weight', computedStyle.fontWeight);
        
        if (textEl.tagName === 'H1') {
          text.setAttribute('x', '250');
          text.setAttribute('y', '95');
          text.setAttribute('font-size', '36');
          text.setAttribute('letter-spacing', '0.03em');
        } else if (textEl.tagName === 'P') {
          text.setAttribute('x', '250');
          text.setAttribute('y', '125');
          text.setAttribute('font-size', '11');
          text.setAttribute('opacity', '0.85');
          text.setAttribute('letter-spacing', '0.1em');
          text.setAttribute('text-transform', 'uppercase');
        }
        
        tempSvg.appendChild(text);
      }
    });

    const svgString = new XMLSerializer().serializeToString(tempSvg);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${filename}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
      <div
        ref={containerRef}
        className="p-12 flex items-center justify-center min-h-[300px]"
        style={
          isPattern
            ? {
                backgroundImage: `
                  repeating-conic-gradient(#f3f4f6 0% 25%, transparent 0% 50%) 
                  50% / 20px 20px
                `
              }
            : { backgroundColor }
        }
      >
        {children}
      </div>
      <div className="bg-gray-50 p-4">
        <p
          className="font-semibold text-center mb-1"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46'
          }}
        >
          {title}
        </p>
        <p
          className="text-sm text-center mb-4"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
            opacity: 0.6
          }}
        >
          {description}
        </p>

        {/* Botões de exportação */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <button
              onClick={() => exportAsPNG(512)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                color: '#162C46'
              }}
            >
              <Download size={14} />
              512px
            </button>
            <button
              onClick={() => exportAsPNG(1024)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                color: '#162C46'
              }}
            >
              <Download size={14} />
              1024px
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => exportAsPNG(2048)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                color: '#162C46'
              }}
            >
              <Download size={14} />
              2048px
            </button>
            <button
              onClick={() => exportAsPNG(4096)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                color: '#162C46'
              }}
            >
              <Download size={14} />
              4096px
            </button>
          </div>
          <button
            onClick={exportAsSVG}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded transition-colors"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              color: '#FFFFFF',
              backgroundColor: '#B8963A'
            }}
          >
            <Download size={14} />
            Exportar SVG
          </button>
        </div>
      </div>
    </div>
  );
}
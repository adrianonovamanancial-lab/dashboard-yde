import { Edit2, Eye, CheckCircle } from 'lucide-react';

interface Answers {
  nomeIgreja?: string;
  cidade?: string;
  nomePastor?: string;
  dataEntrevista?: string;
  porteIgreja?: string;
  transmiteOnline?: string;
  produzeConteudo?: string;
  desafioDigital?: string;
  outroDesafio?: string;
  responsavelMidia?: string;
  alcanceInternet?: string;
  musicaRelevancia?: string;
  musicaUtilizaria?: string;
  redesSociaisInteresse?: string;
  redesSociaisJaFaz?: string;
  cursosInteresse?: string;
  cursosReceita?: string;
  servicoPreferido?: string;
  agregaValor?: string;
  investimento?: string;
  maisInfo?: string;
  observacoes?: string;
}

interface ReviewScreenProps {
  answers: Answers;
  onEdit: (screenIndex: number) => void;
  onConfirm: () => void;
  onBack: () => void;
}

export default function ReviewScreen({ answers, onEdit, onConfirm, onBack }: ReviewScreenProps) {
  const formatPorte = (porte?: string) => {
    if (porte === 'ate-99') return 'Até 99 membros';
    if (porte === '100-299') return 'De 100 a 299 membros';
    if (porte === '300-mais') return '300 membros ou mais';
    return '-';
  };

  const formatTransmite = (value?: string) => {
    if (value === 'sim') return 'Sim regularmente';
    if (value === 'as-vezes') return 'Às vezes';
    if (value === 'nao') return 'Não transmite';
    return '-';
  };

  const formatProduz = (value?: string) => {
    if (value === 'sim') return 'Sim frequentemente';
    if (value === 'as-vezes') return 'Às vezes';
    if (value === 'nao') return 'Não produz';
    return '-';
  };

  return (
    <div className="min-h-screen px-8 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="flex items-center gap-4 mb-6">
          <Eye size={48} style={{ color: '#B8963A' }} />
          <h2 
            className="text-4xl lg:text-5xl"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Revisão das respostas da entrevista
          </h2>
        </div>

        <p 
          className="text-lg mb-12"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
            opacity: 0.7
          }}
        >
          Confira abaixo as informações registradas durante a entrevista. Caso seja necessário, é possível voltar e editar qualquer resposta antes de finalizar.
        </p>

        <div className="space-y-8">
          {/* Seção 1 - Identificação */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <h3 
                className="text-2xl font-semibold"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Identificação da igreja
              </h3>
              <button
                onClick={() => onEdit(1)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gray-100"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A' }}
              >
                <Edit2 size={16} />
                Editar
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Nome da igreja</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.nomeIgreja || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Cidade</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.cidade || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Nome do pastor</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.nomePastor || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Data da entrevista</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.dataEntrevista || '-'}</p>
              </div>
            </div>
          </div>

          {/* Seção 2 - Perfil da igreja */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <h3 
                className="text-2xl font-semibold"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Perfil da igreja
              </h3>
              <button
                onClick={() => onEdit(2)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gray-100"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A' }}
              >
                <Edit2 size={16} />
                Editar
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Número aproximado de membros</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{formatPorte(answers.porteIgreja)}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Transmite cultos online</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{formatTransmite(answers.transmiteOnline)}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Produz conteúdo para redes sociais</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{formatProduz(answers.produzeConteudo)}</p>
              </div>
            </div>
          </div>

          {/* Seção 3 - Desafios digitais */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <h3 
                className="text-2xl font-semibold"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Desafios digitais
              </h3>
              <button
                onClick={() => onEdit(3)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gray-100"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A' }}
              >
                <Edit2 size={16} />
                Editar
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Maior dificuldade digital</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                  {answers.desafioDigital || '-'}
                  {answers.desafioDigital === 'Outro' && answers.outroDesafio && ` (${answers.outroDesafio})`}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Quem cuida da mídia da igreja</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.responsavelMidia || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Interesse em alcançar mais pessoas online</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.alcanceInternet || '-'}</p>
              </div>
            </div>
          </div>

          {/* Seção 4 - Avaliação dos serviços */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <h3 
                className="text-2xl font-semibold"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Avaliação dos serviços
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>Música personalizada</p>
                  <button
                    onClick={() => onEdit(4)}
                    className="flex items-center gap-1 px-3 py-1 rounded text-sm transition-all hover:bg-gray-100"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A' }}
                  >
                    <Edit2 size={14} />
                    Editar
                  </button>
                </div>
                <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Relevância: <span style={{ opacity: 1 }}>{answers.musicaRelevancia || '-'}</span></p>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Utilizaria: <span style={{ opacity: 1 }}>{answers.musicaUtilizaria || '-'}</span></p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>Edição de culto e shorts</p>
                  <button
                    onClick={() => onEdit(5)}
                    className="flex items-center gap-1 px-3 py-1 rounded text-sm transition-all hover:bg-gray-100"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A' }}
                  >
                    <Edit2 size={14} />
                    Editar
                  </button>
                </div>
                <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Interesse: <span style={{ opacity: 1 }}>{answers.redesSociaisInteresse || '-'}</span></p>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Já faz: <span style={{ opacity: 1 }}>{answers.redesSociaisJaFaz || '-'}</span></p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>Cursos e conteúdo para membros</p>
                  <button
                    onClick={() => onEdit(6)}
                    className="flex items-center gap-1 px-3 py-1 rounded text-sm transition-all hover:bg-gray-100"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A' }}
                  >
                    <Edit2 size={14} />
                    Editar
                  </button>
                </div>
                <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Interesse: <span style={{ opacity: 1 }}>{answers.cursosInteresse || '-'}</span></p>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Geraria receita: <span style={{ opacity: 1 }}>{answers.cursosReceita || '-'}</span></p>
              </div>
            </div>
          </div>

          {/* Seção 5 - Avaliação final */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <h3 
                className="text-2xl font-semibold"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Avaliação final
              </h3>
              <button
                onClick={() => onEdit(7)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gray-100"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A' }}
              >
                <Edit2 size={16} />
                Editar
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Serviço que mais chamou atenção</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.servicoPreferido || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Interesse no Projeto YDE</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.agregaValor || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Faixa de investimento mensal</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.investimento || '-'}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Desejo de receber mais informações</p>
                <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{answers.maisInfo || '-'}</p>
              </div>
            </div>
          </div>

          {/* Seção 6 - Observações */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <h3 
                className="text-2xl font-semibold"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Observações
              </h3>
              <button
                onClick={() => onEdit(8)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-gray-100"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A' }}
              >
                <Edit2 size={16} />
                Editar
              </button>
            </div>
            <div>
              <p className="text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Observações registradas pelo entrevistador</p>
              <p className="text-base whitespace-pre-wrap" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                {answers.observacoes || 'Nenhuma observação registrada'}
              </p>
            </div>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="flex gap-4 mt-12">
          <button
            onClick={onBack}
            className="flex-1 px-8 py-4 rounded-lg text-xl font-semibold transition-all hover:scale-105 bg-white border-2"
            style={{ 
              borderColor: '#162C46',
              color: '#162C46',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Voltar e editar respostas
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 px-8 py-4 rounded-lg text-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-3"
            style={{ 
              backgroundColor: '#B8963A',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            <CheckCircle size={24} />
            Confirmar e finalizar entrevista
          </button>
        </div>
      </div>
    </div>
  );
}

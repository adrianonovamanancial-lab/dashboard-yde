import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowLeft, TrendingUp, Users, DollarSign, Star, CheckCircle2 } from 'lucide-react';
import heroLogoImage from 'figma:asset/72d9b08afad15dd6d1ecf014c3b58f2eeb402ba9.png';
import { ChevronRight } from 'lucide-react';

interface Survey {
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

export default function Dashboard() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [chartKey, setChartKey] = useState(Date.now());
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null);

  useEffect(() => {
    const storedSurveys = localStorage.getItem('ydeSurveys');
    if (storedSurveys) {
      setSurveys(JSON.parse(storedSurveys));
      setChartKey(Date.now());
    }
  }, []);

  // Função para formatar porte da igreja
  const formatPorte = (porte?: string) => {
    if (porte === 'ate-99') return 'Até 99';
    if (porte === '100-299') return '100-299';
    if (porte === '300-mais') return '300+';
    return '-';
  };

  // Métricas calculadas
  const totalSurveys = surveys.length;

  const porteDistribution = {
    ate99: surveys.filter(s => s.porteIgreja === 'ate-99').length,
    ate299: surveys.filter(s => s.porteIgreja === '100-299').length,
    mais300: surveys.filter(s => s.porteIgreja === '300-mais').length,
  };

  const interesseDistribution = {
    muito: surveys.filter(s => s.agregaValor === 'Muito').length,
    talvez: surveys.filter(s => s.agregaValor === 'Talvez').length,
    pouco: surveys.filter(s => s.agregaValor === 'Pouco').length,
    nao: surveys.filter(s => s.agregaValor === 'Não').length,
  };

  const servicoPreferidoData = [
    { id: 'musica-pref', name: 'Música', value: surveys.filter(s => s.servicoPreferido === 'Música personalizada').length, uid: Math.random().toString(36) },
    { id: 'videos-pref', name: 'Vídeos', value: surveys.filter(s => s.servicoPreferido === 'Conteúdos curtos do culto').length, uid: Math.random().toString(36) },
    { id: 'cursos-pref', name: 'Cursos', value: surveys.filter(s => s.servicoPreferido === 'Cursos para membros').length, uid: Math.random().toString(36) },
  ];

  const investimentoData = [
    { id: 'inv-300', name: 'Até R$ 300', value: surveys.filter(s => s.investimento === 'Até R$ 300').length, uid: Math.random().toString(36) },
    { id: 'inv-1000', name: 'Até R$ 1.000', value: surveys.filter(s => s.investimento === 'Até R$ 1.000').length, uid: Math.random().toString(36) },
    { id: 'inv-2000', name: 'Até R$ 2.000', value: surveys.filter(s => s.investimento === 'Até R$ 2.000').length, uid: Math.random().toString(36) },
    { id: 'inv-3000', name: 'Até R$ 3.000', value: surveys.filter(s => s.investimento === 'Até R$ 3.000').length, uid: Math.random().toString(36) },
    { id: 'inv-plus', name: 'Acima de R$ 3.000', value: surveys.filter(s => s.investimento === 'Acima de R$ 3.000').length, uid: Math.random().toString(36) },
  ];

  const maturidadeDigitalData = [
    { id: 'mat-equipe', name: 'Equipe de mídia', value: surveys.filter(s => s.responsavelMidia === 'Sim, temos uma equipe de mídia').length },
    { id: 'mat-voluntario', name: 'Voluntário', value: surveys.filter(s => s.responsavelMidia === 'Sim, uma pessoa voluntária cuida disso').length },
    { id: 'mat-pastor', name: 'Pastor/Liderança', value: surveys.filter(s => s.responsavelMidia === 'O pastor ou liderança faz isso').length },
    { id: 'mat-ninguem', name: 'Ninguém', value: surveys.filter(s => s.responsavelMidia === 'Não temos ninguém responsável').length },
  ];

  // Potencial comercial: interesse alto + investimento >= R$ 1.000
  const potencialClientes = surveys.filter(s => 
    s.agregaValor === 'Muito' && 
    (s.investimento === 'Até R$ 1.000' || s.investimento === 'Até R$ 2.000' || s.investimento === 'Até R$ 3.000' || s.investimento === 'Acima de R$ 3.000')
  ).length;

  const COLORS = ['#B8963A', '#162C46', '#8B7B3C', '#1F3A5F', '#C4A852'];

  // Se uma entrevista está selecionada, mostrar detalhes
  if (selectedSurvey) {
    const formatPorteDetalhes = (porte?: string) => {
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
      <div className="min-h-screen bg-gray-50 px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setSelectedSurvey(null)}
            className="flex items-center gap-2 mb-8 text-lg transition-opacity hover:opacity-70"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              fontWeight: 600
            }}
          >
            <ArrowLeft size={24} />
            Voltar para o Dashboard
          </button>

          <h1 
            className="text-4xl mb-2"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Detalhes da Entrevista
          </h1>
          <p 
            className="text-xl mb-12"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#B8963A',
              fontWeight: 600
            }}
          >
            {selectedSurvey.nomeIgreja || 'Igreja sem nome'}
          </p>

          <div className="space-y-8">
            {/* Identificação */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Identificação da igreja
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Nome da igreja</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.nomeIgreja || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Cidade</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.cidade || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Nome do pastor</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.nomePastor || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Data da entrevista</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.dataEntrevista || '-'}</p>
                </div>
              </div>
            </div>

            {/* Perfil da igreja */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Perfil da igreja
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Número aproximado de membros</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{formatPorteDetalhes(selectedSurvey.porteIgreja)}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Transmite cultos online</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{formatTransmite(selectedSurvey.transmiteOnline)}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Produz conteúdo para redes sociais</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{formatProduz(selectedSurvey.produzeConteudo)}</p>
                </div>
              </div>
            </div>

            {/* Desafios digitais */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Desafios digitais
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Maior dificuldade digital</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.desafioDigital || '-'}
                    {selectedSurvey.desafioDigital === 'Outro' && selectedSurvey.outroDesafio && ` (${selectedSurvey.outroDesafio})`}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Quem cuida da mídia da igreja</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.responsavelMidia || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Interesse em alcançar mais pessoas online</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.alcanceInternet || '-'}</p>
                </div>
              </div>
            </div>

            {/* Avaliação dos serviços */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Avaliação dos serviços
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>Música personalizada</p>
                  <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Relevância: <span style={{ opacity: 1 }}>{selectedSurvey.musicaRelevancia || '-'}</span></p>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Utilizaria: <span style={{ opacity: 1 }}>{selectedSurvey.musicaUtilizaria || '-'}</span></p>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>Edição de culto e shorts</p>
                  <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Interesse: <span style={{ opacity: 1 }}>{selectedSurvey.redesSociaisInteresse || '-'}</span></p>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Já faz: <span style={{ opacity: 1 }}>{selectedSurvey.redesSociaisJaFaz || '-'}</span></p>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>Cursos e conteúdo para membros</p>
                  <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Interesse: <span style={{ opacity: 1 }}>{selectedSurvey.cursosInteresse || '-'}</span></p>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Geraria receita: <span style={{ opacity: 1 }}>{selectedSurvey.cursosReceita || '-'}</span></p>
                </div>
              </div>
            </div>

            {/* Avaliação final */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Avaliação final
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Serviço que mais chamou atenção</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.servicoPreferido || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Interesse no Projeto YDE</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.agregaValor || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Faixa de investimento mensal</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.investimento || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>Desejo de receber mais informações</p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>{selectedSurvey.maisInfo || '-'}</p>
                </div>
              </div>
            </div>

            {/* Observações */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Observações
              </h3>
              <p className="text-base whitespace-pre-wrap" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                {selectedSurvey.observacoes || 'Nenhuma observação registrada'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-4">
          <img src={heroLogoImage} alt="Yde Symbol" className="h-16 w-auto" />
          <h1 
            className="text-5xl"
            style={{ 
              fontFamily: 'Playfair Display, serif', 
              fontWeight: 700,
              color: '#162C46'
            }}
          >
            Controle da Pesquisa YDE
          </h1>
        </div>
        <p 
          className="text-lg"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
            opacity: 0.7
          }}
        >
          Dashboard de análise das entrevistas realizadas
        </p>
      </div>

      {/* Lista de igrejas */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 
          className="text-3xl mb-6"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontWeight: 700,
            color: '#162C46'
          }}
        >
          Igrejas Entrevistadas
        </h2>

        {surveys.length === 0 ? (
          <div className="bg-white p-12 rounded-lg text-center border border-gray-200">
            <p 
              className="text-xl"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: '#162C46',
                opacity: 0.6
              }}
            >
              Nenhuma entrevista registrada ainda
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
            {surveys.map((survey, index) => (
              <button
                key={index}
                onClick={() => setSelectedSurvey(survey)}
                className="w-full px-6 py-4 text-left border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors flex items-center justify-between group"
              >
                <span 
                  className="text-lg font-semibold group-hover:text-opacity-80 transition-opacity"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#162C46'
                  }}
                >
                  {survey.nomeIgreja || `Entrevista ${index + 1}`}
                </span>
                <ChevronRight 
                  size={20} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: '#B8963A' }} 
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Resumo da Pesquisa */}
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-3xl mb-6"
          style={{ 
            fontFamily: 'Playfair Display, serif', 
            fontWeight: 700,
            color: '#162C46'
          }}
        >
          Resumo da Pesquisa
        </h2>

        {/* Cards de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1 - Total */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <Users size={32} style={{ color: '#B8963A' }} />
              <h3 
                className="text-lg font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
              >
                Total de Igrejas
              </h3>
            </div>
            <p 
              className="text-5xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
            >
              {totalSurveys}
            </p>
            <p 
              className="text-sm mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}
            >
              entrevistas realizadas
            </p>
          </div>

          {/* Card 2 - Porte */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp size={32} style={{ color: '#B8963A' }} />
              <h3 
                className="text-lg font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
              >
                Igrejas por Porte
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>Até 99</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A', fontWeight: 700, fontSize: '18px' }}>{porteDistribution.ate99}</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>100-299</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A', fontWeight: 700, fontSize: '18px' }}>{porteDistribution.ate299}</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>Mais de 300</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A', fontWeight: 700, fontSize: '18px' }}>{porteDistribution.mais300}</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Potencial Comercial */}
          <div className="bg-white p-6 rounded-lg border-2" style={{ borderColor: '#B8963A' }}>
            <div className="flex items-center gap-3 mb-3">
              <Star size={32} style={{ color: '#B8963A' }} />
              <h3 
                className="text-lg font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
              >
                Potencial Comercial
              </h3>
            </div>
            <p 
              className="text-5xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif', color: '#B8963A' }}
            >
              {potencialClientes}
            </p>
            <p 
              className="text-sm mt-2"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}
            >
              igrejas com alto potencial
            </p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Interesse no Projeto YDE */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
            >
              Interesse no Projeto YDE
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>Muito</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${totalSurveys > 0 ? (interesseDistribution.muito / totalSurveys) * 100 : 0}%`,
                        backgroundColor: '#22c55e'
                      }}
                    />
                  </div>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontWeight: 700, fontSize: '16px', minWidth: '30px' }}>{interesseDistribution.muito}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>Talvez</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${totalSurveys > 0 ? (interesseDistribution.talvez / totalSurveys) * 100 : 0}%`,
                        backgroundColor: '#eab308'
                      }}
                    />
                  </div>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontWeight: 700, fontSize: '16px', minWidth: '30px' }}>{interesseDistribution.talvez}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>Pouco</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${totalSurveys > 0 ? (interesseDistribution.pouco / totalSurveys) * 100 : 0}%`,
                        backgroundColor: '#f97316'
                      }}
                    />
                  </div>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontWeight: 700, fontSize: '16px', minWidth: '30px' }}>{interesseDistribution.pouco}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>Não</span>
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        width: `${totalSurveys > 0 ? (interesseDistribution.nao / totalSurveys) * 100 : 0}%`,
                        backgroundColor: '#ef4444'
                      }}
                    />
                  </div>
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontWeight: 700, fontSize: '16px', minWidth: '30px' }}>{interesseDistribution.nao}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Serviço Mais Atrativo */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
            >
              Serviço Mais Atrativo
            </h3>
            {totalSurveys > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={servicoPreferidoData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }} id={`servico-chart-${chartKey}`}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" key={`grid-servico-${chartKey}`} />
                  <XAxis dataKey="name" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }} key={`xaxis-servico-${chartKey}`} />
                  <YAxis style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }} key={`yaxis-servico-${chartKey}`} />
                  <Tooltip key={`tooltip-servico-${chartKey}`} />
                  <Bar dataKey="value" isAnimationActive={false} radius={[8, 8, 0, 0]} key={`bar-servico-${chartKey}`}>
                    {servicoPreferidoData.map((entry, index) => (
                      <Cell key={entry.uid} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center py-12" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.5 }}>Sem dados disponíveis</p>
            )}
          </div>
        </div>

        {/* Gráficos Adicionais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Faixa de Investimento */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
            >
              Faixa de Investimento
            </h3>
            {totalSurveys > 0 ? (
              <ResponsiveContainer width="100%" height={250} key={`investimento-container-${chartKey}`}>
                <BarChart data={investimentoData} margin={{ top: 5, right: 5, left: 5, bottom: 80 }} key={`investimento-chart-${chartKey}`}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" key={`grid-investimento-${chartKey}`} />
                  <XAxis dataKey="name" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px' }} angle={-45} textAnchor="end" height={80} key={`xaxis-investimento-${chartKey}`} />
                  <YAxis style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }} key={`yaxis-investimento-${chartKey}`} />
                  <Tooltip key={`tooltip-investimento-${chartKey}`} />
                  <Bar dataKey="value" isAnimationActive={false} radius={[8, 8, 0, 0]} key={`bar-investimento-${chartKey}`}>
                    {investimentoData.map((entry, index) => (
                      <Cell key={entry.uid} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center py-12" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.5 }}>Sem dados disponíveis</p>
            )}
          </div>

          {/* Maturidade Digital */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
            >
              Maturidade Digital da Igreja
            </h3>
            <div className="space-y-3">
              {maturidadeDigitalData.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>{item.name}</span>
                  <div className="flex items-center gap-3 flex-1 ml-4">
                    <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: `${totalSurveys > 0 ? (item.value / totalSurveys) * 100 : 0}%`,
                          backgroundColor: COLORS[maturidadeDigitalData.indexOf(item) % COLORS.length]
                        }}
                      />
                    </div>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontWeight: 700, fontSize: '16px', minWidth: '30px' }}>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
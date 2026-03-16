import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowLeft, TrendingUp, Users, Star, Lock, ChevronRight } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface Survey {
  id?: string;
  created_at?: string;
  nome_igreja?: string;
  cidade?: string;
  nome_pastor?: string;
  data_entrevista?: string;
  faixa_membros?: string;
  transmite_online?: string;
  produz_conteudo?: string;
  desafio_digital?: string;
  outro_desafio?: string;
  responsavel_midia?: string;
  alcance_internet?: string;
  musica_relevancia?: string;
  musica_utilizaria?: string;
  redes_sociais_interesse?: string;
  redes_sociais_ja_faz?: string;
  cursos_interesse?: string;
  cursos_receita?: string;
  servico_preferido?: string;
  agrega_valor?: string;
  investimento?: string;
  mais_info?: string;
  observacoes?: string;
}

export default function Dashboard() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [chartKey, setChartKey] = useState(Date.now());
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSurveys() {
      try {
        const { data, error } = await supabase
          .from('pesquisa_yde_respostas')
          .select('*')
          .order('created_at', { ascending: false });

        console.log('DATA DASHBOARD:', data);

if (error) {
  console.error('Erro ao buscar entrevistas:', error);
  alert('Erro ao buscar entrevistas: ' + error.message);
  setSurveys([]);
  return;
}

        setSurveys(data || []);
        setChartKey(Date.now());
      } catch (err) {
        console.error('Erro inesperado ao carregar dashboard:', err);
        setSurveys([]);
      } finally {
        setLoading(false);
      }
    }

    loadSurveys();
  }, []);

  const formatPorte = (porte?: string) => {
    if (porte === 'ate-99') return 'Até 99';
    if (porte === '100-299') return '100-299';
    if (porte === '300-mais') return '300+';
    return '-';
  };

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

  const totalSurveys = surveys.length;

  const porteDistribution = {
    ate99: surveys.filter((s) => s.faixa_membros === 'ate-99').length,
    ate299: surveys.filter((s) => s.faixa_membros === '100-299').length,
    mais300: surveys.filter((s) => s.faixa_membros === '300-mais').length,
  };

  const interesseDistribution = {
    muito: surveys.filter((s) => s.agrega_valor === 'Muito').length,
    talvez: surveys.filter((s) => s.agrega_valor === 'Talvez').length,
    pouco: surveys.filter((s) => s.agrega_valor === 'Pouco').length,
    nao: surveys.filter((s) => s.agrega_valor === 'Não').length,
  };

  const servicoPreferidoData = [
    {
      id: 'musica-pref',
      name: 'Música',
      value: surveys.filter((s) => s.servico_preferido === 'Música personalizada').length,
      uid: Math.random().toString(36),
    },
    {
      id: 'videos-pref',
      name: 'Vídeos',
      value: surveys.filter((s) => s.servico_preferido === 'Conteúdos curtos do culto').length,
      uid: Math.random().toString(36),
    },
    {
      id: 'cursos-pref',
      name: 'Cursos',
      value: surveys.filter((s) => s.servico_preferido === 'Cursos para membros').length,
      uid: Math.random().toString(36),
    },
  ];

  const investimentoData = [
    {
      id: 'inv-300',
      name: 'Até R$ 300',
      value: surveys.filter((s) => s.investimento === 'Até R$ 300').length,
      uid: Math.random().toString(36),
    },
    {
      id: 'inv-1000',
      name: 'Até R$ 1.000',
      value: surveys.filter((s) => s.investimento === 'Até R$ 1.000').length,
      uid: Math.random().toString(36),
    },
    {
      id: 'inv-2000',
      name: 'Até R$ 2.000',
      value: surveys.filter((s) => s.investimento === 'Até R$ 2.000').length,
      uid: Math.random().toString(36),
    },
    {
      id: 'inv-3000',
      name: 'Até R$ 3.000',
      value: surveys.filter((s) => s.investimento === 'Até R$ 3.000').length,
      uid: Math.random().toString(36),
    },
    {
      id: 'inv-plus',
      name: 'Acima de R$ 3.000',
      value: surveys.filter((s) => s.investimento === 'Acima de R$ 3.000').length,
      uid: Math.random().toString(36),
    },
  ];

  const maturidadeDigitalData = [
    {
      id: 'mat-equipe',
      name: 'Equipe de mídia',
      value: surveys.filter((s) => s.responsavel_midia === 'Sim, temos uma equipe de mídia').length,
    },
    {
      id: 'mat-voluntario',
      name: 'Voluntário',
      value: surveys.filter((s) => s.responsavel_midia === 'Sim, uma pessoa voluntária cuida disso').length,
    },
    {
      id: 'mat-pastor',
      name: 'Pastor/Liderança',
      value: surveys.filter((s) => s.responsavel_midia === 'O pastor ou liderança faz isso').length,
    },
    {
      id: 'mat-ninguem',
      name: 'Ninguém',
      value: surveys.filter((s) => s.responsavel_midia === 'Não temos ninguém responsável').length,
    },
  ];

  const potencialClientes = surveys.filter(
    (s) =>
      s.agrega_valor === 'Muito' &&
      (s.investimento === 'Até R$ 1.000' ||
        s.investimento === 'Até R$ 2.000' ||
        s.investimento === 'Até R$ 3.000' ||
        s.investimento === 'Acima de R$ 3.000')
  ).length;

  const COLORS = ['#B8963A', '#162C46', '#8B7B3C', '#1F3A5F', '#C4A852'];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#162C46',
            fontSize: '18px',
            fontWeight: 600,
          }}
        >
          Carregando dashboard...
        </p>
      </div>
    );
  }

  if (selectedSurvey) {
    return (
      <div className="min-h-screen bg-gray-50 px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setSelectedSurvey(null)}
            className="flex items-center gap-2 mb-8 text-lg transition-opacity hover:opacity-70"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#162C46',
              fontWeight: 600,
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
              color: '#162C46',
            }}
          >
            Detalhes da Entrevista
          </h1>

          <p
            className="text-xl mb-12"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#B8963A',
              fontWeight: 600,
            }}
          >
            {selectedSurvey.nome_igreja || 'Igreja sem nome'}
          </p>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Identificação da igreja
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Nome da igreja
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.nome_igreja || '-'}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Cidade
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.cidade || '-'}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Nome do pastor
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.nome_pastor || '-'}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Data da entrevista
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.data_entrevista || '-'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Perfil da igreja
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Número aproximado de membros
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {formatPorteDetalhes(selectedSurvey.faixa_membros)}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Transmite cultos online
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {formatTransmite(selectedSurvey.transmite_online)}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Produz conteúdo para redes sociais
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {formatProduz(selectedSurvey.produz_conteudo)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Desafios digitais
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Maior dificuldade digital
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.desafio_digital || '-'}
                    {selectedSurvey.desafio_digital === 'Outro' && selectedSurvey.outro_desafio
                      ? ` (${selectedSurvey.outro_desafio})`
                      : ''}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Quem cuida da mídia da igreja
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.responsavel_midia || '-'}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Interesse em alcançar mais pessoas online
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.alcance_internet || '-'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Avaliação dos serviços
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    Música personalizada
                  </p>
                  <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Relevância: <span style={{ opacity: 1 }}>{selectedSurvey.musica_relevancia || '-'}</span>
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Utilizaria: <span style={{ opacity: 1 }}>{selectedSurvey.musica_utilizaria || '-'}</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    Edição de culto e shorts
                  </p>
                  <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Interesse: <span style={{ opacity: 1 }}>{selectedSurvey.redes_sociais_interesse || '-'}</span>
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Já faz: <span style={{ opacity: 1 }}>{selectedSurvey.redes_sociais_ja_faz || '-'}</span>
                  </p>
                </div>

                <div>
                  <p className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    Cursos e conteúdo para membros
                  </p>
                  <p className="text-sm mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Interesse: <span style={{ opacity: 1 }}>{selectedSurvey.cursos_interesse || '-'}</span>
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Geraria receita: <span style={{ opacity: 1 }}>{selectedSurvey.cursos_receita || '-'}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3
                className="text-2xl font-semibold mb-6"
                style={{ fontFamily: 'Playfair Display, serif', color: '#162C46' }}
              >
                Avaliação final
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Serviço que mais chamou atenção
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.servico_preferido || '-'}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Interesse no Projeto YDE
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.agrega_valor || '-'}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Faixa de investimento mensal
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.investimento || '-'}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.6 }}>
                    Desejo de receber mais informações
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}>
                    {selectedSurvey.mais_info || '-'}
                  </p>
                </div>
              </div>
            </div>

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
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="h-16 w-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#B8963A' }}
          >
            <Lock size={28} style={{ color: '#FFFFFF' }} />
          </div>

          <h1
            className="text-5xl"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              color: '#162C46',
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
            opacity: 0.7,
          }}
        >
          Dashboard de análise das entrevistas realizadas
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-12">
        <h2
          className="text-3xl mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: '#162C46',
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
                opacity: 0.6,
              }}
            >
              Nenhuma entrevista registrada ainda
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
            {surveys.map((survey, index) => (
              <button
                key={survey.id || index}
                onClick={() => setSelectedSurvey(survey)}
                className="w-full px-6 py-4 text-left border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors flex items-center justify-between group"
              >
                <div>
                  <span
                    className="text-lg font-semibold block group-hover:text-opacity-80 transition-opacity"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#162C46',
                    }}
                  >
                    {survey.nome_igreja || `Entrevista ${index + 1}`}
                  </span>

                  <span
                    className="text-sm"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#162C46',
                      opacity: 0.6,
                    }}
                  >
                    {survey.cidade || '-'} • {formatPorte(survey.faixa_membros)}
                  </span>
                </div>

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

      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            color: '#162C46',
          }}
        >
          Resumo da Pesquisa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>
                  Até 99
                </span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A', fontWeight: 700, fontSize: '18px' }}>
                  {porteDistribution.ate99}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>
                  100-299
                </span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A', fontWeight: 700, fontSize: '18px' }}>
                  {porteDistribution.ate299}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>
                  Mais de 300
                </span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8963A', fontWeight: 700, fontSize: '18px' }}>
                  {porteDistribution.mais300}
                </span>
              </div>
            </div>
          </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
            >
              Interesse no Projeto YDE
            </h3>

            <div className="space-y-3">
              {[
                { label: 'Muito', value: interesseDistribution.muito, color: '#22c55e' },
                { label: 'Talvez', value: interesseDistribution.talvez, color: '#eab308' },
                { label: 'Pouco', value: interesseDistribution.pouco, color: '#f97316' },
                { label: 'Não', value: interesseDistribution.nao, color: '#ef4444' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>
                    {item.label}
                  </span>

                  <div className="flex items-center gap-3 flex-1 ml-4">
                    <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${totalSurveys > 0 ? (item.value / totalSurveys) * 100 : 0}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>

                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#162C46',
                        fontWeight: 700,
                        fontSize: '16px',
                        minWidth: '30px',
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }} />
                  <YAxis style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }} />
                  <Tooltip />
                  <Bar dataKey="value" isAnimationActive={false} radius={[8, 8, 0, 0]}>
                    {servicoPreferidoData.map((entry, index) => (
                      <Cell key={entry.uid} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center py-12" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.5 }}>
                Sem dados disponíveis
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
            >
              Faixa de Investimento
            </h3>

            {totalSurveys > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={investimentoData} margin={{ top: 5, right: 5, left: 5, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="name"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '10px' }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }} />
                  <Tooltip />
                  <Bar dataKey="value" isAnimationActive={false} radius={[8, 8, 0, 0]}>
                    {investimentoData.map((entry, index) => (
                      <Cell key={entry.uid} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center py-12" style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', opacity: 0.5 }}>
                Sem dados disponíveis
              </p>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46' }}
            >
              Maturidade Digital da Igreja
            </h3>

            <div className="space-y-3">
              {maturidadeDigitalData.map((item, index) => (
                <div key={item.id} className="flex justify-between items-center">
                  <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#162C46', fontSize: '14px' }}>
                    {item.name}
                  </span>

                  <div className="flex items-center gap-3 flex-1 ml-4">
                    <div className="flex-1 bg-gray-200 h-8 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${totalSurveys > 0 ? (item.value / totalSurveys) * 100 : 0}%`,
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      />
                    </div>

                    <span
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#162C46',
                        fontWeight: 700,
                        fontSize: '16px',
                        minWidth: '30px',
                      }}
                    >
                      {item.value}
                    </span>
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

-- =============================================================================
-- TABELA: pesquisa_yde_respostas
-- Descrição: Armazena todas as respostas do formulário de pesquisa do Projeto YDE
-- Padrão Supabase com id bigint e created_at
-- =============================================================================

CREATE TABLE pesquisa_yde_respostas (
  -- Identificação do registro
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- ==========================================================================
  -- SEÇÃO 1: IDENTIFICAÇÃO DA IGREJA
  -- ==========================================================================
  nome_igreja TEXT,
  cidade TEXT,
  nome_pastor TEXT,
  data_entrevista TEXT,
  
  -- ==========================================================================
  -- SEÇÃO 2: PERFIL DA IGREJA
  -- ==========================================================================
  porte_igreja TEXT,
  transmite_online TEXT,
  produz_conteudo TEXT,
  
  -- ==========================================================================
  -- SEÇÃO 3: DESAFIOS DIGITAIS
  -- ==========================================================================
  desafio_digital TEXT,
  outro_desafio TEXT,
  responsavel_midia TEXT,
  alcance_internet TEXT,
  
  -- ==========================================================================
  -- SEÇÃO 4: SERVIÇO 1 - MÚSICA PERSONALIZADA
  -- ==========================================================================
  musica_relevancia TEXT,
  musica_utilizaria TEXT,
  
  -- ==========================================================================
  -- SEÇÃO 5: SERVIÇO 2 - EDIÇÃO DE VÍDEOS
  -- ==========================================================================
  redes_sociais_interesse TEXT,
  redes_sociais_ja_faz TEXT,
  
  -- ==========================================================================
  -- SEÇÃO 6: SERVIÇO 3 - CURSOS ONLINE
  -- ==========================================================================
  cursos_interesse TEXT,
  cursos_receita TEXT,
  
  -- ==========================================================================
  -- SEÇÃO 7: AVALIAÇÃO FINAL
  -- ==========================================================================
  servico_preferido TEXT,
  agrega_valor TEXT,
  investimento TEXT,
  mais_info TEXT,
  
  -- ==========================================================================
  -- SEÇÃO 8: OBSERVAÇÕES
  -- ==========================================================================
  observacoes TEXT
);

-- =============================================================================
-- ÍNDICES PARA OTIMIZAÇÃO DE CONSULTAS
-- =============================================================================

-- Índice para busca por data de criação (relatórios cronológicos)
CREATE INDEX idx_pesquisa_created_at ON pesquisa_yde_respostas(created_at DESC);

-- Índice para busca por nome da igreja
CREATE INDEX idx_pesquisa_nome_igreja ON pesquisa_yde_respostas(nome_igreja);

-- Índice para busca por cidade (segmentação geográfica)
CREATE INDEX idx_pesquisa_cidade ON pesquisa_yde_respostas(cidade);

-- Índice para análise de porte
CREATE INDEX idx_pesquisa_porte ON pesquisa_yde_respostas(porte_igreja);

-- Índice para análise de interesse
CREATE INDEX idx_pesquisa_interesse ON pesquisa_yde_respostas(agrega_valor);

-- Índice para análise de investimento
CREATE INDEX idx_pesquisa_investimento ON pesquisa_yde_respostas(investimento);

-- =============================================================================
-- POLÍTICAS RLS (ROW LEVEL SECURITY) - SUPABASE
-- =============================================================================

-- Habilitar RLS na tabela
ALTER TABLE pesquisa_yde_respostas ENABLE ROW LEVEL SECURITY;

-- Política: Permitir leitura para usuários autenticados
CREATE POLICY "Permitir leitura para usuários autenticados"
ON pesquisa_yde_respostas
FOR SELECT
TO authenticated
USING (true);

-- Política: Permitir inserção para usuários autenticados
CREATE POLICY "Permitir inserção para usuários autenticados"
ON pesquisa_yde_respostas
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Política: Permitir atualização para usuários autenticados
CREATE POLICY "Permitir atualização para usuários autenticados"
ON pesquisa_yde_respostas
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Política: Permitir exclusão para usuários autenticados
CREATE POLICY "Permitir exclusão para usuários autenticados"
ON pesquisa_yde_respostas
FOR DELETE
TO authenticated
USING (true);

-- =============================================================================
-- COMENTÁRIOS NA TABELA (DOCUMENTAÇÃO)
-- =============================================================================

COMMENT ON TABLE pesquisa_yde_respostas IS 'Armazena respostas completas do formulário de pesquisa do Projeto YDE sobre inovação digital para igrejas';

COMMENT ON COLUMN pesquisa_yde_respostas.id IS 'Identificador único da resposta (auto-incremento)';
COMMENT ON COLUMN pesquisa_yde_respostas.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN pesquisa_yde_respostas.nome_igreja IS 'Nome completo da igreja entrevistada';
COMMENT ON COLUMN pesquisa_yde_respostas.cidade IS 'Cidade onde a igreja está localizada';
COMMENT ON COLUMN pesquisa_yde_respostas.nome_pastor IS 'Nome do pastor ou líder entrevistado';
COMMENT ON COLUMN pesquisa_yde_respostas.data_entrevista IS 'Data em que a entrevista foi realizada';
COMMENT ON COLUMN pesquisa_yde_respostas.porte_igreja IS 'Porte da igreja baseado no número de membros';
COMMENT ON COLUMN pesquisa_yde_respostas.agrega_valor IS 'Avaliação de quanto o Projeto YDE agregaria valor à igreja';
COMMENT ON COLUMN pesquisa_yde_respostas.investimento IS 'Faixa de investimento mensal que faria sentido para a igreja';
COMMENT ON COLUMN pesquisa_yde_respostas.observacoes IS 'Observações e comentários adicionais do entrevistador';

-- =============================================================================
-- QUERIES DE EXEMPLO PARA ANÁLISE
-- =============================================================================

-- Consultar todas as respostas ordenadas por data
-- SELECT * FROM pesquisa_yde_respostas ORDER BY created_at DESC;

-- Contar respostas por porte de igreja
-- SELECT porte_igreja, COUNT(*) as total 
-- FROM pesquisa_yde_respostas 
-- WHERE porte_igreja IS NOT NULL 
-- GROUP BY porte_igreja;

-- Analisar interesse por serviço preferido
-- SELECT servico_preferido, COUNT(*) as total 
-- FROM pesquisa_yde_respostas 
-- WHERE servico_preferido IS NOT NULL 
-- GROUP BY servico_preferido 
-- ORDER BY total DESC;

-- Distribuição de interesse no projeto
-- SELECT agrega_valor, COUNT(*) as total 
-- FROM pesquisa_yde_respostas 
-- WHERE agrega_valor IS NOT NULL 
-- GROUP BY agrega_valor 
-- ORDER BY 
--   CASE agrega_valor
--     WHEN 'Muito' THEN 1
--     WHEN 'Talvez' THEN 2
--     WHEN 'Pouco' THEN 3
--     WHEN 'Não' THEN 4
--   END;

-- Distribuição de faixa de investimento
-- SELECT investimento, COUNT(*) as total 
-- FROM pesquisa_yde_respostas 
-- WHERE investimento IS NOT NULL 
-- GROUP BY investimento 
-- ORDER BY 
--   CASE investimento
--     WHEN 'Até R$ 300' THEN 1
--     WHEN 'Até R$ 1.000' THEN 2
--     WHEN 'Até R$ 2.000' THEN 3
--     WHEN 'Até R$ 3.000' THEN 4
--     WHEN 'Acima de R$ 3.000' THEN 5
--   END;

-- Potencial comercial (alto interesse + investimento >= R$ 1.000)
-- SELECT COUNT(*) as potencial_clientes
-- FROM pesquisa_yde_respostas
-- WHERE agrega_valor = 'Muito'
-- AND investimento IN ('Até R$ 1.000', 'Até R$ 2.000', 'Até R$ 3.000', 'Acima de R$ 3.000');

-- Maturidade digital (quem tem equipe vs quem não tem)
-- SELECT responsavel_midia, COUNT(*) as total 
-- FROM pesquisa_yde_respostas 
-- WHERE responsavel_midia IS NOT NULL 
-- GROUP BY responsavel_midia 
-- ORDER BY total DESC;

-- Igrejas por cidade
-- SELECT cidade, COUNT(*) as total 
-- FROM pesquisa_yde_respostas 
-- WHERE cidade IS NOT NULL 
-- GROUP BY cidade 
-- ORDER BY total DESC;

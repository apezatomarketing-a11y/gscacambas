-- ============================================================
-- SCHEMA SQL — GS Caçambas
-- Execute este script no Supabase SQL Editor:
-- Supabase → SQL Editor → New Query → Cole e execute
-- ============================================================

-- Função para atualizar o campo 'updated_at' automaticamente
CREATE OR REPLACE FUNCTION public.trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================
-- TABELA: users
-- Usuários autenticados via Manus OAuth
-- ============================================================
CREATE TABLE IF NOT EXISTS public.users (
  id            SERIAL PRIMARY KEY,
  open_id       VARCHAR(64) UNIQUE NOT NULL,
  name          TEXT,
  email         VARCHAR(320),
  login_method  VARCHAR(64),
  role          VARCHAR(20) DEFAULT 'user' NOT NULL CHECK (role IN ('user', 'admin')),
  created_at    TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at    TIMESTAMPTZ DEFAULT now() NOT NULL,
  last_signed_in TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE TRIGGER set_timestamp_users
BEFORE UPDATE ON public.users
FOR EACH ROW EXECUTE PROCEDURE public.trigger_set_timestamp();

-- ============================================================
-- TABELA: contact_messages
-- Mensagens enviadas pelo formulário de contato do site
-- ============================================================
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(320),
  phone      VARCHAR(20) NOT NULL,
  message    TEXT NOT NULL,
  status     VARCHAR(20) DEFAULT 'new' NOT NULL CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE TRIGGER set_timestamp_contact_messages
BEFORE UPDATE ON public.contact_messages
FOR EACH ROW EXECUTE PROCEDURE public.trigger_set_timestamp();

-- ============================================================
-- TABELA: orcamentos
-- Solicitações de orçamento para aluguel de caçambas
-- ============================================================
CREATE TABLE IF NOT EXISTS public.orcamentos (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(100) NOT NULL,
  phone        VARCHAR(20) NOT NULL,
  email        VARCHAR(320),
  city         VARCHAR(100) NOT NULL,
  service_type VARCHAR(50) NOT NULL CHECK (service_type IN (
    'residencial', 'comercial', 'industrial', 'condominio', 'engenheiros', 'outro'
  )),
  message      TEXT,
  status       VARCHAR(20) DEFAULT 'pending' NOT NULL CHECK (status IN ('pending', 'contacted', 'closed')),
  created_at   TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at   TIMESTAMPTZ DEFAULT now() NOT NULL
);

CREATE TRIGGER set_timestamp_orcamentos
BEFORE UPDATE ON public.orcamentos
FOR EACH ROW EXECUTE PROCEDURE public.trigger_set_timestamp();

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- Habilitar segurança por linha em todas as tabelas
-- ============================================================
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orcamentos ENABLE ROW LEVEL SECURITY;

-- Política: apenas service_role pode acessar todas as linhas
-- (O backend usa a SUPABASE_SERVICE_ROLE_KEY para acesso total)

CREATE POLICY "service_role_full_access_users"
  ON public.users FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "service_role_full_access_contact_messages"
  ON public.contact_messages FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "service_role_full_access_orcamentos"
  ON public.orcamentos FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Política adicional: permitir INSERT anônimo para formulários do site
-- (Usuários não autenticados podem enviar mensagens e orçamentos)
CREATE POLICY "anon_insert_contact_messages"
  ON public.contact_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "anon_insert_orcamentos"
  ON public.orcamentos FOR INSERT
  WITH CHECK (true);

-- ============================================================
-- ÍNDICES para melhor performance
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orcamentos_status ON public.orcamentos(status);
CREATE INDEX IF NOT EXISTS idx_orcamentos_city ON public.orcamentos(city);
CREATE INDEX IF NOT EXISTS idx_orcamentos_created_at ON public.orcamentos(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_users_open_id ON public.users(open_id);

-- ============================================================
-- STORAGE BUCKETS (execute separadamente no Supabase Dashboard)
-- Supabase → Storage → New bucket
-- ============================================================
-- Bucket: gallery (público) — para fotos da galeria do site
-- Bucket: assets (público) — para imagens gerais do site
-- ============================================================

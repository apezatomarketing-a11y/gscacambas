-- Esquema SQL para Supabase - GS Caçambas
-- Este script cria as tabelas necessárias para o funcionamento do site.

-- Tabela de mensagens de contato
CREATE TABLE public.contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(320),
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' NOT NULL, -- new, read, replied
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Tabela de solicitações de orçamento
CREATE TABLE public.orcamentos (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(320),
  city VARCHAR(100) NOT NULL,
  service_type VARCHAR(50) NOT NULL, -- residencial, comercial, industrial, condominio, engenheiros, outro
  message TEXT,
  status VARCHAR(20) DEFAULT 'pending' NOT NULL, -- pending, contacted, closed
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Tabela de usuários (se necessário para futuras funcionalidades de login)
CREATE TABLE public.users (
  id SERIAL PRIMARY KEY,
  open_id VARCHAR(64) UNIQUE NOT NULL,
  name TEXT,
  email VARCHAR(320),
  login_method VARCHAR(64),
  role VARCHAR(20) DEFAULT 'user' NOT NULL, -- user, admin
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  last_signed_in TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Habilitar Row Level Security (RLS) para todas as tabelas
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orcamentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso (Exemplo: permitir acesso apenas para administradores)
-- Crie políticas mais granulares conforme a necessidade da sua aplicação.

CREATE POLICY "Allow admin full access on contact_messages" ON public.contact_messages
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow admin full access on orcamentos" ON public.orcamentos
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Allow admin full access on users" ON public.users
  FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Função para atualizar o campo 'updated_at' automaticamente
CREATE OR REPLACE FUNCTION public.trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar 'updated_at' em cada tabela
CREATE TRIGGER set_timestamp_contact_messages
BEFORE UPDATE ON public.contact_messages
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();

CREATE TRIGGER set_timestamp_orcamentos
BEFORE UPDATE ON public.orcamentos
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();

CREATE TRIGGER set_timestamp_users
BEFORE UPDATE ON public.users
FOR EACH ROW
EXECUTE PROCEDURE public.trigger_set_timestamp();

# Variáveis de Ambiente — GS Caçambas (Netlify)

Copie e cole cada linha na seção **Site settings → Environment variables** do seu site no Netlify.

---

## Tabela de Variáveis de Ambiente

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `VITE_APP_ID` | `gscacambas` |
| `VITE_APP_TITLE` | `GS Caçambas` |
| `VITE_SUPABASE_URL` | `https://evaoqyroqmmlojtzrulj.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjgyOTIsImV4cCI6MjA4NDk0NDI5Mn0.KBAsny0JD9Er0dh_48bmK-1KEkqpxx0Uz3P1-cmmypE` |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTM2ODI5MiwiZXhwIjoyMDg0OTQ0MjkyfQ.1qsvuXA4uriWbWUjn_ZEZNZmg12DyMfPoLUxyvK1USU` |
| `DATABASE_URL` | `postgresql://postgres.evaoqyroqmmlojtzrulj:[SUA_SENHA_DB]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres` |
| `JWT_SECRET` | `GsCacambas2024@SecretKeyJWT_Muito_Forte_e_Segura_32chars!` |
| `OAUTH_SERVER_URL` | `https://auth.manus.im` |
| `VITE_OAUTH_PORTAL_URL` | `https://oauth.manus.im` |
| `OWNER_OPEN_ID` | `[SEU_OPEN_ID_MANUS]` |
| `RESEND_API_KEY` | `re_3jmawcpY_4b6iGtiQsZVT1Z7Vy6MjrWsJ` |
| `VITE_GOOGLE_MAPS_API_KEY` | `AIzaSyC7-akywRnxoOLxbLzwSTq_7B9fj6jWQu0` |
| `VITE_GEMINI_API_KEY` | `AIzaSyBg353Ko7lHT-DnThBqU2wr_9YjQ4N7OE8` |

---

## Observações Importantes

**`DATABASE_URL`** — Substitua `[SUA_SENHA_DB]` pela senha do banco de dados Supabase. Você encontra essa senha em: **Supabase → Project Settings → Database → Database password**.

**`OWNER_OPEN_ID`** — Substitua `[SEU_OPEN_ID_MANUS]` pelo seu OpenID da conta Manus. Você encontra em: **Manus → Configurações → Conta**.

**`JWT_SECRET`** — Chave para assinatura de cookies de sessão. O valor acima já é seguro, mas você pode substituir por qualquer string aleatória com 32+ caracteres.

**`VITE_SUPABASE_URL`** e **`VITE_SUPABASE_ANON_KEY`** — Credenciais públicas do projeto Supabase. Já estão preenchidas com os valores corretos do projeto.

**`SUPABASE_SERVICE_ROLE_KEY`** — Chave privada com permissões totais no Supabase. **Nunca exponha esta chave no frontend.**

---

## Como Configurar no Netlify

1. Acesse [app.netlify.com](https://app.netlify.com) e selecione o site **gscacambas**
2. Vá em **Site settings → Environment variables**
3. Clique em **Add a variable** para cada linha da tabela acima
4. Após salvar todas as variáveis, acesse **Deploys → Trigger deploy → Deploy site**
5. Aguarde o build concluir e acesse o URL do site

---

## Credenciais Supabase (Referência)

| Item | Valor |
|------|-------|
| **Project URL** | `https://evaoqyroqmmlojtzrulj.supabase.co` |
| **Anon Public Key** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzNjgyOTIsImV4cCI6MjA4NDk0NDI5Mn0.KBAsny0JD9Er0dh_48bmK-1KEkqpxx0Uz3P1-cmmypE` |
| **Service Role Key** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2YW9xeXJvcW1tbG9qdHpydWxqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTM2ODI5MiwiZXhwIjoyMDg0OTQ0MjkyfQ.1qsvuXA4uriWbWUjn_ZEZNZmg12DyMfPoLUxyvK1USU` |
| **Project Reference** | `evaoqyroqmmlojtzrulj` |

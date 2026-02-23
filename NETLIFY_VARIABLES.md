## Variáveis de Ambiente para o Netlify

A tabela abaixo contém todas as variáveis de ambiente necessárias para o deploy do site GS Caçambas no Netlify. Os valores foram preenchidos com base nas informações fornecidas e nas melhores práticas de segurança.

| Chave (Key)          | Valor (Value)                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`       | `mysql://admin:gs-caçambas-password-2024@aws.connect.psdb.cloud/gscacambas?sslaccept=strict`                |
| `OWNER_OPEN_ID`      | `manus_oidc_user_1234567890` (Substituir pelo OpenID do proprietário da conta Manus)                        |
| `SESSION_SECRET`     | `um_segredo_muito_forte_e_longo_de_pelo_menos_32_caracteres` (Gerar um segredo aleatório e seguro)         |
| `VITE_API_URL`       | `https://gscacambas.netlify.app/.netlify/functions/index` (Será o URL da função Netlify após o deploy)     |
| `VITE_APP_URL`       | `https://gscacambas.netlify.app` (URL principal do site após o deploy)                                      |

**Observações:**

*   **`DATABASE_URL`**: String de conexão com o banco de dados Supabase (PlanetScale, neste caso). O `sslaccept=strict` é crucial para a conexão segura.
*   **`OWNER_OPEN_ID`**: Identificador único do usuário Manus que terá permissões de administrador no site. Este valor deve ser obtido na sua conta Manus.
*   **`SESSION_SECRET`**: Chave secreta para assinar os cookies de sessão. É fundamental que seja uma string longa, aleatória e segura. Você pode usar um gerador de senhas para criar um valor forte.
*   **`VITE_API_URL` e `VITE_APP_URL`**: Estes valores são baseados no nome do site que será criado no Netlify. Se o nome do site for diferente de `gscacambas`, os valores devem ser ajustados.

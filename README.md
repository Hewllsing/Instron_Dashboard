# 🚀 Instron Dashboard System

Sistema completo para monitoramento e visualização de resultados da máquina Instron utilizando:

- Vue.js
- Node.js
- MariaDB
- API Industrial Self-Host em C#

O projeto realiza integração com a API InstronBridgeSelfHost para obter resultados de ensaios laboratoriais do software Bluehill e armazená-los numa base de dados para visualização em dashboard web.

---

# 🏗️ Arquitetura do Projeto

```txt
Frontend (Vue.js)
        ↓
Backend API (Node.js + Express)
        ↓
InstronBridgeSelfHost API (C#)
        ↓
Bluehill / Instron
        ↓
MariaDB
```

---

# ⚙️ Tecnologias Utilizadas

## Frontend

- Vue.js 3
- Composition API
- Axios
- CSS Components

## Backend

- Node.js
- Express.js
- Axios
- MariaDB
- mysql2

## Integração Industrial

- C#
- ASP.NET Web API
- OWIN Self Host
- Bluehill API
- Instron Machine

---

# 📂 Estrutura do Projeto

## Frontend

```txt
frontend/
│
├── src/
│   ├── components/
│   │
│   ├── services/
│   │
│   ├── assets/
│   │
│   └── App.vue
```

## Backend

```txt
backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── routes/
│   │
│   ├── services/
│   │
│   └── server.js
```

---

# 🔌 Funcionalidades

## ✅ Monitoramento da API

Visualização em tempo real do estado da API:

- Status online/offline
- Estado do Bluehill
- Código do último estado
- Mensagem da API
- Estado da conexão

---

## ✅ Resultados Instron

Visualização dinâmica de resultados:

- Tabelas dinâmicas
- Dados formatados
- Histórico de resultados
- Scroll responsivo
- Dashboard moderno

---

## ✅ Integração com MariaDB

Os resultados recebidos da API são armazenados automaticamente na base de dados.

---

## ✅ Mock Data

O sistema possui endpoints de testes para inserção de dados fictícios:

```http
POST /api/instron/fake-results
```

Ideal para:
- desenvolvimento frontend
- testes de dashboard
- testes sem máquina conectada

---

# 🗄️ Base de Dados

## Tabela Resultados

```sql
CREATE TABLE resultados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    table_number INT NOT NULL,
    result_json LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 📡 Endpoints Backend

## Health

```http
GET /api/instron/health
```

---

## Sincronizar Resultados

```http
POST /api/instron/sync-results
```

---

## Inserir Resultados Fake

```http
POST /api/instron/fake-results
```

---

## Obter Resultados

```http
GET /api/resultados
```

---

# ▶️ Instalação

# 1️⃣ Clonar o repositório

```bash
git clone <repo-url>
```

---

# 2️⃣ Backend

```bash
cd backend

npm install
```

## Configurar `.env`

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=instron_db
```

---

## Executar backend

```bash
npm run dev
```

---

# 3️⃣ Frontend

```bash
cd frontend

npm install
```

## Executar frontend

```bash
npm run dev
```

---

# 🧪 Integração com InstronBridgeSelfHost

O backend Node.js comunica diretamente com a API:

```http
http://localhost:9000/api/instron
```

Endpoints utilizados:

```http
/api/instron/health
/api/instron/results/formatted
```

---

# 📊 Exemplo de Resultado Recebido

```json
{
    "tableNumber": 1,
    "data": [
        [
            null,
            "S0 [mm^2]",
            "Rp0.2 [N/mm^2]",
            "Rm [N/mm^2]",
            "Ag [%]",
            "A 50mm [%]",
            "Status"
        ],
        [
            "1",
            "39.17",
            "243",
            "260",
            "8.42",
            "13.03",
            "ok"
        ]
    ]
}
```

---

# 📈 Melhorias Futuras

- WebSockets para atualização em tempo real
- Dashboard analytics
- Gráficos de ensaios
- Histórico de máquinas
- Logs industriais
- Sistema de autenticação
- Exportação PDF/Excel
- Docker
- Deploy industrial local
- Multi-machine support

---

# 🏭 Objetivo do Projeto

Este projeto foi desenvolvido para estudo e demonstração de:

- Integração industrial
- Comunicação entre APIs
- Arquitetura distribuída
- Dashboards modernos
- Sistemas laboratoriais
- Integração com equipamentos reais
- Persistência de dados industriais

---

# 👨‍💻 Autor

Leonardo Souza

Software Developer

- C#
- JavaScript
- Vue.js
- Node.js
- Python
- SQL
- APIs REST
- Sistemas Industriais

GitHub:
https://github.com/Hewllsing

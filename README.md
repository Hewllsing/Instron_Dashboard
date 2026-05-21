🚀 Instron Dashboard System

Sistema completo para monitoramento e visualização de resultados da máquina Instron utilizando:

Frontend em Vue.js
Backend em Node.js
API industrial self-host em C#
Base de dados MariaDB

O projeto realiza integração com a API InstronBridgeSelfHost para obter resultados de ensaios laboratoriais do software Bluehill e armazená-los numa base de dados para posterior visualização em dashboard web.

📸 Preview
Vue.js Dashboard
    ↓
Node.js API
    ↓
InstronBridgeSelfHost
    ↓
Bluehill / Instron Machine
🏗️ Arquitetura do Projeto
Frontend (Vue.js)
        ↓
Backend API (Node.js + Express)
        ↓
InstronBridgeSelfHost API (C#)
        ↓
Bluehill / Instron
        ↓
MariaDB


⚙️ Tecnologias Utilizadas
Frontend
Vue.js 3
Composition API
Axios
CSS Modules / Component CSS
Backend
Node.js
Express.js
Axios
MariaDB
mysql2
Integração Industrial
C#
ASP.NET Web API
OWIN Self Host
Bluehill API
Instron Machine


📂 Estrutura do Projeto
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

🔌 Funcionalidades
✅ API Health Monitoring

Visualização em tempo real do estado da API:

Status online/offline
Estado do Bluehill
Código do último estado
Mensagem da API
Estado da conexão
✅ Resultados Instron

Visualização dinâmica de resultados:

Tabelas dinâmicas
Dados formatados
Histórico de resultados
Atualização em tempo real
Scroll responsivo
✅ Integração com MariaDB

Os resultados recebidos da API são armazenados automaticamente na base de dados.

✅ Mock Data

O sistema possui endpoints de testes para inserção de dados fictícios:

POST /api/instron/fake-results

Ideal para:

desenvolvimento frontend
testes de dashboard
testes sem máquina conectada


🗄️ Base de Dados
Tabela Resultados
CREATE TABLE resultados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    table_number INT NOT NULL,
    result_json LONGTEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


📡 Endpoints Backend
Health
GET /api/instron/health
Sincronizar Resultados
POST /api/instron/sync-results
Inserir Resultados Fake
POST /api/instron/fake-results
Obter Resultados
GET /api/resultados
▶️ Instalação
1️⃣ Clonar o repositório
git clone <repo-url>
2️⃣ Backend
cd backend

npm install
Configurar .env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=instron_db
Executar backend
npm run dev

3️⃣ Frontend
cd frontend

npm install
Executar frontend
npm run dev


🧪 Integração com InstronBridgeSelfHost

O backend Node.js comunica diretamente com a API:

http://localhost:9000/api/instron

Endpoints utilizados:

/api/instron/health
/api/instron/results/formatted


📈 Melhorias Futuras

WebSockets para atualização em tempo real
Dashboard analytics
Gráficos de ensaios
Histórico de máquinas
Logs industriais
Sistema de autenticação
Exportação PDF/Excel
Docker
Deploy industrial local
Multi-machine support


🏭 Objetivo do Projeto

Este projeto foi desenvolvido para estudo e demonstração de:

Integração industrial
Comunicação entre APIs
Arquitetura distribuída
Dashboards modernos
Sistemas laboratoriais
Integração com equipamentos reais
Persistência de dados industriais


👨‍💻 Autor

Leonardo Souza
Software Developer

C#
JavaScript
Vue.js
Node.js
Python
SQL
APIs REST
Sistemas Industriais

📧 Email: Leonardo23s.pt@gmail.com
🔗 GitHub: https://github.com/Hewllsing

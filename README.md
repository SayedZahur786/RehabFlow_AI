
# RehabFlow AI

RehabFlow AI is a modern, full-stack platform for intelligent rehabilitation planning, patient assessment, and progress tracking. It leverages advanced AI models (MedGemma, Gemini) for clinical reasoning and generates personalized, phase-based rehab plans from patient images and context. The platform is designed for clinicians, therapists, and patients to streamline injury management and optimize recovery outcomes.

## Features

- **AI-Powered Clinical Analysis:**
    - Upload injury images and patient context for instant clinical reasoning and diagnosis suggestions.
    - MedGemma and Gemini models generate detailed, multi-phase rehabilitation plans.

- **Markdown Rehab Plan Viewer:**
    - Beautifully formatted, interactive rehab plans rendered in markdown for clarity and accessibility.

- **Patient Assessment Wizard:**
    - Guided, multi-step assessment flow for capturing injury details, symptoms, and baseline metrics.

- **Gamification Dashboard:**
    - Track progress, milestones, and recovery streaks with engaging visualizations.

- **Secure Data Storage:**
    - Supabase-backed database with row-level security and encrypted image storage.

- **Multi-language Support:**
    - Internationalization (i18n) for global accessibility.

- **Dockerized Deployment:**
    - Easy setup with Docker Compose for backend, frontend, and infrastructure services.

## Architecture

| Layer         | Technology                                   |
|--------------|----------------------------------------------|
| Frontend     | Next.js 15, React, Tailwind CSS              |
| Backend      | FastAPI (Python 3.11), Supabase, Redis       |
| AI Inference | Modal (BLIP, MedGemma, Gemini)               |
| Database     | Supabase (PostgreSQL + Auth)                 |
| Storage      | Supabase Storage (encrypted)                 |
| Caching      | Upstash Redis                                |
| Auth         | Supabase Auth (JWT, JWKS)                    |

## Getting Started

1. **Clone the repository:**
     ```bash
     git clone https://github.com/your-org/rehabflow-ai.git
     cd rehabflow-ai
     ```

2. **Install dependencies:**
     - Backend:
         ```bash
         cd backend
         pip install -r requirements.txt
         ```
     - Frontend:
         ```bash
         cd frontend
         npm install
         ```

3. **Configure environment variables:**
     - Copy `.env.example` to `.env` in both backend and frontend folders and fill in your keys.

4. **Run with Docker Compose:**
     ```bash
     docker compose -f infrastructure/docker/docker-compose.yml up -d
     ```

5. **Access the app:**
     - Frontend: [http://localhost:3000](http://localhost:3000)
     - Backend API: [http://localhost:8000](http://localhost:8000)

## Folder Structure

```
RehabFlow_AI/
├── backend/              # FastAPI backend
│   ├── core/             # Config, auth, logging
│   ├── routes/           # API route handlers
│   └── services/         # Business logic (AI, Supabase)
├── frontend/             # Next.js 15 frontend
│   └── app/[locale]/     # i18n pages (dashboard, assessment, rehab-plan)
├── modal/                # Modal AI endpoints
│   └── endpoints/        # BLIP + MedGemma pipeline
├── infrastructure/       # Docker configs
│   └── docker/           # Dockerfiles + docker-compose.yml
└── tests/                # Pytest test suite
```

## Future Features

- **Day-by-Day Rehab Plan Generation:**
    - Use Gemini to generate granular, daily exercise and diet plans with markdown formatting.
- **Patient Progress Analytics:**
    - Visualize recovery trends, adherence, and outcome predictions.
- **Automated Follow-Up Reminders:**
    - Notify patients and clinicians of key milestones and check-ins.
- **Custom Exercise Library:**
    - Expand database with video demos, instructions, and AI-generated exercise suggestions.
- **Voice/Chat AI Assistant:**
    - Conversational interface for plan queries, feedback, and support.
- **Mobile App Integration:**
    - Native iOS/Android apps for on-the-go access and notifications.
- **FHIR/EHR Integration:**
    - Connect with electronic health records for seamless data exchange.
- **Advanced Security & Compliance:**
    - HIPAA/GDPR-ready features, audit logs, and encrypted backups.

## License

MIT License. See LICENSE file for details.

---

For questions, feedback, or contributions, open an issue or contact the maintainers.
3. View your dashboard and click **"Analyze with AI"**
4. View the full rehabilitation plan

> **Note:** The first AI analysis may take 2-5 minutes (GPU cold start). Subsequent requests take ~30-60 seconds.

## Testing

Install test dependencies and run the test suite:

```bash
pip install -r tests/requirements-test.txt
python -m pytest tests/ -v
```

### Test Coverage

| File | Tests | Coverage |
|---|---|---|
| `test_cors.py` | 7 | CORS headers on success, errors, preflight, credentials |
| `test_ai_service.py` | 11 | Field mapping, Modal payload, fallback logic, error handling |
| `test_supabase_service.py` | 8 | Null safety on `maybe_single()`, ownership validation |
| `test_integration.py` | 6 | Full API request/response cycle, auth, CORS on errors |

## Environment Variables

See `.env.example` for the full list. Key variables:

| Variable | Description |
|---|---|
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_ANON_KEY` | Supabase anonymous key |
| `SUPABASE_SERVICE_KEY` | Supabase service role key |
| `SUPABASE_JWT_SECRET` | JWT secret for token validation |
| `REDIS_URL` | Redis connection URL |
| `MEDGEMMA_ENDPOINT` | Modal **analyze** endpoint URL |
| `HUGGINGFACE_API_KEY` | HuggingFace token (for model access) |

## Project Structure

```
RehabFlow_AI/
├── backend/              # FastAPI backend
│   ├── core/             # Config, auth, logging
│   ├── routes/           # API route handlers
│   └── services/         # Business logic (AI, Supabase)
├── frontend/             # Next.js 15 frontend
│   └── app/[locale]/     # i18n pages (dashboard, assessment, rehab-plan)
├── modal/                # Modal AI endpoints
│   └── endpoints/        # BLIP + MedGemma pipeline
├── infrastructure/       # Docker configs
│   └── docker/           # Dockerfiles + docker-compose.yml
└── tests/                # Pytest test suite
    ├── conftest.py       # Shared fixtures
    ├── test_cors.py      # CORS configuration tests
    ├── test_ai_service.py       # AI service unit tests
    ├── test_supabase_service.py # Supabase null-safety tests
    └── test_integration.py      # End-to-end API tests
```

## Production Deployment

| Service | Platform |
|---|---|
| Backend | Railway |
| Frontend | Vercel |
| AI | Modal |
| Database | Supabase |
| Cache | Upstash Redis |

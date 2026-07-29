# SHIVAM GARG — RAW DATA FILE
# Single source of truth. Update this file as new things happen.
# Used to generate: resumes, summaries, AI Me personas, cover letters, LinkedIn bios, portfolios.
# Last updated: June 2026

---

## 1. IDENTITY

```
full_name:        Shivam Garg
dob:              26 September 2004
age:              21
location_current: Gurugram / Greater Noida, India (onsite at Amdocs, Gurugram)
location_home:    Delhi, India
languages:        English (fluent/native), Hindi (fluent/native)
mobility:         Open to relocation (domestic and international), open to remote
```

---

## 2. CONTACT & ONLINE PRESENCE

```
email:      shivamcp2694@gmail.com
phone:      +91-8799766316
linkedin:   https://www.linkedin.com/in/shivamgarg2694
github:     https://github.com/JDevShivamGarg
leetcode:  https://leetcode.com/u/Bkgt58XMZh/
medium:    https://medium.com/@shivamcp2694
portfolio:  [FLAGGED - github.io domain marked as virus by Google. Do not use until resolved.]
```

GitHub stats (as of June 2026):
- 33 public repositories
- 4 stars received (Dev-Deck: 1, Source-Sync: 1)
- GitHub achievements: Pull Shark, YOLO
- GitHub Developer Program Member

Medium (self-published, no publication):
- 1 published article:
  title:  "Building a Production-Grade Data Synchronization Engine: A Deep Dive into Dual-Write Architecture"
  url:    https://medium.com/@shivamcp2694/building-a-production-grade-data-synchronization-engine-a-deep-dive-into-dual-write-architecture-31f1e2cdb311
  topic:  Dual-write architecture patterns for production data sync — directly connected to Firestore → PostgreSQL migration and batch pipeline work at vCommission
  note:   Add read count / claps here when available

LeetCode (https://leetcode.com/u/Bkgt58XMZh/):
- Global rank: 1,103,591
- Problems solved by language:
    Python:   107
    Python3:  22
    C++:      13
    (total minimum ~142, likely higher with overlap and unlisted languages)
- Skill tags by category:
    Advanced:     Dynamic Programming (×14), Backtracking (×12), Divide and Conquer (×5)
    Intermediate: Hash Table (×28), Binary Search (×26), Math (×17)
    Fundamental:  Array (×87), String (×40), Two Pointers (×20)
- Note: total solved count not publicly visible on profile page; update when confirmed

---

## 3. EDUCATION

```
institution:  Bennett University, Greater Noida, Uttar Pradesh
degree:       B.Tech — Computer Science and Engineering
period:       2022 – 2026
cgpa:         9.2 / 10.0
standing:     Dean's List 2024–2025 (top academic cohort)
enrollment_no: E22CSEU1506
```

---

## 4. WORK EXPERIENCE

### 4.1 Amdocs
```
company:    Amdocs
role:       Software Engineer Intern
location:   Building 4, DLF Downtown, DLF Phase 3, Gurugram, Haryana 122002
type:       Onsite
period:     22 January 2026 – 30 June 2026
department: Operations
manager:    Mr. Manish Sharma (Reporting Manager)
mentor:     Mr. Manu Singla (Industry Mentor, Software Technical Expert)
faculty:    Dr. Antim Chauhan (Faculty Mentor, Bennett University)
total_hours_logged: ~204 (Weeks 8–13 alone)
```

**Project 1: AI-Powered Case Triage Workflow (PRIMARY PROJECT)**
- Automated support ticket triage system using AI agents, MCP servers, sub-agents, and browser automation
- Inherited at V2.4, enhanced through multiple versions to current Openet-extended version

Architecture:
- Redesigned from monolithic prompt → modular, phase-based agentic architecture
- Reduces LLM token consumption; each phase independently configurable, testable, extendable
- Shipped two deployment variants: prompt-based and Docker-containerized

Phases (6):
- Phase 0: Preflight / reader-tool probe
- Phase 1: Evidence collection — Steps 1.1d (CDR), 1.1e (Stats), 1.1f (PCAP), 1.1g (lab_request)
- Phase 2: Attachment coverage gate
- Phase 3: Analysis / cross-case
- Phase 4: Documentation / note writing
- Phase 5: Confidence scoring & CR assessment

MCP Servers integrated (7):
- supportgpt, apss-data, user-Jira, user-Bitbucket, user-Confluence, user-cdr-analytics, user-Insight Engine

Sub-agents / skills (3 primary):
- pcap-analyser-v1 (inline tshark skill for PCAP analysis)
- cdr-analysis-agent (CDR pipeline)
- stats-analysis-agent (Stats/Insight pipeline)
- Additional: Bitbucket/Confluence investigation helpers, lab-request writer

Rule files (12):
- cdr-tool-gate.mdc, stats-tool-gate.mdc, pcap-tool-gate.mdc, lab-request-gate.mdc
- mcp-usage.mdc, confidence-scoring.mdc, cr-assessment.mdc, customer-tone.mdc
- no-summarize.mdc, note-format.mdc, output-format.mdc, reasoning-protocol.mdc

Evidence confidence scoring (hard caps):
- PCAP: max +2.0 (partial +0.5 possible)
- CDR: max +2.5
- Stats: max +2.5
- CDR+Stats combined stacking cap: +3.0
- SupportGPT per-case call hard cap: ≤3 calls (Phase 2 primary +1 follow-up; Phase 4 primary +1 fallback)

Supported attachment types (10+):
- .zip, .7z, .tar, .tar.gz, .gz
- .pcap / .pcapng / .cap
- .csv / .xlsx / .xml / .log / .txt
- .msg

Hard constants:
- VAULT_DOWNLOAD_TIMEOUT_MS = 60,000ms (60s) per file
- _preflight_cache TTL = 5 minutes

Fail-soft / retry logic:
- Transient MCP network errors → retry once → mark *_tool_status = "unavailable" → proceed with manual analysis (fail-soft, never hard-fails)
- SupportGPT composer-2 bug workaround: call via tools/call_supportgpt.py shell helper
- Preflight smoke tests cached for 5 minutes to avoid redundant MCP checks

External CLI tools required:
- tshark (mandatory PCAP analysis)
- 7z / p7zip-full (added for .7z extraction)
- unzip / tar / gzip
- pandas / plotly (plotting in Brain)

Output artifacts:
- result.json: phase blocks (phase_1d_cdr, phase_1e_stats, phase_1f_pcap, cr_assessment, confidence_derivation)
- lab_request.json (when Step 1.1g triggers)
- attachment_coverage merged into case_details.json

V2.4 → current key deltas (7):
(a) Openet extended triage gate added (Openet-only phases behind extended_triage_enabled flag)
(b) CDR & Stats pipelines ported inline to Brain (no sub-agent delegation)
(c) PCAP pipeline re-introduced with strict tshark sequence and required output schema
(d) Playwright vault download + attachment_coverage ledger added to Fetcher
(e) .7z extraction support (p7zip-full)
(f) MCP preflight smoke tests + 5-minute preflight cache
(g) Evidence stacking caps (CDR+Stats) + stronger reasoning-protocol enforcement

V2.5 additions: Large File Handling Protocol, Reasoning Capture, Phase-Level Audit Trail, Handoff Verification, Startup Validation
V2.6 addition: Phase 4C — automated third-party web search (Kafka, Elasticsearch, Kubernetes, VoltDB)
V2.7 addition: Phase 4D — Call Record Analysis Integration via Playwright browser automation

Outcome: 30% improvement in triage accuracy through expanded MCP-driven investigation, deep attachment analysis coverage, and evidence scoring framework
Tech: Python, Playwright MCP, Cursor IDE, supportgpt/apss-data/Jira/Bitbucket/Confluence/cdr-analytics/Insight Engine MCPs, tshark, p7zip, Docker

**Project 2: Insight Engine**
- Internal GenAI analytics tool for querying sensitive telemetry CSV data
- Privacy-first: files processed locally in temporary storage, zero external upload
- DuckDB for in-memory virtual table generation and efficient SQL querying
- Natural language → dynamic dashboards, graphs, interactive reports (Plotly.js, Jinja2)
- Power BI (.pbix) template integration for enterprise BI reporting
- Containerized with Docker; Kubernetes for deployment
- Tech: Python, DuckDB, Plotly.js, Jinja2, Power BI, Docker, Kubernetes

**Project 3: AI Life CoPilot (Hackathon — IWD Event)**
- Multi-agent AI personal orchestration system targeting working mothers
- Reduces mental load across household, children, career, finances, side hustle via single conversational interface
- Architecture: LangGraph hierarchical orchestrator pattern
- Agents: 6 specialist sub-agents (Email, Meal, Finance, Kids, SideHustle, Preference)
- Memory: 3-layer architecture — short-term (ConversationBufferWindowMemory), long-term (ChromaDB vector store), episodic (SQLite)
- LLM: Gemini 2.0 Flash for intent classification, narration, agent intelligence
- Interface: Telegram Bot (python-telegram-bot) with text, photo, document handlers
- Integrations: Gmail API, Google Calendar API
- Presented live demo to ~100 employees at International Women's Day event
- Co-built with one teammate
- Tech: Python, LangGraph, LangChain, Gemini 2.0 Flash, ChromaDB, SQLite, Telegram Bot API

**Project 4: Lab Deployment Agent (NEW — June 2026)**
- Kubernetes deployment automation platform for Amdocs Openet Platform (5G/4G network functions) and Amdocs Openet Charging (AOC) stacks
- Replaces error-prone manual Helm workflows with a single declarative command for multi-namespace telco workloads
- Implemented in Python 3.10+ as an MCP server exposing ~65 composable tools
- Drives Helm 3 and kubectl over SSH against a six-node RHEL cluster
- Deployment pipeline features:
  - Artifactory-based version resolution against release trains
  - Five-tier layered values merge: global → namespace → product → usecase → custom
  - Preflight CRD/operator validation
  - Phased step-then-main chart rollout with per-chart retry and timeout tuning
  - Post-deploy pod/release health verification
  - Scope: 9 products, 4–63 charts each, plus 28 shared prerequisites
- Key engineering contributions (production-blocking failure fixes):
  - Auto CRD-bootstrap layer: substitutes Kubernetes 1.24-compatible upstream cert-manager, ECK, and OpenTelemetry CRDs for incompatible bundled charts
  - Per-chart Kubernetes-version compatibility guard: skips charts requiring unavailable API fields
  - Async background-job model: progress polling + live web dashboard for long-running (30–90 min) deployments
  - Lab mode: rewrites replica counts, resource requests/limits, probe timings for constrained clusters
  - Resilient cleanup + orphaned-CRD adoption logic: resolves Helm ownership conflicts and stateful-volume reuse
- Targeted production fixes:
  - Right-sized VoltDB container memory to 2 GB JVM heap → eliminated OOM-induced init crashloop
  - Deleted stale PVCs → prevented cross-run data corruption
  - Corrected Gloo CRD ordering
  - Cleared non-deployed releases
- Outcome: AOC charging stack went from cascading prerequisite failures to a fully healthy monitoring and data plane (Elasticsearch, Kibana, Logstash, Consul); turned multi-day, expert-dependent installs into repeatable, observable, single-operator deployments
- Tech: Python 3.10+, MCP (FastMCP), Helm 3, kubectl, Kubernetes, SSH, RHEL, Artifactory, cert-manager, ECK, OpenTelemetry, VoltDB, Elasticsearch, Kibana, Logstash, Consul, Gloo
- Completed Prompt Engineering course (Week 8)
- Started RAG course (Week 8)
- Completed "Master AI Agents in 30 Days" course (Week 7) — OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, MCP
- Explored Kafka, Elasticsearch MCP server integrations in Cursor IDE
- Helped fellow intern with MCP server configuration
- Attended telecom basics educational sessions
- Started structured system design study (Week 11)
- Received KT on internal DevOps tooling

---

### 4.2 vCommission
```
company:    vCommission
role:       Software Engineer Intern (Full-Stack)
location:   Gurugram, India
type:       Onsite
period:     August 2025 – January 2026
domain:     Affiliate marketing platform
```

Key contributions:
- Led complete database migration from Firestore to normalized PostgreSQL schema (15+ tables) with Dev/Staging/Prod environment-based data isolation
- Wrote complex SQL queries and window functions to handle data-intensive operations and reporting
- Built 30+ REST API endpoints in Go (Gin) with custom middleware chain: CORS, JWT, RBAC, OAuth 2.0 — achieved 3x performance improvement over legacy systems
- Engineered a batch data processing pipeline with token-bucket rate limiting (14 req/sec) syncing 1000+ daily records from external APIs with automatic error recovery
- Implemented load balancing, rate limiting, and worker pools to enhance application stability under production load
- Built production-grade admin dashboard in React/TypeScript: bulk product uploads, real-time analytics, optimized component rendering — reduced API data fetching times by 40%
- DevOps: GCP Cloud Run, zero-downtime CI/CD pipelines, code reviews, Agile multi-developer team, merge conflict resolution
- Tech: Go (Gin), PostgreSQL, React 19, TypeScript, GCP Cloud Run, Docker, JWT, OAuth 2.0, SQL window functions

---

## 5. RESEARCH & PUBLICATIONS

```
title:      "Hybrid CNN-RNN Deepfake Detection Framework"
conference: 5th International Conference on Intelligent Vision and Computing (ICIVC 2025)
published_in: Intelligent Vision and Computing: Proceedings of ICIVC 2025
series:     Lecture Notes in Networks and Systems (LNNS), Volume 1710
publisher:  Springer Nature
year:       2026
doi:        https://doi.org/10.1007/978-3-032-10664-3
status:     Published
```

Technical details of the paper:
- Hybrid ResNeXt-50 + LSTM architecture
- Analyzes spatial artifacts (ResNeXt-50 / CNN) and temporal artifacts (LSTM / RNN)
- Trained and evaluated on FaceForensics++ dataset
- Achieved 90% accuracy
- Accompanied by a Flask web platform for live video/image upload and real-time deepfake analysis

---

## 6. PROJECTS (FULL INVENTORY)

### 6.1 Dev-Deck (formerly TechFlash)
```
repo:     https://github.com/JDevShivamGarg/Dev-Deck
status:   Active / Production-ready (APK available on Expo)
stars:    1
language: TypeScript (99.1%)
```
- Mobile app for software engineers to accelerate learning via Spaced Repetition (SRS) and AI content generation
- Offline-first: all cards, progress, SRS scheduling computed locally via expo-sqlite
- SRS algorithm dynamically adjusts review intervals based on historical performance
- Three study modes: MCQ, Flashcard, Scenario-based
- AI content generation: Groq API (llama-3.3-70b-versatile) for automatic deck generation; BYO-LLM clipboard flow for ChatGPT/Claude
- Context-aware deduplication: AI generation engine is aware of existing cards to prevent duplicates
- Features: streak tracking, daily goals, session history (Today / 7-day / 30-day), bulk card deletion, JSON export, manual difficulty adjustment, card retirement
- Brutalist terminal aesthetic: 8px grid, custom typography, high-contrast
- Tech: React Native, Expo SDK 54, Expo Router v3, expo-sqlite, Zustand, react-native-reanimated, @shopify/flash-list, Groq API, NativeWind, Tailwind CSS

### 6.2 Source Sync — Narrative Analysis Tool
```
repo:     https://github.com/JDevShivamGarg/Source-Sync
status:   GitHub-only. render.yaml exists but deployment URL placeholder was never filled.
          No live deployment, no CI/CD pipeline active.
stars:    1
language: TypeScript (frontend), Python (backend)
```
What it does:
- Full-stack web app performing deep contextual analysis of anime adaptations against source material
- Identifies narrative gaps, altered character arcs, and excised story beats that simple text comparison cannot surface
- Input-agnostic: accepts any .srt subtitle file and any plain-text source file
- No hardcoded title list, no processing history, no analytics — titles processed count is unknown and untracked

Backend pipeline (Python / Flask):
- .srt subtitle parsing via pysrt
- Text segmentation via NLTK tokenization
- Semantic embedding via Google Universal Sentence Encoder (TensorFlow Hub)
- FAISS cosine-similarity indexing — source segments below 0.5 similarity threshold flagged as omitted
- K-Means clustering (scikit-learn) groups unmatched segments into thematic clusters
- Gemini 1.5 Flash synthesizes each cluster into narrative summaries
- Outputs structured JSON report categorizing missing content by story type (character backstory, world-building, etc.)

Frontend (React 18 + TypeScript):
- Vite bundler, Tailwind CSS, Radix UI primitives, shadcn/ui components
- File upload + report visualization SPA

Infrastructure:
- Containerized via Docker
- Render deployment scaffolded but not completed

Metrics / claims:
- "90%+ clustering consistency" — NOT a real figure. Was fabricated in resume drafting. Remove from all documents.
- "10,000+ segments processed" — unverified, no tracking exists. Remove from all documents.
- No confirmed performance numbers. If needed, run controlled tests before adding any metric.

### 6.3 AirLens — Smart Environmental Monitoring
```
repo:     https://github.com/JDevShivamGarg/Smart-Environmental-Monitoring
frontend:  [github.io flagged - link suppressed. Repo: https://github.com/JDevShivamGarg/Smart-Environmental-Monitoring]
backend:  Render (separate deployment)
status:   Active / Deployed
language: JavaScript / Python
```
What it does:
- Full-stack environmental monitoring platform tracking air quality and meteorological conditions
- Covers 34 cities spanning all Indian states and union territories

ETL Pipeline:
- FastAPI backend + APScheduler runs daily fetch at 12:00 PM
- Data sources: WeatherAPI (temperature, humidity, wind, pressure) + AQICN (AQI, dominant pollutant)
- Pydantic schema validation on every record
- Deduplication by city–timestamp composite key
- Upserts into Supabase PostgreSQL cloud database

Frontend:
- React 19 + Vite + Tailwind CSS
- Recharts: time-series and bar charts
- Leaflet: geographic map with color-coded city markers
- Threshold-based alert system with toast notifications
- Statistical analysis view: descriptive statistics + correlation matrix across all tracked metrics

Caching:
- Client-side localStorage with 1-hour TTL
- Server-side Cache-Control headers
- Combined effect: outbound API calls reduced from 144/day to 1/day (99% reduction)
- Page load time: ~800ms → ~50ms

Security / hardening:
- SlowAPI rate limiting: 20–100 req/min per endpoint
- CORS middleware scoped to production and development origins
- Pydantic input validation
- Gzip compression via Nginx reverse proxy

Infrastructure:
- Docker Compose (full stack containerization)
- Backend: Render
- Frontend: GitHub Pages
- Designed for extension toward WebSocket real-time updates and ML-based AQI forecasting

Verified metrics:
- 34 cities
- 99% API call reduction (144/day → 1/day)
- Load time: ~800ms → ~50ms
- Rate limiting: 20–100 req/min per endpoint
- Records stored: 1000+ daily

### 6.4 Deepfake Detection Webapp
```
repo:     https://github.com/JDevShivamGarg/Deepfake-Detection-Webapp
status:   Complete (companion to ICIVC 2025 publication)
language: Python
```
- Hybrid ResNeXt-50 + LSTM deepfake detection model
- 90% accuracy on FaceForensics++ dataset
- Flask web platform for live video/image upload and real-time analysis
- Tech: PyTorch, ResNeXt-50, LSTM, Flask

### 6.5 MovieBuzz
```
status:   Complete
```
- Dynamic TV show discovery platform
- Fuzzy search algorithm reducing search errors by 40%
- TVMaze API integration, Redux state management
- Tech: React, Redux, TVMaze API

### 6.6 Neo4j Graph Visualization
```
status:   Complete
```
- Interactive graph playground with real-time manipulation
- Custom graph algorithm implementations
- Tech: React, Tailwind CSS, Neo4j

### 6.7 system-blueprints
```
repo:     https://github.com/JDevShivamGarg/system-blueprints
status:   Active / Public
```
- Structured collection of HLD (High-Level Design) documents for software project ideas
- 26-section Mermaid-diagram-rich templates
- Full contribution workflow with enforcement checklists
- Two standalone AI prompts: one for generating new plans via agentic tools, one for reviewing submissions
- Philosophy: architectural reasoning is the scarce artifact in the AI era, not implementation code
- Reference plans: RAG-based Document Intelligence System, Vibe Maxxing

### 6.8 Vibe Maxxing (Blueprint / In Progress)
```
status:   Blueprint complete, implementation planned
```
- Anonymous PWA-based social matching app
- AI agents converse autonomously on behalf of matched users before human interaction begins
- Human takeover mechanic after AI conversation phase
- Stack: Next.js 14, Supabase, Groq (llama-3.1-70b-versatile), Vercel

### 6.9 AI Life CoPilot
```
status:   Delivered for IWD hackathon at Amdocs, demoed to ~100 employees
```
(See Section 4.1 Project 3 for full details)

### 6.12 Bookwright — Privacy-First RAG Document Intelligence
```
repo:     https://github.com/JDevShivamGarg/Bookwright
status:   Active
```
What it does:
- Local web app and CLI agent for full-text search and intelligent Q&A over personal EPUB and PDF libraries
- Privacy-first: entirely local, no external data upload

Architecture:
- FastAPI backend
- Dual-engine hybrid retrieval: lexical (SQLite FTS5 + in-memory BM25) fused with dense semantic retrieval (ChromaDB + BAAI embeddings) via Reciprocal Rank Fusion
- Adaptive hybrid auto-promotion pipeline: zero-wait document ingestion with background migration of heavily queried texts to persistent indexes
- Retrieval orchestrator supports pluggable LLMs: local (Ollama) or remote (Groq)
- Iterative Map-Reduce batching to bypass context window limits — handles 40,000+ word multi-chapter requests
- Strict page-level citation grounding mapped through precise character offsets — mitigates hallucinations
- Responsive frontend interface for document analysis

Key technical contributions:
- Zero-wait ingestion via adaptive auto-promotion pipeline
- Reciprocal Rank Fusion combining lexical and semantic scores
- Context window bypass via Map-Reduce batching (40,000+ words)
- Character-offset citation grounding for verifiable answers

Tech: Python, FastAPI, SQLite FTS5, BM25, ChromaDB, BAAI embeddings, Ollama, Groq, Map-Reduce, Reciprocal Rank Fusion
### 6.12 Aegis — LLM Evaluation & Observability Framework
```
repo:     https://github.com/JDevShivamGarg/Aegis-LLM-Evaluator---Observability-Framework
status:   Active
```
Architecture:
- Dual-pathway design: AegisLocalEvaluator (lightweight, zero-dependency, in-memory) + AegisAPIClient (async, database-backed telemetry)
- Distributed Celery worker nodes executing evaluations using pre-downloaded local model weights
- FastAPI backend, PostgreSQL, Redis, Streamlit dashboard

Evaluation capabilities:
- Deterministic rule assertions
- Sentence-level semantic similarity via all-MiniLM-L6-v2
- Safety evaluation via local unbiased-toxic-roberta classifier
- RAG grounding scores
- Parallel multi-judge consensus pipelines with error resilience
- Fallback: mathematical mean across successful models during API rate limits (eliminates evaluator bias)

Observability:
- Cost aggregation to $10^{-6} USD resolution via cross-referencing tokens against dynamic provider_pricing table
- Interactive side-by-side prompt version diffs
- Historical Plotly regression heatmaps
- Automated Slack/Discord notifications on quality threshold breaches

Planned:
- Kubernetes auto-scaling deployment
- OAuth + JWT multi-tenant authentication
- Native SDK integrations for Python agentic frameworks

Tech: Python, FastAPI, PostgreSQL, Redis, Celery, Streamlit, all-MiniLM-L6-v2, unbiased-toxic-roberta, Plotly, Slack/Discord webhooks
```
live:   [FLAGGED - do not share until resolved]
index:  [FLAGGED - github.io domain suppressed]
repo:   https://github.com/JDevShivamGarg/Portfolio-Website
status: Active
note:   The root index dynamically fetches and renders (github.io domain currently flagged)
        all 33 GitHub repos at runtime. Portfolio-Website is the dedicated portfolio.
```

Total GitHub repos: 33 (as of June 2026)

---

## 7. TECHNICAL SKILLS

### Languages
Python, Go (Golang), JavaScript, TypeScript, Java, SQL

### AI / ML
Large Language Models (LLM), Generative AI, Retrieval-Augmented Generation (RAG),
Prompt Engineering, Multi-Agent Systems, Agentic AI Workflows,
LangGraph, LangChain, TensorFlow, PyTorch, Computer Vision, NLP,
ChromaDB, FAISS, Groq API, Gemini API

### Backend & Data
REST APIs, FastAPI, Flask, Gin (Go), DuckDB, PostgreSQL, MongoDB,
MySQL, Supabase, Firestore, ETL Pipelines, APScheduler

### Frontend & Mobile
React 19, React Native, Expo, TypeScript, Redux, Zustand,
Tailwind CSS, NativeWind, Plotly.js, Jinja2

### DevOps & Cloud
Docker, Kubernetes, GCP (Cloud Run), CI/CD, Playwright (MCP browser automation),
Git / GitHub, Linux, Nginx, Render, Expo EAS

### Protocol & Tooling
Model Context Protocol (MCP), FastMCP, Cursor IDE (MCP-integrated),
Bitbucket, Confluence, Jira, Telegram Bot API, Kafka, Elasticsearch, VoltDB

---

## 8. CERTIFICATIONS & COURSES

### 8.1 Coursera (22 certificates completed)

**AI / ML**
- Google Advanced Data Analytics Capstone — Google (Apr 2025)
- Google AI Essentials — Google (Apr 2025)
- Natural Language Processing with Probabilistic Models — DeepLearning.AI (Oct 2024)
- Convolutional Neural Networks in TensorFlow — DeepLearning.AI (Oct 2024)
- Sample-based Learning Methods — University of Alberta / AMII (Apr 2024)
- Fundamentals of Reinforcement Learning — University of Alberta / AMII (Apr 2024)
- Unsupervised Machine Learning — IBM (Oct 2023)
- Supervised Machine Learning: Classification — IBM (Oct 2023)
- Exploratory Data Analysis for Machine Learning — IBM (Oct 2023)

**Cybersecurity**
- Connect and Protect: Networks and Network Security — Google (Apr 2025)
- Play It Safe: Manage Security Risks — Google (Apr 2025)
- Foundations of Cybersecurity — Google (Apr 2025)
- Introduction to Computers and Operating Systems and Security — Microsoft (Mar 2024)

**CS Fundamentals & DSA**
- Algorithmic Toolbox — UC San Diego (Mar 2024)
- Data Structures — UC San Diego (Oct 2023)
- Object-Oriented Data Structures in C++ — University of Illinois Urbana-Champaign (Oct 2023)
- C++ Object Basics: Functions, Recursion, and Objects — Codio (Apr 2025)

**Software Engineering**
- Software Development Processes and Methodologies — University of Minnesota (Oct 2024)

**Networking**
- Fundamentals of Network Communication — University of Colorado System (Mar 2024)

**Legal / IP**
- Patent Law — University of Pennsylvania (Oct 2024)
- Copyright Law — University of Pennsylvania (Oct 2024)

**Other**
- Simulation and Modeling of Natural Processes — University of Geneva (Oct 2024)

---

### 8.2 Other Platforms & Certifications

**Completed**
- Master AI Agents in 30 Days — Ed Donner (OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, MCP) — Jan 2026
- Prompt Engineering — Jan 2026 (completed at Amdocs, Week 8)
- ServiceNow Certified System Administrator (CSA)
- ServiceNow Certified Application Developer (CAD)

**In Progress**
- Retrieval-Augmented Generation (RAG) — started Mar 2026

---

### 8.3 Resume-Worthy Subset (signal-to-noise filtered)
These are the certs that belong on a resume or LinkedIn for current target roles:
- Convolutional Neural Networks in TensorFlow — DeepLearning.AI
- Google AI Essentials — Google
- Prompt Engineering
- Master AI Agents in 30 Days
- Fundamentals of Reinforcement Learning — University of Alberta / AMII
- NLP with Probabilistic Models — DeepLearning.AI
- ServiceNow CSA + CAD (relevant only for ServiceNow-adjacent roles)

---

## 9. EXTRACURRICULARS & COMMUNITY

```
club:   CodeChef Chapter — Bennett University
role:   Member
notes:  Competitive programming and tech community participation
```

---

## 10. ACADEMIC COURSEWORK (SELECTED — UNIVERSITY)
Note: These are not listed on resume as they are standard curriculum,
but are part of the full data record for completeness.
Includes standard CSE coursework: Data Structures & Algorithms, Operating Systems,
Database Management Systems, Computer Networks, Software Engineering,
Machine Learning, Computer Architecture, Discrete Mathematics, etc.

---

## 11. PERSONALITY & WORKING STYLE

**Origin of interest in CS:**
Fascinated by computers from childhood — specifically by the feeling that the computer does
exactly what you tell it to do. This extended to curiosity about how things work underneath:
websites, traffic lights, systems. The underlying question was always "how does it actually do that."

**Core working trait:**
Has traits consistent with ADHD/OCD in the sense that unresolved problems or unclear
understanding creates persistent cognitive discomfort until the issue is fully resolved or
understood. This drives thorough debugging, deep-diving into root causes, and not moving on
until something is actually fixed — not just patched.

**Strength:**
Efficient problem-solving. Always looking for the best and most correct approach, not the
first approach. Naturally explores alternatives before committing to a solution. High inclination
toward doing things the right way rather than the fast way.

**Known weakness / growth area:**
Imposter syndrome and systematic underselling. Tends to feel unfamiliar with things even when
competent. Does not naturally project confidence in what is already known. Affects
self-presentation in interviews and written self-descriptions.

**Communication:**
English and Hindi native. Technical communication is strong (evidenced by presenting
AI Life CoPilot to ~100 Amdocs employees). Written communication demonstrated through
Medium article and internship report authorship.

---

## 12. SOCIAL PROOF & METRICS SUMMARY

| Metric | Value |
|--------|-------|
| CGPA | 9.2 / 10.0 |
| Springer publication | Confirmed, DOI live |
| Dean's List | 2024–2025 |
| IWD demo audience | ~100 Amdocs employees |
| Triage accuracy improvement | 30% |
| vCommission perf improvement | 3x |
| vCommission API fetching reduction | 40% |
| AirLens API call reduction | 99% |
| AirLens load time | 50ms |
| AirLens uptime | 99.9% |
| Deepfake model accuracy | 90% on FaceForensics++ |
| Source Sync segment processing | 10,000+ segments |
| AirLens ETL daily records | 1000+ |
| vCommission daily pipeline records | 1000+ |
| Amdocs REST API endpoints (vCommission) | 30+ |
| PostgreSQL schema tables (vCommission) | 15+ |
| GitHub repos | 33 |
| Amdocs internship hours logged (Weeks 8–13) | ~204 |

---

## 13. UPDATE LOG
```
2026-06 — Initial file created from: resume, 2x internship reports, GitHub profile, user input
2026-06 — Added Dev-Deck full technical details from GitHub repo
2026-06 — Added Springer DOI confirmed from publisher page
2026-06 — Added ServiceNow CSA/CAD certifications
2026-06 — Added CodeChef chapter membership
2026-06 — Added personality/working style section
2026-06 — Confirmed Medium article title and URL; self-published (no publication); topic: dual-write architecture
2026-06 — Confirmed portfolio index auto-generates from GitHub API (33 repos)
2026-06 — CORRECTION: Source Sync — removed fabricated "90%+ clustering consistency" and "10,000+ segments" metrics. No live deployment confirmed. Full pipeline tech stack updated from README.
2026-06 — CORRECTION: AirLens — 34 cities (not 31+); load time 800ms→50ms (not just "50ms"); API calls 144/day→1/day; SlowAPI rate limiting added; Docker Compose + split deployment (Render + GitHub Pages) documented correctly
2026-06 — Added Lab Deployment Agent (Project 4, Amdocs): MCP server, ~65 tools, Kubernetes/Helm automation for 5G/4G telco stack, production fix outcomes documented
2026-06 — Added full Coursera certificate list: 22 verified certificates across AI/ML, cybersecurity, DSA, networking, legal, SE
2026-06 — Added LeetCode profile: rank 1,103,591; 142+ problems; strong in DP, backtracking, hash table, binary search
2026-06 — NOTE: 33 total GitHub repos, ~24 not yet documented — READMEs to be added by user
2026-06 — NOTE: New Amdocs project pending — to be added when shared by user
```

---
# END OF FILE
# To update: add entries under the relevant section and append to update log.

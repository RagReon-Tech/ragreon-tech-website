import React from 'react'
import {
  User,
  Layout,
  Server,
  FileText,
  Search,
  Cpu,
  Database,
  Layers,
  ArrowDown,
  GitBranch,
  Bot,
  MessageSquare,
} from 'lucide-react'

export const RagArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background ambient mesh */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        {/* Diagram Title & Legend */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
              <GitBranch className="w-4 h-4 text-blue-400" />
              <span>Technical Data Flow Blueprint</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">
              BIS SmartAssist End-to-End System Architecture
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Client
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" /> Backend
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" /> Vector DB
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Local LLM
            </span>
          </div>
        </div>

        {/* STEP 1: USER INTERACTION */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md bg-slate-800/90 border border-blue-500/40 rounded-xl p-3.5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <User className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                  Step 1 • User Interaction
                </div>
                <div className="text-sm font-bold text-white">Natural Language Query / Document Upload</div>
                <div className="text-xs text-slate-400">Asks standards questions or uploads PDF / Image (max 5, 10MB)</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
              User
            </span>
          </div>

          <div className="flex flex-col items-center py-2 text-blue-400">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* STEP 2: FRONTEND LAYER */}
          <div className="w-full max-w-md bg-slate-800/90 border border-indigo-500/40 rounded-xl p-3.5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <Layout className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                  Step 2 • Client Interface Layer
                </div>
                <div className="text-sm font-bold text-white">React + Vite Frontend</div>
                <div className="text-xs text-slate-400">Conversational interface, file staging &amp; source citations</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Client
            </span>
          </div>

          <div className="flex flex-col items-center py-2 text-indigo-400">
            <span className="text-[10px] font-mono bg-slate-800/80 px-2 py-0.5 rounded text-slate-400 border border-slate-700 mb-0.5">
              HTTP API Request (POST)
            </span>
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* STEP 3: FASTAPI BACKEND */}
          <div className="w-full max-w-lg bg-slate-800/90 border border-purple-500/40 rounded-xl p-4 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                <Server className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider font-semibold">
                  Step 3 • API &amp; Orchestration Layer
                </div>
                <div className="text-sm sm:text-base font-bold text-white">FastAPI Backend Server</div>
                <div className="text-xs text-slate-400">Asynchronous request validation, route handling &amp; context fusion</div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
              FastAPI
            </span>
          </div>

          {/* DUAL PARALLEL PIPELINE FORK */}
          <div className="w-full max-w-3xl my-4">
            <div className="text-center text-[11px] font-mono text-slate-400 mb-2">
              Parallel Execution &amp; Context Routing
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* BRANCH A: DOCUMENT PROCESSOR */}
              <div className="bg-slate-800/60 border border-amber-500/30 rounded-xl p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs font-mono">
                    <FileText className="w-4 h-4" />
                    <span>Branch A: Document Processor</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Isolated
                  </span>
                </div>
                <div className="space-y-1.5 text-left">
                  <div className="text-xs text-slate-300 font-medium">PyMuPDF &amp; Pillow</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Extracts text from uploaded PDFs &amp; images. Chunks text ephemerally without touching permanent DB.
                  </p>
                  <div className="text-[10px] text-amber-300/80 bg-amber-500/10 p-2 rounded border border-amber-500/20">
                    ⚠️ Scanned PDF/Image OCR pending verified native Tesseract install
                  </div>
                </div>
                <div className="text-center text-amber-400 pt-1">
                  <ArrowDown className="w-4 h-4 mx-auto" />
                </div>
              </div>

              {/* BRANCH B: RAG SERVICE & CHROMADB */}
              <div className="bg-slate-800/60 border border-cyan-500/30 rounded-xl p-4 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs font-mono">
                    <Search className="w-4 h-4" />
                    <span>Branch B: RAG Service</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    ChromaDB
                  </span>
                </div>
                <div className="space-y-2 text-left">
                  <div className="p-2 rounded bg-slate-900/60 border border-slate-700/60 space-y-0.5">
                    <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      <span>Sentence Transformers</span>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400">all-MiniLM-L6-v2 (384-dim embeddings)</div>
                  </div>
                  <div className="text-center text-cyan-400">
                    <ArrowDown className="w-3.5 h-3.5 mx-auto" />
                  </div>
                  <div className="p-2 rounded bg-slate-900/60 border border-slate-700/60 space-y-0.5">
                    <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      <span>ChromaDB Vector Store</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-300">
                      Collection: <span className="text-cyan-300">bis_smartassist</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      7,808 historically reported records (IS, QCOs, testing guidelines)
                    </div>
                  </div>
                </div>
                <div className="text-center text-cyan-400 pt-1">
                  <ArrowDown className="w-4 h-4 mx-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* STEP 4: CONTEXT PREPARATION */}
          <div className="w-full max-w-lg bg-slate-800/90 border border-emerald-500/40 rounded-xl p-3.5 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  Step 4 • Context Fusion &amp; Formatting
                </div>
                <div className="text-sm font-bold text-white">Context Preparation</div>
                <div className="text-xs text-slate-400">
                  Merges retrieved BIS clauses + user document chunks with source tags
                </div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Prompt Assembly
            </span>
          </div>

          <div className="flex flex-col items-center py-2 text-emerald-400">
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* STEP 5: OLLAMA & LLAMA 3.2:3B */}
          <div className="w-full max-w-lg bg-gradient-to-r from-emerald-950/60 via-slate-800 to-emerald-950/60 border border-emerald-500/60 rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    Step 5 • Local AI Inference
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">Ollama &amp; Llama 3.2:3B</div>
                  <div className="text-xs text-slate-400">Locally hosted private model generates context-grounded response</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Local LLM
              </span>
            </div>
            <div className="bg-slate-900/80 rounded-lg p-2.5 border border-slate-700/80 text-[11px] text-slate-300 text-left font-mono">
              <span className="text-emerald-400">$ ollama run llama3.2:3b</span> &rarr; Zero external API telemetry, runs 100% on local hardware
            </div>
          </div>

          <div className="flex flex-col items-center py-2 text-emerald-400">
            <span className="text-[10px] font-mono bg-slate-800/80 px-2 py-0.5 rounded text-slate-400 border border-slate-700 mb-0.5">
              Grounded Output Stream
            </span>
            <ArrowDown className="w-5 h-5" />
          </div>

          {/* STEP 6: RETURN TO REACT INTERFACE */}
          <div className="w-full max-w-lg bg-slate-800/90 border border-blue-500/60 rounded-xl p-4 flex items-center justify-between shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                  Step 6 • Output Delivery
                </div>
                <div className="text-sm sm:text-base font-bold text-white">Generated Answer &amp; Citations</div>
                <div className="text-xs text-slate-400">
                  Rendered in React chat interface with verifiable clause provenance &amp; source tags
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/40">
              Delivered
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RagArchitectureDiagram

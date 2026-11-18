import React from 'react'
import {
  BarChart2,
  Trophy,
  Scale,
  ShieldAlert,
} from 'lucide-react'
import type { ModelBenchmarkData } from '@/types/project-details.types'

interface ModelBenchmarkTableProps {
  benchmark?: ModelBenchmarkData
  projectTitle: string
}

export const ModelBenchmarkTable: React.FC<ModelBenchmarkTableProps> = ({
  benchmark,
  projectTitle,
}) => {
  if (!benchmark) return null

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80"
      id="model-benchmark"
    >
      <div className="container-custom space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#0066FF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Empirical Model Evaluation</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B132B] tracking-tight">
                {benchmark.title || 'Official Model Benchmark & Evaluation'}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed mt-2">
                Comparative diagnostics evaluating Decision Tree against the Champion Random Forest
                model across a rigorously stratified out-of-sample testing partition.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-white font-mono text-xs font-semibold shadow-sm shrink-0 self-start sm:self-auto">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>Testing Set: {benchmark.sampleSize}</span>
            </div>
          </div>
        </div>

        {/* Champion vs. Baseline Diagnostic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Champion Model Card */}
          <div className="bg-white rounded-2xl border-2 border-emerald-500/40 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-xl shadow-xs flex items-center gap-1">
              <Trophy className="w-3 h-3" />
              <span>Champion Model</span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#0B132B]">
                  {benchmark.championModel.name}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  {benchmark.championModel.params}
                </p>
              </div>

              {/* Champion Metric Chips */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-700">
                    {benchmark.championModel.macroF1}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide mt-0.5">
                    Macro F1
                  </div>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-700">
                    {benchmark.championModel.defaulterRecall}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide mt-0.5">
                    Defaulter Recall
                  </div>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-700">
                    {benchmark.championModel.balancedAccuracy}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide mt-0.5">
                    Balanced Acc
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-100 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                <span className="font-bold">★ Why it wins: </span>
                {benchmark.championModel.winningReason}
              </div>
            </div>
          </div>

          {/* Baseline Model Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-slate-100 text-slate-600 font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-xl border-b border-l border-slate-200">
              Baseline Model
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#0B132B]">
                  {benchmark.baselineModel.name}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  {benchmark.baselineModel.params}
                </p>
              </div>

              {/* Baseline Metric Chips */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-slate-700">
                    {benchmark.baselineModel.macroF1}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                    Macro F1
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-slate-700">
                    {benchmark.baselineModel.defaulterRecall}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                    Defaulter Recall
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-slate-700">
                    {benchmark.baselineModel.balancedAccuracy}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mt-0.5">
                    Balanced Acc
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/60 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <span className="font-bold text-amber-900">⚠ The Flaw: </span>
                {benchmark.baselineModel.flawDescription}
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark Comparison Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div className="font-bold text-sm sm:text-base flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#0066FF]" />
              <span>Official Model Benchmark Table (Testing Set: {benchmark.sampleSize})</span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
              {projectTitle}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-600 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Evaluation Metric</th>
                  <th className="py-3.5 px-4 sm:px-6">Decision Tree (Depth=12)</th>
                  <th className="py-3.5 px-4 sm:px-6">Random Forest (N=200, Balanced)</th>
                  <th className="py-3.5 px-4 sm:px-6">Absolute Delta</th>
                  <th className="py-3.5 px-4 sm:px-6">Impact &amp; Winner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {benchmark.rows.map((row, idx) => {
                  const isDeltaPositive = row.absoluteDelta.startsWith('+')
                  const isRandomForestWinner = row.winner.includes('Random Forest')

                  return (
                    <tr
                      key={idx}
                      className="hover:bg-blue-50/40 transition-colors duration-150"
                    >
                      {/* Metric Name */}
                      <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B132B]">
                        {row.metric}
                      </td>

                      {/* Decision Tree Value */}
                      <td className="py-4 px-4 sm:px-6 font-mono text-slate-600">
                        {row.decisionTreeValue}
                      </td>

                      {/* Random Forest Value */}
                      <td className="py-4 px-4 sm:px-6 font-mono font-bold text-[#0066FF]">
                        {row.randomForestValue}
                      </td>

                      {/* Delta */}
                      <td className="py-4 px-4 sm:px-6 font-mono">
                        <span
                          className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-semibold ${
                            isDeltaPositive
                              ? 'text-emerald-700 bg-emerald-50 border border-emerald-200/60'
                              : 'text-rose-700 bg-rose-50 border border-rose-200/60'
                          }`}
                        >
                          {row.absoluteDelta}
                        </span>
                      </td>

                      {/* Winner & Impact */}
                      <td className="py-4 px-4 sm:px-6">
                        {isRandomForestWinner ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs">
                            <Trophy className="w-3 h-3 text-emerald-700" />
                            <span>{row.winner}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                            <span>{row.impact}</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* The Accuracy Paradox Deep-Dive Callout */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-[#0B132B] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-4 border border-blue-900/60">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Underwriting Economics &amp; The Accuracy Paradox</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Why High Raw Accuracy (80.4%) Is a Dangerous Illusion in Credit Risk
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
            <div className="space-y-2">
              <p>
                In retail lending, the historical distribution is heavily imbalanced: <strong>83.3%</strong> of
                borrowers fully repay, while only <strong>13.8%</strong> default. A naive baseline model
                that classifies every applicant as &ldquo;Fully Paid&rdquo; effortlessly achieves{' '}
                <strong>83.3% raw accuracy</strong> while catching exactly <strong>zero</strong> defaults!
              </p>
              <p>
                Decision Tree scored <strong>80.39%</strong> overall accuracy, yet missed{' '}
                <strong>91%</strong> of charged-off loans (only 120 caught out of 1,333 in the test set).
              </p>
            </div>

            <div className="space-y-2">
              <p>
                Random Forest with <strong>balanced class weighting</strong> sacrifices 3.8% raw accuracy
                to deliver <strong>2.2x higher defaulter recall (20.10% / 268 caught)</strong> and a superior{' '}
                <strong>41.00% Macro F1-score</strong>.
              </p>
              <p>
                From a banking risk perspective, an undetected default (False Negative) results in
                substantial capital loss, whereas a false alarm (False Positive) merely directs the applicant
                to manual underwriter review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModelBenchmarkTable

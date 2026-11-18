import React from 'react'
import { Filter, RotateCcw, Check, Clock, Search, X } from 'lucide-react'
import type { ProjectDomain, ProjectStatus } from '@/types/project.types'

export type FilterCategory = 'all' | ProjectDomain
export type FilterStatus = 'all' | ProjectStatus

export interface FilterCounts {
  categoryCounts: Record<FilterCategory, number>
  statusCounts: Record<FilterStatus, number>
  totalCount: number
  filteredCount: number
}

interface PortfolioFilterBarProps {
  selectedCategory: FilterCategory
  selectedStatus: FilterStatus
  searchQuery: string
  onCategoryChange: (category: FilterCategory) => void
  onStatusChange: (status: FilterStatus) => void
  onSearchChange: (query: string) => void
  onResetFilters: () => void
  counts: FilterCounts
}

export const categoryOptions: { label: string; value: FilterCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web Development', value: 'Web Development' },
  { label: 'Data Science', value: 'Data Science' },
  { label: 'AI & Machine Learning', value: 'AI & Machine Learning' },
  { label: 'Data Analytics', value: 'Data Analytics' },
  { label: 'IoT & Embedded Systems', value: 'IoT & Embedded Systems' },
  { label: 'Python Development', value: 'Python Development' },
  { label: 'Deep Learning & Computer Vision', value: 'Deep Learning & Computer Vision' },
]

export const statusOptions: {
  label: string
  value: FilterStatus
  icon?: React.ReactNode
}[] = [
  { label: 'All Status', value: 'all' },
  {
    label: 'Completed',
    value: 'Completed',
    icon: <Check className="w-3.5 h-3.5 text-emerald-600" />,
  },
  {
    label: 'In Progress',
    value: 'In Progress',
    icon: <Clock className="w-3.5 h-3.5 text-amber-500" />,
  },
]

export const PortfolioFilterBar: React.FC<PortfolioFilterBarProps> = ({
  selectedCategory,
  selectedStatus,
  searchQuery,
  onCategoryChange,
  onStatusChange,
  onSearchChange,
  onResetFilters,
  counts,
}) => {
  const isFiltered =
    selectedCategory !== 'all' || selectedStatus !== 'all' || searchQuery.trim().length > 0

  return (
    <div className="space-y-4">
      {/* Search & Status Controls Row */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search input with clear */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects, technologies, or keywords..."
            className="w-full bg-white border border-slate-200/90 rounded-full pl-10 pr-9 py-2 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
            aria-label="Search portfolio projects"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Secondary: Status Filter Pills & Reset */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/80">
            {statusOptions.map((status) => {
              const isSelected = selectedStatus === status.value
              const count = counts.statusCounts[status.value] ?? 0

              return (
                <button
                  key={status.value}
                  type="button"
                  onClick={() => onStatusChange(status.value)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#0B132B] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  aria-pressed={isSelected}
                >
                  {status.icon}
                  <span>{status.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-slate-100 text-slate-700 font-bold'
                        : 'text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Reset Filters Button */}
          {isFiltered && (
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 bg-white border border-slate-200 hover:text-[#0066FF] hover:border-blue-200 transition-colors shadow-sm cursor-pointer shrink-0"
              title="Reset all active filters"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Primary: Horizontal Category Filter Pills (matching reference screenshot) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        {categoryOptions.map((cat) => {
          const isSelected = selectedCategory === cat.value
          const count = counts.categoryCounts[cat.value] ?? 0

          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => onCategoryChange(cat.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isSelected
                  ? 'bg-[#0066FF] text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/30'
                  : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300 shadow-sm'
              }`}
              aria-pressed={isSelected}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full transition-colors ${
                  isSelected
                    ? 'bg-white/20 text-white font-bold'
                    : 'bg-slate-100 text-slate-500 font-medium'
                }`}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Filter Feedback Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
        <div className="flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-[#0066FF]" />
          <span>
            Showing <strong className="text-slate-800">{counts.filteredCount}</strong> of{' '}
            {counts.totalCount} projects
          </span>
          {isFiltered && (
            <span className="text-blue-600 font-medium hidden sm:inline">
              (Filtered view)
            </span>
          )}
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={onResetFilters}
            className="text-[#0066FF] hover:underline font-medium text-xs cursor-pointer"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  )
}

export default PortfolioFilterBar


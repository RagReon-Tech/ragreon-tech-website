import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'

export interface ConsultationModalContextType {
  isOpen: boolean
  initialService?: string
  openModal: (service?: string) => void
  closeModal: () => void
}

const ConsultationModalContext = createContext<ConsultationModalContextType | undefined>(
  undefined,
)

export interface ConsultationModalProviderProps {
  children: React.ReactNode
}

export const ConsultationModalProvider: React.FC<ConsultationModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [initialService, setInitialService] = useState<string | undefined>(undefined)

  const openModal = useCallback((service?: string) => {
    setInitialService(service)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({
      isOpen,
      initialService,
      openModal,
      closeModal,
    }),
    [isOpen, initialService, openModal, closeModal],
  )

  return (
    <ConsultationModalContext.Provider value={value}>
      {children}
    </ConsultationModalContext.Provider>
  )
}

export function useConsultationModal(): ConsultationModalContextType {
  const context = useContext(ConsultationModalContext)
  if (!context) {
    throw new Error('useConsultationModal must be used within a ConsultationModalProvider')
  }
  return context
}

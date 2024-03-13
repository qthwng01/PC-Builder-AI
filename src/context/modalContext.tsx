'use client'
import { createContext, useState } from 'react'
import { ModalContextType } from '@/types/modal'

export const ModalContext = createContext<ModalContextType | null>(null)

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }

  return <ModalContext.Provider value={{ name, setName, handleOpenModal, closeModal, openModal, setOpenModal }}>{children}</ModalContext.Provider>
}

export default ModalProvider

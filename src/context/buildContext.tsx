'use client'
import { createContext, useState } from 'react'
import { BuildContextType, IBuildProps } from '@/types/build'

export const BuildContext = createContext<BuildContextType | null>(null)

const BuildProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [configuration, setConfiguration] = useState<IBuildProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  return <BuildContext.Provider value={{ configuration, setConfiguration, loading, setLoading }}>{children}</BuildContext.Provider>
}

export default BuildProvider

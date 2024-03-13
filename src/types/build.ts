export interface IBuildProps {
  configuration: any[]
}

export type BuildContextType = {
  configuration: IBuildProps[]
  setConfiguration: React.Dispatch<React.SetStateAction<any[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export type ModalContextType = {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  closeModal: () => void
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  handleOpenModal: () => void
}

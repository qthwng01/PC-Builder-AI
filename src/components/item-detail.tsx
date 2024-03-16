'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { ModalContextType } from '@/types/modal'
import { ModalContext } from '@/context/modalContext'
import CPU from '@/data/cpu.json'
import VGA from '@/data/vga.json'
import Main from '@/data/main.json'
import Ram from '@/data/ram.json'
import SSD from '@/data/ssd.json'

// interface IInfo {
//   stt: string
//   name: string
//   image: string
//   price: string
//   id: number
// }

function ItemDetail() {
  const { name, setName, closeModal, openModal } = useContext(ModalContext) as ModalContextType
  const [info, setInfo] = useState<any>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        let sku: string = name
        const splitSku = sku.split(' ')
        const firstSku = splitSku[0]
        const splitsecondSku = sku.substring(4)
        const secondSku = splitsecondSku
        switch (firstSku) {
          case 'CPU':
            const dataCPU = CPU?.find((item) => item.name.includes(secondSku))
            setInfo(dataCPU)
            break
          case 'mnb':
            const dataMain = Main?.find((item) => item.name.includes(secondSku))
            setInfo(dataMain)
            break
          case 'VGA':
            const dataVGA = VGA?.find((item) => item.name.includes(secondSku))
            setInfo(dataVGA)
            break
          case 'Ram':
            const dataRam = Ram?.find((item) => item.name.includes(secondSku))
            setInfo(dataRam)
            break
          case 'SSD':
            const dataSSD = SSD?.find((item) => item.name.includes(secondSku))
            setInfo(dataSSD)
            break
          default:
            return
        }
      } catch (e) {
        console.log('Data not found.')
      }
    }
    getData()
  }, [name, setName])

  return (
    <Modal blockScrollOnMount={false} isOpen={openModal} onClose={closeModal} size={{ base: 'md', md: 'md', lg: 'lg' }} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Thông tin</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={info?.image ? info?.image : ''} width={100} height={100} alt="image"></Image>
          <p>Tên: {info?.name ? info?.name : 'Không có thông tin'}</p>
          <p>Giá tham khảo: {info?.price ? info?.price : 'Không có thông tin'}</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ItemDetail

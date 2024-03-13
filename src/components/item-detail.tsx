'use client'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Button, useConst, filter } from '@chakra-ui/react'
import { ModalContextType } from '@/types/modal'
import { ModalContext } from '@/context/modalContext'
import csvToJson from '@/ultis/csvToJson'

function ItemDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { name, setName, handleOpenModal, closeModal, openModal, setOpenModal } = useContext(ModalContext) as ModalContextType
  const [info, setInfo] = useState<any>([])

  useEffect(() => {
    const getData = async () => {
      //const data = await csvToJson('./src/data/info.csv')
      //console.log(data)
      //   const filterData = data?.filter((item: any) => item?.cpu === name)
      //   setInfo(filterData)
    }
    getData()
  }, [name, setName])

  return (
    <Modal blockScrollOnMount={false} isOpen={openModal} onClose={closeModal} size={'md'} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Thông tin</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Đang cập nhật</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ItemDetail

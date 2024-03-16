'use client'
import React, { useState, useContext, useEffect } from 'react'
import { BuildContextType } from '@/types/build'
import { ModalContextType } from '@/types/modal'
import { BuildContext } from '@/context/buildContext'
import { ModalContext } from '@/context/modalContext'
import SkeletonListItem from './skeleton-list-item'
import NonListItem from './non-list-item'
import Image from 'next/image'
import cpu from '@/images/cpu.svg'
import gpu from '@/images/vga.svg'
import ram from '@/images/ram.svg'
import ssd from '@/images/ssd.svg'
import mb from '@/images/main.svg'

function ListItem() {
  const [item, setItem] = useState<any>([])
  const { configuration, setConfiguration, loading } = useContext(BuildContext) as BuildContextType
  const { setName, handleOpenModal } = useContext(ModalContext) as ModalContextType
  // const data: any = {
  //   result: {
  //     text: ' \n{\n  "recommendation": [\n    {\n      "CPU": "i5 12400F",\n      "Mainboard": "H610",\n      "Ram": "8GB",\n      "SSD": "250GB",\n      "VGA": "GTX 1650"\n    },\n    {\n      "CPU": "i3 12100F",\n      "Mainboard": "H610",\n      "Ram": "8GB",\n      "SSD": "256GB",\n      "VGA": "RX 6600"\n    },\n    {\n      "CPU": "i5 12400F",\n      "Mainboard": "B760",\n      "Ram": "8GB",\n      "SSD": "250GB",\n      "VGA": "RTX 3060"\n    }\n  ]\n}',
  //     index: 0,
  //     logprobs: null,
  //     finish_reason: 'stop',
  //   },
  // }
  const data: any = configuration
  useEffect(() => {
    try {
      if (data && data?.result) {
        const a = data?.result?.text
        const cleanedStringData = a.replace(/\n|\t/g, '')
        const b = JSON.parse(cleanedStringData.replace('recommendation:', ''))
        setItem(b.recommendation)
        //console.log(b?.recommendation)
      } else {
        console.log('Lỗi không có JSON từ OpenAI.')
      }
    } catch (e) {
      alert('Lỗi JSON từ OpenAI. Thử lại.')
    }
  }, [configuration, setConfiguration])

  const getName = (name: string) => {
    handleOpenModal()
    setName(name)
  }

  return (
    <div className="container list__items">
      <h2 className="list__items-title">Xây dựng PC của bạn</h2>
      {loading ? (
        <SkeletonListItem />
      ) : (
        <div className="row list__card">
          <div className="col l-12 c-12">
            {item?.length === 0 ? (
              <NonListItem />
            ) : (
              item?.length > 0 &&
              item?.map((cf: any, index: number) => (
                <React.Fragment key={index}>
                  <h3 style={{ fontSize: 16, fontWeight: 500 }}>Cấu hình {index + 1}</h3>
                  <div className="row" style={{ marginBottom: '20px', borderBottom: '1px solid', paddingBottom: '30px' }}>
                    <div className="col l-6 c-6">
                      <div className="card__item">
                        <div className="card__left">
                          <h3>CPU</h3>
                          <p>
                            {cf?.CPU} - <span onClick={() => getName('CPU' + ' ' + cf?.CPU)}>Chi tiết</span>
                          </p>
                        </div>
                        <div className="card__right">
                          <Image src={cpu} width={30} height={30} alt="cpu" />
                        </div>
                      </div>
                    </div>
                    <div className="col l-6 c-6">
                      <div className="card__item">
                        <div className="card__left">
                          <h3>VGA</h3>
                          <p>
                            {cf?.VGA} - <span onClick={() => getName('VGA' + ' ' + cf?.VGA)}>Chi tiết</span>
                          </p>
                        </div>
                        <div className="card__right">
                          <Image src={gpu} width={30} height={30} alt="gpu" />
                        </div>
                      </div>
                    </div>
                    <div className="col l-6 c-6">
                      <div className="card__item">
                        <div className="card__left">
                          <h3>Ram</h3>
                          <p>
                            {cf?.Ram} - <span onClick={() => getName('Ram' + ' ' + cf?.Ram)}>Chi tiết</span>
                          </p>
                        </div>
                        <div className="card__right">
                          <Image src={ram} width={30} height={30} alt="ram" />
                        </div>
                      </div>
                    </div>
                    <div className="col l-6 c-6">
                      <div className="card__item">
                        <div className="card__left">
                          <h3>SSD</h3>
                          <p>
                            {cf?.SSD} - <span onClick={() => getName('SSD' + ' ' + cf?.SSD)}>Chi tiết</span>
                          </p>
                        </div>
                        <div className="card__right">
                          <Image src={ssd} width={30} height={30} alt="ssd" />
                        </div>
                      </div>
                    </div>
                    <div className="col l-6 c-6">
                      <div className="card__item">
                        <div className="card__left">
                          <h3>Mainboard</h3>
                          <p>
                            {cf?.Mainboard} - <span onClick={() => getName('mnb' + ' ' + cf?.Mainboard)}>Chi tiết</span>
                          </p>
                        </div>
                        <div className="card__right">
                          <Image src={mb} width={30} height={30} alt="mb" />
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ListItem

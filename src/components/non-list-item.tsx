'use client'
import Image from 'next/image'
import cpu from '@/images/cpu.svg'
import gpu from '@/images/vga.svg'
import ram from '@/images/ram.svg'
import ssd from '@/images/ssd.svg'
import mb from '@/images/main.svg'

function NonListItem() {
  return (
    <div className="container list__items non">
      <div className="row list__card">
        <div className="col l-12 c-12">
          <div className="row">
            <div className="col l-6 c-6">
              <div className="card__item">
                <div className="card__left">
                  <p>CPU</p>
                  <span>Generate now</span>
                </div>
                <div className="card__right">
                  <Image src={cpu} width={30} height={30} alt="cpu" />
                </div>
              </div>
            </div>
            <div className="col l-6 c-6">
              <div className="card__item">
                <div className="card__left">
                  <p>GPU</p>
                  <span>Generate now</span>
                </div>
                <div className="card__right">
                  <Image src={gpu} width={30} height={30} alt="gpu" />
                </div>
              </div>
            </div>
            <div className="col l-6 c-6">
              <div className="card__item">
                <div className="card__left">
                  <p>Ram</p>
                  <span>Generate now</span>
                </div>
                <div className="card__right">
                  <Image src={ram} width={30} height={30} alt="ram" />
                </div>
              </div>
            </div>
            <div className="col l-6 c-6">
              <div className="card__item">
                <div className="card__left">
                  <p>SSD</p>
                  <span>Generate now</span>
                </div>
                <div className="card__right">
                  <Image src={ssd} width={30} height={30} alt="ssd" />
                </div>
              </div>
            </div>
            <div className="col l-6 c-6">
              <div className="card__item">
                <div className="card__left">
                  <p>Mainboard</p>
                  <span>Generate now</span>
                </div>
                <div className="card__right">
                  <Image src={mb} width={30} height={30} alt="mb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NonListItem

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/images/logo.png'
import magic from '@/images/magic.png'

function Header() {
  return (
    <header className="header">
      <div className="container header__inside">
        <nav className="navbar">
          <Link href={''}>
            <Image src={logo} width={50} height={50} alt="logo"></Image>
          </Link>
          <ul className="navbar__lists">
            <li className="navbar__item">
              <Link href={''}>Home</Link>
            </li>
            <li className="navbar__item">
              <Link href={''}>
                <span className='sp__navbar'>
                  <Image src={magic} alt="magic" width={16} height={16}/>Build PC with AI
                </span>
              </Link>
            </li>
          </ul>
          <div className="hire__me">
            <Link href='https://pf-hqthang.vercel.app/' target='_blank'>
              <span>Hire me</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

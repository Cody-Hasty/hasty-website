"use client"
import _ from 'lodash'
import Image from 'next/image'
import brandImg from '@public/images/brand.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { usePathname } from 'next/navigation'
import { Delius_Swash_Caps } from 'next/font/google'

const font = Delius_Swash_Caps({ subsets: ["latin"], weight: "400" })

export default function NavbarComponent() {
  const currentPath = usePathname()
  // Pages in development to be added to the navbar later
  // 'about', 'projects', 'design'
  const pages = ['experience', 'blog', 'contact']
  const activePathClass = (page: string) => currentPath.split('/')[1] === page ? "active" : ""
  const pathToPage = (page: string) => `/${page}`

  return (
    <Navbar id='top' collapseOnSelect expand="md" bg="light" className='my-2.5 font-bold mx-auto pe-2 rounded-5 w-full max-w-screen-lg grow-0 inline-flex items-center z-10'>
      <Container fluid>
        <Navbar.Brand href="/" className='inline-flex items-center'>
          <Image src={brandImg} alt="small logo" loading='eager' width={40} height={40} priority={true} />
          <span className={`${font.className} ml-2.5 text-xl`}>Hasty Creations</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className={activePathClass("")}>Home</Nav.Link>
            {pages.map(page => (
              <Nav.Link
                key={page}
                href={pathToPage(page)}
                className={activePathClass(page)}
              >
                {_.capitalize(page)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

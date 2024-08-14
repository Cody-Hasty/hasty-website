"use client"
import _ from 'lodash'
import Image from 'next/image'
import brandImg from '@images/brand.png'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { usePathname } from 'next/navigation'
import { Delius_Swash_Caps } from 'next/font/google'
import { NavDropdown } from 'react-bootstrap'

const font = Delius_Swash_Caps({ subsets: ["latin"], weight: "400" })

export default function NavbarComponent() {
  // Sections can be nested to create dropdowns, where the first element is the dropdown title
  const sections = [
    ['about','about/experience','about/projects'],
    'blog',
    'contact',
  ]
  const currentPath = usePathname()
  const activePathClass = (page: string) => currentPath === `/${page}` ? "active" : ""

  function navbarLink(page: string) {
    return (
      <Nav.Link
        key={page}
        href={`/${page}`}
        className={activePathClass(page)}
      >
        {_.capitalize(page)}
      </Nav.Link>
    )
  }

  function navbarDropdown(sections: string[]) {
    if (sections.length === 0) return null
    const sectionName = sections.shift() as string
    return (
      <NavDropdown title={_.capitalize(sectionName)} key={sectionName} id={sectionName}>
        {sections.map(subpage => (
          <NavDropdown.Item key={subpage} href={`/${subpage}`} className={`${activePathClass(subpage)} hover:!bg-light-gray focus:text-inherit`}>
            {_.capitalize(_.last(subpage.split('/')))}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    )
  }

  function displayNavbarSection(section: string | string[]) {
    return Array.isArray(section) ? navbarDropdown(section) : navbarLink(section)
  }

  return (
    <Navbar id='top' collapseOnSelect expand="md" bg="light" className='my-2.5 font-bold mx-auto pe-2 rounded-5 w-full max-w-screen-lg grow-0 inline-flex items-center'>
      <Container fluid>
        <Navbar.Brand href="/" className='inline-flex items-center'>
          <Image src={brandImg} alt="small logo" loading='eager' width={40} height={40} priority={true} />
          <span className={`${font.className} ml-2.5 text-xl`}>Hasty Creations</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className={activePathClass("")}>Home</Nav.Link>
            {sections.map(section => displayNavbarSection(section))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

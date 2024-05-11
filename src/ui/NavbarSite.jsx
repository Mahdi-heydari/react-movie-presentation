import { Button, Navbar } from 'flowbite-react'

export default function NavbarSite() {
  return (
    <Navbar fluid rounded className='mb-20 max-md:mb-10'>
      <Navbar.Brand href="/">
        <img src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl max-md:text-lg max-[360px]:text-base font-semibold dark:text-white">Rick and morty all characters</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='max-md:hidden'>Get started</Button>
        <Navbar.Toggle className='max-md:mr-3'/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

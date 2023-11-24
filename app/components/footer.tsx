import Image from 'next/image'
import background from '@public/images/background.svg'

export default function FooterComponent() {
  return (
    <div id="footer" className='bottom-0 mt-5 grow-0'>
      <Image src={background} alt="SF Sunset Background" loading='eager' className='w-screen' />
    </div>
  )
}
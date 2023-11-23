import Image from 'next/image'
import tlLogo from '@public/images/homepage/Instrumentl-Logo.png'
import pandoraLogo from '@public/images/homepage/Pandora-Logo.png'
import volleyLogo from '@public/images/homepage/Volley-Logo.png'
import mymicLogo from '@public/images/homepage/MYMIC-Logo.png'
import oduLogo from '@public/images/homepage/ODU-Logo.png'

export default function CompanyLogos() {
  return (
    <>
      <h5 className='mt-4 w-full flex flex-row text-2xl'>Where I&apos;ve been</h5>
      <div id='companyLogos' className='flex flex-row gap-8 items-center max-w-full'>
        <div className='w-full'><Image src={tlLogo} alt="Instrumentl Logo" /></div>
        <div className='w-full'><Image src={pandoraLogo} alt="Pandora Logo" /></div>
        <div className='w-full'><Image src={volleyLogo} alt="Volley Logo" /></div>
        <div className='w-full'><Image src={mymicLogo} alt="MYMIC Logo" /></div>
        <div className='w-full'><Image src={oduLogo} alt="ODU Logo" /></div>
      </div>
    </>
  )
}

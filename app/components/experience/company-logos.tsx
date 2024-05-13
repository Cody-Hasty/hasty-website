import Image from 'next/image'
import tlLogo from '@public/images/experience/Instrumentl-Logo.png'
import pandoraLogo from '@public/images/experience/Pandora-Logo.png'
import volleyLogo from '@public/images/experience/Volley-Logo.png'
import mymicLogo from '@public/images/experience/MYMIC-Logo.png'
import oduLogo from '@public/images/experience/ODU-Logo.png'

export default function CompanyLogos() {
  return (
    <div className='mt-4 w-full'>
      <div id='companyLogos' className='flex flex-row gap-8 items-center max-w-full'>
        <div className='w-full'><Image src={tlLogo} alt="Instrumentl Logo" /></div>
        <div className='w-full'><Image src={pandoraLogo} alt="Pandora Logo" /></div>
        <div className='w-full'><Image src={volleyLogo} alt="Volley Logo" /></div>
        <div className='w-full'><Image src={mymicLogo} alt="MYMIC Logo" /></div>
        <div className='w-full'><Image src={oduLogo} alt="ODU Logo" /></div>
      </div>
    </div>
  )
}

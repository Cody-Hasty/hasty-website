import Image from 'next/image'
import tlLogo from '@images/experience/Instrumentl-Logo.png'
import pandoraLogo from '@images/experience/Pandora-Logo.png'
import volleyLogo from '@images/experience/Volley-Logo.png'
import mymicLogo from '@images/experience/MYMIC-Logo.png'
import oduLogo from '@images/experience/ODU-Logo.png'

export default function CompanyLogos() {
  return (
    <div className='mt-4 w-full mb-4'>
      <div id='companyLogos' className='flex flex-row flex-wrap gap-4 items-center justify-around max-w-full'>
        <div className='max-w-[174px]'><Image src={tlLogo} alt="Instrumentl Logo" /></div>
        <div className='max-w-[174px]'><Image src={pandoraLogo} alt="Pandora Logo" /></div>
        <div className='max-w-[174px]'><Image src={volleyLogo} alt="Volley Logo" /></div>
        <div className='max-w-[174px]'><Image src={mymicLogo} alt="MYMIC Logo" /></div>
        <div className='max-w-[174px]'><Image src={oduLogo} alt="ODU Logo" /></div>
      </div>
    </div>
  )
}

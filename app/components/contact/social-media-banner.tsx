import { FaGithubSquare, FaLinkedin, FaArrowRight } from "react-icons/fa"

export default function SocialMediaBannerComponent() {
  const socialLinks = {
    github: 'https://github.com/Cody-Hasty',
    linkedin: 'https://www.linkedin.com/in/codyhasty/'
  }

  return (
    <div className='flex flex-row gap-2 justify-end items-center'>
      <p className='m-0 flex flex-row gap-2 text-center items-center animate-pulse'>
        Check out my social media
        <FaArrowRight size={20} color="black" />
      </p>
      <a href={socialLinks.github} aria-label="Github link" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare size={40} color="black" />
      </a>
      <a href={socialLinks.linkedin} aria-label="LinkedIn link" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} color="black" />
      </a>
    </div>
  )
}

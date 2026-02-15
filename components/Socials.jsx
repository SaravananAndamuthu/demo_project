import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaTwitter, FaLifeRing, FaLinkedin} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/saravananandamuthu/'},
    {icon: <FaWhatsapp />, path: ''},
    // {icon: <FaTwitter />, path: 'https://x.com/shravanantoone'}
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials
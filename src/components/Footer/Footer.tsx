import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'
import hackerrank from '../../assets/HackerRank.png'
import leetcode from '../../assets/leetcode.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="mailto: jebincocjebnjebin232@gmail.com" className="logo">
        <span>jebincocjebn</span>
        <span>jebin232.com</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
      <a
        href="https://www.linkedin.com/in/jebin-m-1242b7220/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/jebin232"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B918610452001&text=Hello+Jebin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://www.hackerrank.com/profile/Jebin_"
          target="_blank"
          rel="noreferrer"
        >
          <img src={hackerrank} alt="HackerRank" />
        </a>
        <a
          href="https://leetcode.com/u/jebincocjebnjebin232/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={leetcode} alt="Leetcode" />
        </a>
      </div>
    </Container>
  )
}

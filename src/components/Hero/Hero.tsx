import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/top.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import hackerrank from '../../assets/HackerRank.png'
import leetcode from '../../assets/leetcode.png'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Jebin M</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full-Stack Developer with Expertise in Artificial Intelligence</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">3 Years of  Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
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
        </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
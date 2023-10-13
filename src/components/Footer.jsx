import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return <footer className='footer'>
    <div className='header'>
        <h1>Football</h1>
        <p>@all fans are allowed</p>
    </div>
    <div>
        <h5>Follow Us</h5>
        <div className='links'>
            <a href="https://www.youtube.com/results?search_query=fifapage" target={"blank"}>Youtube</a>
            <a href="https://www.instagram.com/fifaworldcup/?hl=en" target={"blank"}>Instagram</a>
            <a href="https://www.google.com/search?q=fifa+&sca_esv=559711199&sxsrf=AB5stBgnpAbBiQwq9OBXO6kzwdY8yMfzoA%3A1692885003258&ei=C2DnZJmaD7OgseMP5oOwqAI&ved=0ahUKEwjZy46KuPWAAxUzUGwGHeYBDCUQ4dUDCBA&uact=5&oq=fifa+&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWZpZmEgMgcQIxiKBRgnMgcQLhiKBRgnMgQQIxgnMgoQABiKBRixAxhDMgcQABiKBRhDMgoQABiKBRixAxhDMgcQABiKBRhDMgcQABiKBRhDMgcQABiKBRhDMgcQABiKBRhDSIw7UOQGWL0fcAR4AZABAJgB4QGgAbIFqgEFMC4zLjG4AQPIAQD4AQHCAgcQIxiwAxgnwgIHEC4YsAMYJ8ICChAAGEcY1gQYsAPCAgsQABiABBixAxiDAcICDRAuGIoFGLEDGIMBGEPCAggQABiABBixA8ICDRAAGIoFGLEDGIMBGEPCAgQQABgDwgIFEAAYgATiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp" target={"blank"}>Google</a>
        </div>
    </div>
  </footer>
}
export default Footer

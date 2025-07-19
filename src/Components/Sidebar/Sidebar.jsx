import React, { useEffect, useRef } from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import './sidebar.css'

const Sidebar = () => {
  const sidebarRef = useRef(null)

  useEffect(() => {
    const el = sidebarRef.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('animate', 'slide-left')
        }
      })
    }, { threshold: 0.4 })

    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sidebarRef} className="myAbout">
      <div className="My_title">
        <div className="Myimgs">
          <img src="/src/assets/myImg.jpg" alt="Isomiddin" />
        </div>

        <div className="myTitle">
          <h2>Isomiddin X.</h2>
          <div className="btn_box">
            <button className="mytitle_btn">Veb dasturchi</button>
            <button className="mytitle_btn">Odam</button>
            <button className="mytitle_btn">Junior</button>
          </div>
        </div>

        <div className="mySocialmedia">
          <div className="gmail">
            <div className="gitgub_icon"><FaGithub /></div>
            <div className="social_block">
              <h3>Github</h3>
              <a href="https://github.com/isomiddinking" className='social' target='blank'>Isomiddinking</a>
            </div>
          </div>

          <div className="gmail">
            <div className="telegram_icon"><FaTelegramPlane /></div>
            <div className="social_block">
              <h3>Telegram</h3>
              <a href="https://t.me/Xakimdjanov8" target="_blank" className="social">Telegram</a>
            </div>
          </div>

          <div className="gmail">
            <div className="phone_icon"><FaPhone /></div>
            <div className="social_block">
              <h3>Telefon</h3>
              <p className="social">+998 (50) 570-19-20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

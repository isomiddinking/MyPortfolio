import React, { useEffect, useState } from 'react';
import './media_sidebar.css';
import { FaPhone } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import myImg from '../../../assets/myImg.jpg'

const Media_sidebar = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

const [showEmail, setShowEmail] = useState(false);

function handleClick() {
  setShowEmail(true);
  setTimeout(() => {
    setShowEmail(false);
  }, 5000); // 3 soniyadan keyin yo'qoladi
}

  return (
    <div className='sidebar_page' data-aos="fade-up">
        {showEmail && (
      <div className="text_sidebar_res">
        <h2>Isomiddinxakimdjanov@gmail.com</h2>
      </div>
    )}


      <div className="mysidebar">
        <div className="img_box_sidebar" data-aos="zoom-in">
          <img src={myImg} alt="My profile" />
        </div>

        <div className="title_box" data-aos="fade-down">
          <h2>Isomiddin Xakimdjanov</h2>
          <div className="btn_box1" data-aos="fade-up">
            <button className="mytitle_btn1">Veb dasturchi</button>
            <button className="mytitle_btn1">Odam</button>
            <button className="mytitle_btn1">Junior</button>
          </div>
        </div>

        <div className="mySocialmedia2" data-aos="fade-up">
          <div className="gmail2">
            <div className="gmail_icon"><BiLogoGmail /></div>
            <div className="social_block1">
              <h3>Gmail</h3>
              <a href="#" onClick={handleClick} className='social'>
                Isomiddin
              </a>
            </div>
          </div>

          <div className="gmail2">
            <div className="gitgub_icon1"><FaGithub /></div>
            <div className="social_block1">
              <h3>Github</h3>
              <a href="https://github.com/isomiddinking" className='social' target='_blank' rel="noreferrer">
                Isomiddinking
              </a>
            </div>
          </div>

          <div className="gmail2">
            <div className="telegram_icon1"><FaTelegramPlane /></div>
            <div className="social_block1">
              <h3>Telegram</h3>
              <a href="https://t.me/Xakimdjanov8" className="social" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>

          <div className="gmail2">
            <div className="phone_icon1"><FaPhone /></div>
            <div className="social_block1">
              <h3>Telefon</h3>
              <p className="social">+998 (50) 570-19-20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media_sidebar;

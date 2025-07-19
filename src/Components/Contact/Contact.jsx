import React, { useEffect, useRef } from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Environment variables'dan kalitlarni olish
    

    // Tekshirish: Agar biron bir kalit topilmasa, xato berish
    if (!serviceId || !templateId || !publicKey) {
      alert("Xatolik: EmailJS kalitlari to'g'ri sozlanmagan. Iltimos, .env faylini tekshiring.");
      console.error("EmailJS API kalitlari topilmadi. .env faylini tekshiring.");
      return; // Funktsiyani to'xtatamiz
    }

    emailjs.sendForm(
       'isomiddin._.8',   // O'zingizning service_id
        'template_q0bxj8e',   // O'zingizning template_id
      form.current,
      'NEqw-byGGU0rQajiu'      // O'zingizning public key
    ).then((result) => {
      alert("Xabar muvaffaqiyatli yuborildi!");
      form.current.reset(); // Formani tozala
    }, (error) => {
      alert("Xatolik yuz berdi: " + error.text);
      console.error("Email yuborishda xato:", error.text);
    });
  };

  return (
    <div className='contact'>
      <div className="contsct_page">
        <div className="h5" data-aos="fade-down">Bog’lanish</div>
        <div className="active" data-aos="zoom-in" data-aos-delay="150"></div>

        <div className="contact_grid">
          <div className="cards" data-aos="fade-up" data-aos-delay="0">
            <div className="instagram"><span><FaInstagram /></span></div>
            <div className="blocks">
              <h3>Instagram</h3>
              <a href="https://www.instagram.com/xakimdjanov.7" target='_blank' rel="noopener noreferrer">Instagram.com</a>
            </div>
          </div>

          <div className="cards" data-aos="fade-up" data-aos-delay="200">
            <div className="telegram"><span><FaTelegramPlane /></span></div>
            <div className="blocks">
              <h3>Telegram</h3>
              <a href="https://t.me/xakimdjanov7" target='_blank' rel="noopener noreferrer">Telegram</a>
            </div>
          </div>

          <div className="cards" data-aos="fade-up" data-aos-delay="400">
            <div className="phone"><span><FaPhone /></span></div>
            <div className="blocks">
              <h3>Telefon raqam</h3>
              <a href="tel:+998505701920">+998 (50) 570-19-20</a> {/* Telefon raqamiga to'g'ri link qo'shdim */}
            </div>
          </div>
        </div>

        <h2 className="h5">So’rov yuborish</h2>
        <div className="form_line" data-aos="zoom-in" data-aos-delay="700"></div>

        <div className="form_section" data-aos="fade-up" data-aos-delay="600">
          <form ref={form} onSubmit={sendEmail} className="form_box">
            <div className="input_group">
              <div className="form_input" data-aos="fade-up" data-aos-delay="800">
                <label htmlFor="name">Ismingiz*</label>
                <input type="text" id="name" name="user_name" placeholder="Falonchiyev Falonchi" required />
              </div>
              <div className="form_input" data-aos="fade-up" data-aos-delay="900">
                <label htmlFor="email">Manzilingiz*</label>
                <div className="email_wrapper">
                  <input type="email" id="email" name="user_email" placeholder="misol@gmail.com" required />
                  {/* Bu select asosan EmailJS template'da ishlatiladigan maydonlar bilan bog'liq bo'lsa kerak.
                      Agar EmailJS template'ingizda 'email_type' degan maydon bo'lmasa, bu qismni o'chirishingiz mumkin. */}
                  <select className="email_type" name="email_type">
                    <option value="Gmail">Gmail</option>
                    <option value="Telegram">Telegram</option>
                    <option value="Telefon">Telefon</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form_textarea" data-aos="fade-up" data-aos-delay="1000">
              <label htmlFor="message">Izohingiz*</label>
              <textarea id="message" name="message" placeholder="O’z izohingizni yozing..." required></textarea>
            </div>

            <button type="submit" className="form_btn" data-aos="zoom-in" data-aos-delay="1100">
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
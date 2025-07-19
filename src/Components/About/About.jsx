import React, { useEffect, useState } from 'react'
import './about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { FaHtml5, FaCss3Alt, FaJs, FaGlobe, FaCode, FaRegClock } from "react-icons/fa"
import { IoDiamond } from "react-icons/io5"

const About = () => {
  const [toast, setToast] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  function handleClick() {
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <div className='about_cont'>
      {toast && (
        <div className="toast">
          Telefon raqam: +998 50 570 1920
        </div>
      )}

      <div className="title" data-aos="fade-up">
        <h2 className='h2'>Men haqimda</h2>
        <div className="activ"></div>
        <p>
          Men Xakimdjanov Isomiddin veb dasturchisiman. Yoshim 15 da, Namangan shaxar yangi Namangan tumanida tug'ilganman. Qiziqarli, ko’p funksionallika ega bo’lgan va kuchli dizaynga ega bo’lgan dasturlar yaratishga qiziqaman.
        </p><br />
        <p>
          Mening vazifam veb saytni foydalanuvchilarga qulay, sayt dizayni foydalanuvchilarga jalb qiluvchi lekin ayni paytda tezkor bo'lishini taminlashdir va saytni moslashuvchan kodlar bilan yaratishdir!  Mening maqsadim veb sayt foydalanuvchilariga barcha qismlarini intuitiv va qulay bo'lishga harakat qilishga qaratilgan. Agar sizga men yaratgan loyihalarim qiziq bo’lsa Loyihalar sahifasiga tashrif buyurishingiz mumkin
        </p>
        <button onClick={handleClick} className='boglanish'>Bog'lanish</button>
      </div>

      <div className="texnologiyalar" data-aos="fade-up">
        <h2 className='h2'>Texnologiyalar</h2>
        <div className="activ"></div>
        <div className="grid">
          <div className="html" data-aos="zoom-in"><span className="html1"><FaHtml5 /></span></div>
          <div className="html" data-aos="zoom-in" data-aos-delay="100"><span className="css"><FaCss3Alt /></span></div>
          <div className="html" data-aos="zoom-in" data-aos-delay="200"><span className="js"><FaJs /></span></div>
        </div>
      </div>

      <div className="menqilaolaman" data-aos="fade-up">
        <h2 className='h2'>Men nimalar qila olaman</h2>
        <div className="activ"></div>
        <div className="menqilaolaman2">
          {[
            { icon: <FaGlobe />, title: "SEO", desc: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash", bg: "icon1", delay: 0 },
            { icon: <FaCode />, title: "Code", desc: "Kuchli dizayn va kichik detallargacha e’tibor berish ", bg: "icon2", delay: 100 },
            { icon: <IoDiamond />, title: "Sifat", desc: "Yuqori darajada saytlarni sifatli ishlab chiqish", bg: "icon3", delay: 200 },
            { icon: <FaRegClock />, title: "Tezkorlik", desc: "Qisqa muddat ichida tezkor sayt ishlab chiqish", bg: "icon4", delay: 300 },
          ].map((item, i) => (
            <div
              className="card"
              key={i}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className={`icon ${item.bg}`}>
                <span>{item.icon}</span>
              </div>
              <div className="text_card">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mijozlar" data-aos="fade-up">
        <h2 className='h2'>Mijozlar</h2>
        <div className="activ"></div>
        <p>Hozircha bo'sh</p>
      </div>
    </div>
  )
}

export default About

import React, { useEffect } from 'react'
import './head.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Head = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const scrollToProjects = () => {
    const projectSection = document.getElementById('projects')
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='head_cont'>
      <div className="head" data-aos="fade-down">
        <h2>Assalomu alaykum, Men <br />
          <span className="gren">Xakimdjanov Isomiddin</span> man
        </h2>
        <p>
          Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan ishchi. Veb- <br />
          saytlar va veb-ilovalarni yaratish va boshqarish orqali umumiy <br />
          mahsulot muvaffaqiyatiga erishish maqsadimdir.
        </p>
        <button className="btn" onClick={scrollToProjects}>Loyihalar</button>
      </div>
    </div>
  )
}

export default Head

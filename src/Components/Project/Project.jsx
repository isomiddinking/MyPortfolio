import React, { useEffect } from 'react';
import './project.css';
import { FaLink } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='Project_section' id='project'>
      <div className="h5" data-aos="fade-down">Loyihalar</div>
      <div className="active" data-aos="fade-down"></div>
      <div className="grids" data-aos="fade-down">

      <div className="projects" data-aos="fade-up">
        <div className="product_img">
          <img src="/src/assets/asaxiy.png" alt="asaxiy-uz" />
          <a
            href="https://asaxiy-uz-main-original-og01x0d2p-isomiddins-projects-3558bf11.vercel.app/"
            className='asaxiy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
        <h2 className="project_title">Online Market</h2>
        <div className="grean">
          <span>#reactjs</span>
          <span>#vite</span>
          <span>#tailwindcss</span>
          <span>#toastify</span>
        </div>
      </div>

         <div className="projects" data-aos="fade-up">
        <div className="product_img">
          <img src="/src/assets/vcCodexClonr.png" alt="asaxiy-uz" />
          <a
            href="https://vc-code-clon.vercel.app/"
            className='asaxiy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
        <h2 className="project_title">Vc Code Clone</h2>
        <div className="grean">
          <span>#reactjs</span>
          <span>#vite</span>
          <span>#tailwindcss</span>
          <span>#toastify</span>
        </div>
      </div>

        <div className="projects top  " data-aos="fade-up">
        <div className="product_img">
          <img src="/src/assets/car.png" alt="asaxiy-uz" />
          <a
            href="https://car-rental-landing-page-udyj.vercel.app/"
            className='asaxiy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
        <h2 className="project_title">Car Rental Landing page</h2>
        <div className="grean">
          <span>#reactjs</span>
          <span>#vite</span>
          <span>#tailwindcss</span>
          <span>#toastify</span>
        </div>
      </div>

  <div className="projects top  " data-aos="fade-up">
        <div className="product_img">
          <img src="/src/assets/orbita.png" alt="asaxiy-uz" />
          <a
            href="https://quyosh-orbita-animation.vercel.app/"
            className='asaxiy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLink />
          </a>
        </div>
        <h2 className="project_title">Orbita maket</h2>
        <div className="grean">
          <span>#reactjs</span>
          <span>#vite</span>
          <span>#tailwindcss</span>
          <span>#toastify</span>
        </div>
      </div>


      </div>
    </div>
  );
};

export default Project;

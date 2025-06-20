import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BacktoTop from './BacktoTop';

const Home = () => {
  const location = useLocation();
  const formRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.title = "Home  | Yashika Counsulting Services";
  }, []);

  useEffect(() => {
    if (location.state?.scrollToForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div id="Home">
        <div id="i1">
          <div id="i2" />
        </div>
        <div id="h1">
          <p id="h2">WELCOME TO <br />TECHNICAL TRAINING</p>
          <p id="h3">A Personalized Approach to Learning</p>
          <p id="h4">
            We specialize in delivering top-notch IT and soft skills training through personalized sessions and open batches. 
            Our programs cater to learners of all levels, creating a flexible, convenient, and high-quality learning experience.
          </p>
          <button id="b1" onClick={() => document.getElementById("form").scrollIntoView({ behavior: "smooth" })}>
            Get In Touch
          </button>
        </div>
      </div>

      <div id="Home1">
        <p id="h5" style={{ color: "white" }}>ABOUT US</p>
        <p id="h4">
          With 2 decades in IT, we've seen tech evolve drastically. We're now committed to helping others thrive in this space 
          through tailored training programs. Let's reduce turnover and empower your growth journey.
        </p>
        <button id="b1" onClick={() => document.getElementById("form").scrollIntoView({ behavior: "smooth" })}>
          Get In Touch
        </button>
      </div>

      <div>
        <div id="i1">
          <div id="i4" />
        </div>
      </div>

      <div id="Home2">
        <p id="h5" style={{ color: "white" }}>OUR APPROACH</p>
        <p id="h6">
          We analyze your needs, deliver reports with plans, timelines, and offer quality products and services 
          to drive success and growth.
        </p>
      </div>

      <div id="Home3">
        <div id="i3">
          <img
            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
            alt=""
            id="i3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
        <div id="h7" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <p id="h3">CORPORATE TRAININGS</p>
          <p id="h8">
            Hands-on curriculum built with industry needs in mind. We design programs with employers 
            to ensure employees gain valuable, applicable skills.
          </p>
        </div>
      </div>

      <div id="Home3">
        <div id="h7" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <p id="h3">BOOTCAMP</p>
          <p id="h8">
            Intensive, practical training sessions guided by mentors to develop skills for real-world scenarios.
          </p>
        </div>
        <div id="i3" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <img
            src="https://images.pexels.com/photos/7862517/pexels-photo-7862517.jpeg"
            alt=""
            id="i3"
          />
        </div>
      </div>

      <div id="Home3">
        <div id="i3">
          <img
            src="https://images.pexels.com/photos/8424525/pexels-photo-8424525.jpeg"
            alt=""
            id="i3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
        <div id="h7" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <p id="h3">BACK TO CORPORATE LIFE</p>
          <p id="h8">
            Designed for women re-entering IT after a break. We help you get updated and prepared for today’s job market.
          </p>
        </div>
      </div>

      <div id="Home3">
        <div id="h7" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <p id="h3">Campus to Corporate</p>
          <p id="h8">
            Mentorship programs for engineering, BCA, and MCA students, preparing them for placements and IT industry demands.
          </p>
        </div>
        <div id="i3" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <img
            src="https://images.pexels.com/photos/7972525/pexels-photo-7972525.jpeg"
            alt=""
            id="i3"
          />
        </div>
      </div>

      <div id="form" ref={formRef}>
        <div className="contact-container">
          <h2 className="contact-heading">CONTACT US</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Address" />
            </div>
            <input type="text" placeholder="Subject" className="full-width" />
            <textarea placeholder="Type your message here..." rows="4" className="full-width"></textarea>
            <hr />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        <BacktoTop />
      </div>
    </>
  );
};

export default Home;

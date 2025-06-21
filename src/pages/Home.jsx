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
    document.title = "Home | Yashika Counsulting Services";
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
           We are specialize in delivering top-notch IT and soft skills training to learners through both personalized sessions and open batches. Our priority lies in maintaining high-quality standards. Our training programs cater to individuals of all proficiency levels, be it beginners or seasoned experts. We foster a supportive learning environment that enables our community to study at their own convenience and from anywhere in the world, ensuring a comfortable and flexible learning experience.
          </p>
          <button id="b1" onClick={() => document.getElementById("form").scrollIntoView({ behavior: "smooth" })}>
            Get In Touch
          </button>
        </div>
      </div>

      <div id="Home1">
        <p id="h5" style={{ color: "white" }}>ABOUT US</p>
        <p id="h4">
         With 2 decades of experience in the IT industry, we've witnessed significant technological disruptions in the past decades. Recognizing the growing demand for skilled professionals in cutting-edge technologies, we have chosen to redefine our path. Now, our passion lies in assisting others to thrive in this evolving landscape. Our ramp-up process is thoughtfully designed to empower your team and equip them with the necessary tools for success. We are eager to discuss with you how we can support your growth, reduce turnover, and set you on a path to sustainable success and profitability. Our unique and innovative approach offers users the chance to broaden their horizons and acquire new skills, all from the convenience of their own homes.
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
          We provide an all-encompassing consultation service aimed at identifying areas for improvement and potential opportunities. This includes a detailed report with a project plan outlining timelines, milestones, cost analysis, and a schedule. Additionally, we offer a range of high-quality products to expedite and streamline your journey towards success. Our commitment lies in ensuring your achievements through these comprehensive services and top-notch products.

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
            Our hands-on curriculum, created by experienced IT professionals, encompasses a wide range of skills. We collaborate closely with employers to identify skill gaps that align with their specific business IT requirements. Through this collaborative effort, we design tailored training programs that benefit both employers and employees. Employers benefit by bridging the skill gaps within their workforce, while employees gain valuable knowledge and expertise, enabling them to advance both professionally and personally.

          </p>
        </div>
      </div>

      <div id="Home3">
        <div id="h7" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <p id="h3">BOOTCAMP</p>
          <p id="h8">
            Bootcamps are personalized and intensive training sessions explicitly created to equip students with the practical skills needed for real-world development scenarios. These short-term programs are focused on not just theoretical learning but also immediate application of logic, guided by our experienced mentors.

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
           This program is specifically designed for women who have taken a break from the corporate world and now wish to reenter the IT industry. We assist them in getting up-to-date with the latest technologies, preparing them to confidently rejoin the IT workforce.

          </p>
        </div>
      </div>

      <div id="Home3">
        <div id="h7" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <p id="h3">Campus to Corporate</p>
          <p id="h8">
           The mentorship program is aimed at supporting engineering, BCA, and MCA students in preparing for job placements and meeting the demands of the IT industry.
           
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

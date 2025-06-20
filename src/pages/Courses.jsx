import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BacktoTop from './BacktoTop';
const Courses=()=>{
  useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);
    useEffect(() => {
    document.title = "Courses | Yashika Counsulting Services";
  }, []);
    return(
        <>
       <div id="i1">
          <div id="i4" />
        </div>

       <div class="course-grid"  >
  <div class="course" data-aos="fade-up"
     data-aos-duration="3000">
    <h3>CORE JAVA</h3>
    <p>
       The Java Learning Program is the perfect fit for engineering students and working professionals looking to launch a career in technology. With top-notch live training and abundant hands-on labs, this comprehensive program is designed to make you job-ready. Become a skilled full-stack developer and thrive in the world of technology with this power-packed opportunity!
    </p>
   <img src="data:image/jpeg;base64,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" alt="" />
  <br /></div>
  <div class="course" data-aos="fade-up"
     data-aos-duration="3000">
    <h3>DEVOPS</h3>
    <p>
     The DevOps Program offers an opportunity to transform the way software is developed, deployed, and managed. It caters to both aspiring tech enthusiasts and seasoned professionals with its cutting-edge curriculum that combines content with hands-on assignments. By enrolling in this program, you'll acquire the skills necessary to excel in this dynamic field. Don't miss out on this chance to revolutionize your career!
    </p>
   <img src="https://static.wixstatic.com/media/nsplsh_28a3417d09b14c2fb0c0922283e0d4b7~mv2.jpg/v1/fill/w_716,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Growtika.jpg" alt="" />
  </div>
  <div class="course" data-aos="fade-up"
     data-aos-duration="3000">
    <h3>  Design & Architecture</h3>
    <p style={{paddingBottom:"1%"}} >
Step into the realm of creativity and innovation with our comprehensive Design and Architecture program. This enriching course is tailored for aspiring designers and architects, as well as professionals looking to enhance their skills. Dive into the world of aesthetic expression, sustainable design, and cutting-edge technologies that shape the structures of tomorrow.
    </p>
   <img src="https://static.wixstatic.com/media/nsplsh_108caa4c2b9c42c19a256c320b676e45~mv2.jpg/v1/fill/w_716,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Chase%20Chappell.jpg" alt="" />
  </div>
  <div class="course" data-aos="fade-up"
     data-aos-duration="3000">
    <h3>Microservices</h3>
    <p style={{paddingBottom:"1.2%"}}>
Unleash the power of microservices and elevate your software mastery with our immersive course! Discover the cutting-edge world of microservices and learn to architect scalable, agile, and resilient applications that redefine the future of technology. Embrace the journey of innovation, scalability, and accelerated deployment as you dive into the realm of microservices. Join us today and take your software development skills to the next level!
    </p>
   <img src="https://static.wixstatic.com/media/nsplsh_107138d1cadc4ccba46e43adb8099206~mv2.jpg/v1/fill/w_716,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Growtika.jpg" alt="" />
  </div>
  <div class="course" data-aos="fade-up"
     data-aos-duration="3000">
    <h3>GoLang</h3>
    <p>
Are you looking to enhance your Golang skills and prepare for real-world challenges in your career? Our program is tailored to meet the demands of the industry and designed specifically for Golang developers. Through hands-on labs, you'll gain a comprehensive understanding of Golang concepts and be well-prepared for success. <br />
    <br /> </p>
   <img src="https://static.wixstatic.com/media/11062b_4456ba5e63714bc79e2a51e9218fd0d1~mv2.jpg/v1/fill/w_716,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Work%20Desk.jpg" alt="" />
  </div>
  <div class="course" data-aos="fade-up"
     data-aos-duration="3000">
    <h3>Agile</h3>
    <p>
Agile is a crucial part of any organization that wants to stay competitive in today's fast-paced business world. Our training program is designed to help your team understand the principles of Agile methodology and how to apply them to your projects. With our expert trainers and hands-on approach, your team will be able to deliver high-quality products and services faster than ever before. Contact us today to learn more about Agile training program.
    </p>
   <img src="https://static.wixstatic.com/media/11062b_9a54e703bde24d8197fe9aa2f3e620c6~mv2.jpeg/v1/fill/w_716,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Writing%20on%20yellow%20post-it%20notes.jpeg"   alt="" />
  </div>
  <BacktoTop/>
</div>

        </>
    )
}
export default Courses;
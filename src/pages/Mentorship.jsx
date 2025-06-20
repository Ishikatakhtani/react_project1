import BacktoTop from "./BacktoTop";
import  { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
const Mentorship=()=>{
   const navigate = useNavigate();
  useEffect(() => {
      document.title = "Mentorship | Yashika Counsulting Services";
    }, []);
    const handleClick = () => {
    navigate("/#form"); 
  };
    return(
        <>
         <div id="Home1">
            
              <p id="h5" style={{color:"white",fontSize:"58px"}}>Mentorship</p>
              <p id="h4" style={{ textAlign:"justify"}} >Providing mentorship to professionals can have a profound and positive impact on professional journey. A mentor serves as a knowledgeable guide, offering valuable insights, practical advice, and real-world experience in the IT field. Through regular interactions and personalized support, mentors can help professionals navigate the complexities of their work, identify their strengths and improvement area, and  will them to climb corporate ladders. Mentor is not only fosters technical skills but also help to enhances soft skills like communication, problem-solving, and teamwork, which play a crucial role in corporate world.</p>
        </div>

<section class="mentorship">
  <div class="mentor-card">
    <img src="https://static.wixstatic.com/media/nsplsh_7576355f6273797046554d~mv2_d_5472_3648_s_4_2.jpg/v1/crop/x_923,y_0,w_3648,h_3648/fill/w_348,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20by%20Hack%20Capital.jpg" alt="Software Professional"/>
    <h3>Software Professional</h3>
    <p>
In Mentorship journey we guide software professionals to unlock their potentials. In this journey we closely work with individuals to identify their strength & improvement areas 
and  create a customize plan for them. We help individuals to ensure that they are on track of success.
    </p>
  </div>

  <div class="mentor-card">
    <img src="https://static.wixstatic.com/media/11062b_ae708cec5f3242a588b44741a32efc05~mv2.jpg/v1/crop/x_968,y_0,w_2160,h_2160/fill/w_348,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Data%20Technology.jpg" alt="Senior Technologist"/>
    <h3>Senior Technologist<br/>(CTO/Director/VP/Architects)</h3>
    <p>
Software architecture mentorship plays a pivotal role in shaping the next generation of software architects. Under the guidance of a seasoned mentor, individuals interested in software architecture embark on a transformative 
journey that equips them with the skills and mindset required to excel in this critical role.
    </p>
  </div>

  <div class="mentor-card">
   <img src="https://static.wixstatic.com/media/11062b_7674c3caf4e44ef59438591a09bb5170~mv2.jpg/v1/fill/w_348,h_348,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chess.jpg" alt="" />
    <h3>Leadership Management</h3>
    <p>
     Effective leadership is not merely about guiding and directing others; it is a holistic approach that fosters growth, inspires innovation, and builds meaningful connections. Through mentorship, We aim to cultivate 
     a new generation of leaders who not only excel in their roles but also lift others up along the way,
    </p>
  </div>
</section>


        <div>
            <div id="m2">
                <div id="m3">
             
                   <h1 id="m4">Get Connected With  <br />Our Mentees </h1>
                  
                   </div>
                <div><p id="h9">Gain invaluable guidance and support from an software expert through personalized one-on-one sessions. Navigate the tech companies with confidence and kickstart your career by connecting with a mentor today.
                   <br /> <br />  <button id="b2" onClick={handleClick}>SIGN UP!</button>
       </p></div>
            
            </div>
            <BacktoTop/>
        </div>
        </>
    )
}
export default Mentorship;
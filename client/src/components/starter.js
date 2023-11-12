import React from 'react'
import "../App.css"
function Starter() {
  return (
    <>
    <div>
      <div id="header">
        <div class="container">
            <nav>
                <img src="images/logo.png" alt="" class="logo"/>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About</a></li>
                    <i class="fa-solid fa-circle-xmark"></i>
                </ul>
                <i class="fa-solid fa-bars"></i>
            </nav>

            <div class="header-text">
                <p>YOGIK</p>
                <h1>Let's make our life <br/><span>better</span></h1>
                <button class="button"><a href="/login">Get Started</a></button>
            </div>
        </div>
    </div>

    
    {/* <!-- <div id="about">
        <div class="container">

        </div>
    </div> --> */}

    {/* <!--  -----------------services-------------- --> */}
    
    </div>
    <h1 class="sub-title" >SERVICES</h1>
    <section id = "feature" class="section-p1">
        
        <div class="fe-box">
            <img src="images/services/3.png" alt="" width="160px"/>
            <a href="#"><h4>Yoga under supervision</h4></a>
            {/* <!-- <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6> --> */}
        </div>
        <div class="fe-box">
            <img src="images/services/1.png" alt="" width="160px"/>
            <a href="#"><h4>Level wise yoga</h4></a>
            {/* <!-- <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6> --> */}
        </div>
        <div class="fe-box">
            <img src="images/services/2.png" alt="" width="160px"/>
            <a href=""><h4>Task of the day</h4></a>
            {/* <!-- <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6> --> */}
        </div>
    </section>
  

    <div id="contact">
        
        <div class="row">
            <div class="contact-left">
                <h1 class="sub-title">Contact Us</h1>
                <p><i class="fa-solid fa-paper-plane"></i> yogik@gmail.com</p>
                <p><i class="fa-solid fa-phone"></i> 9075297554</p>
                <div class="social-icons">
                    <a href="https://facebook.com/"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href=""><i class="fa-brands fa-twitter-square"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div class="contact-right">
                <form>
                    <input type="text" name="Name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <button type="submit" class="btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <div>
        <div class="copyright">
            <p><i class="fa-solid fa-dumbbell"></i> YOGIK</p>
        </div>
    </div>
    </>
  )
}

export default Starter

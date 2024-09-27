<template>
    <footer class="main-footer">
      <div class="bg bg-pattern-6"></div>
      <!-- Footer Uppper -->
      <div class="footer-upper">
        <div class="auto-container">
          <div class="row">
            <!-- Contact info Block -->
            <div class="contact-info-block col-lg-4 col-md-6">
              <div class="inner">
                <i class="icon fa fa-phone-square"></i>
                <span class="sub-title">Ring Oss</span>
                <div class="text"><NuxtLink to="tel:+46 7 35 35 34 34">+46 7 35 35 34 34</NuxtLink></div>
              </div>
            </div>
            <!-- Contact info Block -->
            <div class="contact-info-block col-lg-4 col-md-6">
              <div class="inner">
                <i class="icon fa fa-envelope"></i>
                <span class="sub-title">Maila Oss</span>
                <div class="text"><NuxtLink to="mailto:info@rosetech.se">info@rosetech.se</NuxtLink></div>
              </div>
            </div>
            <!-- Contact info Block -->
            <div class="contact-info-block col-lg-4 col-md-6">
              <div class="inner">
                <i class="icon fa fa-map-marker"></i>
                <span class="sub-title">Adress</span>
                <div class="text">RoseTech AB, Företagsvägen 10, P.O. 227 61 Lund</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Widgets Section -->
      <div class="widgets-section">
        <div class="auto-container">
          <div class="row">
            <!-- Footer COlumn -->
            <div class="footer-column col-xl-6 col-lg-6">
              <div class="footer-widget about-widget">
                <div class="widget-content">
                  <div class="logo"><NuxtLink to="/"> <img src="/images/logo.png" alt=""></NuxtLink></div>
                  <div class="text">Välkommen till ROSETECH. Vi  tar ditt företag till nästa nivå. </div>
                  <ul class="social-icon-two">
                    <!-- <li><NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink></li> -->
                    <li><NuxtLink to="https://www.facebook.com/profile.php?id=61558032923218" target="_blank"><i class="fab fa-facebook"></i></NuxtLink></li>
                    <li><NuxtLink to="https://www.instagram.com/ROSETECH2/" target="_blank"><i class="fab fa-instagram"></i></NuxtLink></li>
                    <li><NuxtLink to="https://www.linkedin.com/in/rosetech-solutions-71b814301/" target="_blank"><i class="fab fa-linkedin"></i></NuxtLink></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Footer COlumn -->
            <div class="footer-column col-xl-6 col-lg-6 col-md-12">
              <div class="widget links-widget">
                <h5 class="widget-title">Explore</h5>
                <div class="widget-content">
                  <ul class="user-links two-column">
                    <li><NuxtLink to="/team">Träffa Vårt Team</NuxtLink></li>
                    <li><NuxtLink to="/about">Om Oss</NuxtLink></li>
                    <li><NuxtLink to="/services">Vad Vi Gör</NuxtLink></li>
                    <li><NuxtLink to="/contact">Support</NuxtLink></li>
                    <li><NuxtLink to="/news">Senaste Nytt</NuxtLink></li>
                    <li><NuxtLink to="/projects">Nya Projekt</NuxtLink></li>
                    <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
                    <!-- <li><NuxtLink to="#">Shop</NuxtLink></li>
                    <li><NuxtLink to="#">Faqs</NuxtLink></li> -->
                  </ul>                                
                </div>
              </div>
            </div>
  
            <!-- Footer COlumn -->
            <!-- <div class="footer-column col-xl-3 col-lg-4 col-md-6">
              <div class="widget newsletter-widget">
                <h5 class="widget-title">Newsletter</h5>
                <div class="widget-content">
                  <div class="text">Subsrcibe for our latest resources</div>
                  <div class="subscribe-form">
                    <form method="post" action="#">
                      <div class="form-group">
                        <input type="email" name="email" class="email" value="" placeholder="Email Address" required="">
                      </div>
                      <div class="form-group">
                        <button type="button" class="theme-btn btn-style-one hover-light"><span class="btn-title">Subscribe</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
  
      <!--  Footer Bottom -->
      <div class="footer-bottom">
        <div class="auto-container">
          <div class="copyright-text">© Copyright {{new Date().getFullYear()}} reserved by ROSETECH</div>
        </div>
      </div>
    </footer>
  </template>
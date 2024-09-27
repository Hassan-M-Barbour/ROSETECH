<template>
  <section class="contact-section pt-120">
    <div class="anim-icons">
      <span class="icon icon-line3"></span>
      <span class="icon icon-arrow1"></span>
      <span class="icon icon-arrow2"></span>
    </div>
    <div class="auto-container">
      <div class="outer-box">
        <div class="bg bg-pattern-5"></div>

        <div class="sec-title">
          <span class="sub-title">Get in touch</span>
          <h2>Let’s work together</h2>
        </div>
        
        <!-- Contact Form -->
        <div class="contact-form wow fadeInLeft">
          <!--Contact Form-->
          <form method="post" action="get" id="contact-form">
            <div class="row">
              <div class="form-group col-lg-6 col-md-12 col-sm-12">
                <input type="text" name="full_name" placeholder="Your name" required>
              </div>
              <div class="form-group col-lg-6 col-md-12 col-sm-12">
                <input type="email" name="Email" placeholder="Email Address" required>
              </div>
              <div class="form-group col-lg-12">
                <textarea name="message" placeholder="Write a message" required></textarea>
              </div>
              <div class="form-group col-lg-12">
                <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title">Send a message</span></button>
              </div>
            </div>
          </form>
        </div>
        <!--End Contact Form -->
        <figure class="image"><img src="/images/resource/girl.png" alt=""></figure>
      </div>
    </div>
  </section>
</template>
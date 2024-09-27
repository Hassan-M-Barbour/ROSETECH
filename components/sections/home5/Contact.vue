<template>
  <section class="contact-section-home5 home8-contact pt-0 overflow-visible">
    <div class="auto-container">
      <div class="row">
        <!-- Form Column -->
        <div class="col-lg-6 col-xl-5 wow fadeInLeft" data-wow-delay="200ms">
          <!-- Contact Form -->
          <div class="contact-form-home5 mb-md-50">
            <h6 class="mb-0">Contact us</h6>
            <h3>Contact us</h3>
            <!--Contact Form-->
            <form method="post" action="get" id="contact-form">
              <div class="row">
                <div class="form-group col-lg-12">
                  <input type="text" name="full_name" placeholder="Your Name" required>
                </div>
                <div class="form-group col-lg-12">
                  <input type="email" name="Email" placeholder="Email Address" required>
                </div>
                <div class="form-group col-lg-12">
                  <textarea name="message" placeholder="Comment" required></textarea>
                </div>
                <div class="form-group col-lg-12">
                  <button class="theme-btn btn-style-one hvr-dark" type="submit" name="submit-form"><span class="btn-title">Write a Message</span></button>
                </div>
              </div>
            </form>
          </div>
          <!--End Contact Form -->
        </div>
        <div class="content-column col-lg-6 col-xl-7 d-flex align-items-center wow fadeInLeft" data-wow-delay="400ms">
          <div class="home5-contact-img"></div>
          <div class="inner-column pl-lg-10 pl-40">
            <div class="sec-title">
              <span class="sub-title">Get To Know</span>
              <h2>Keep Your Vision To Our Projects</h2>
            </div>

            <!-- Work Block -->
            <div class="work-block-home5">
              <div class="inner-box">
                <span class="icon fa fa-check"></span>
                <h6 class="title">Cloud Based Services</h6>
                <div class="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum</div>
              </div>
            </div>
            <!-- Work Block -->
            <div class="work-block-home5">
              <div class="inner-box border-bottom-0">
                <span class="icon fa fa-check"></span>
                <h6 class="title">End to End Solutions</h6>
                <div class="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
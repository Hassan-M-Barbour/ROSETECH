<template>
	<!--Team Details Start-->
	<section class="team-details">

		<div class=""></div>
		<div class="container pb-100">
			<div class="team-details__top pb-70">
				<div class="row">
					<div class="col-lg-6">
						<div class="team-details__top-left">
							<div class="team-details__top-img"> <img src="/images/resource/team-details.jpg" alt="">
								<div class="team-details__big-text"></div>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="team-details__top-right">
							<div class="team-details__top-content">
								<h3 class="team-details__top-name">Aleesha Brown</h3>
								<p class="team-details__top-title">Managing Director & CEO</p>
								<p class="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
								<div class="team-details-contact mb-30">
									<h5 class="mb-0">Email Address</h5>
									<div class=""><span>needhelp@yourdomain.com</span></div>
								</div>
								<div class="team-details-contact mb-30">
									<h5 class="mb-0">Phone Number</h5>
									<div class=""><span>+012-3456-789</span></div>
								</div>
								<div class="team-details-contact">
									<h5 class="mb-0">Web Address</h5>
									<div class=""><span>www.yourdomain.com</span></div>
								</div>
								<div class="team-details__social"> <NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink> <NuxtLink to="#"><i class="fab fa-facebook"></i></NuxtLink> <NuxtLink to="#"><i class="fab fa-pinterest-p"></i></NuxtLink> <NuxtLink to="#"><i class="fab fa-instagram"></i></NuxtLink> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="team-details__bottom pt-100">
				<div class="row">
					<div class="col-lg-6">
						<div class="team-details__bottom-left">
							<h4 class="team-details__bottom-left-title">Personal Experience</h4>
							<p class="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p>
						</div>
					</div>
          <div class="skills-column col-xl-6 col-lg-6" data-wow-delay="300ms">
            <div class="inner-column"> 
              <!--Skills-->
              <div class="skills style-two"> 
                <!--Skill Item-->
                <div class="skill-item">
                  <div class="skill-header">
                    <h6 class="skill-title">Tecnology</h6>
                  </div>
                  <div class="skill-bar">
                    <div class="bar-inner">
                      <div class="bar progress-line" data-width="77" style="width: 77%;">
                        <div class="skill-percentage">
                          <div class="count-box"><ElementsCounterUp :end="77"/>% </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Skill Item-->
                <div class="skill-item">
                  <div class="skill-header">
                    <h6 class="skill-title">Marketing</h6>
                  </div>
                  <div class="skill-bar">
                    <div class="bar-inner">
                      <div class="bar progress-line" data-width="57" style="width: 57%;">
                        <div class="skill-percentage">
                          <div class="count-box"><ElementsCounterUp :end="57"/>% </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Skill Item-->
                <div class="skill-item">
                  <div class="skill-header">
                    <h6 class="skill-title">Business</h6>
                  </div>
                  <div class="skill-bar">
                    <div class="bar-inner">
                      <div class="bar progress-line" data-width="92" style="width: 92%;">
                        <div class="skill-percentage">
                          <div class="count-box"><ElementsCounterUp :end="92"/>% </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--Skill Item--> 
              </div>
            </div>
          </div>
				</div>
			</div>
		</div>
	</section>
	<!--Team Details End--> 

	<!--Contact Details Start-->
	<section class="team-contact-form">
		<div class="container pb-100">
			<div class="sec-title text-center">
				<span class="sub-title">Contact With Us Now</span>
				<h2 class="section-title__title">Feel Free to Write Our <br> Tecnology Experts</h2>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<!-- Contact Form -->
					<form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post">
						<div class="row">
							<div class="col-sm-6">
								<div class="mb-3">
									<input name="form_name" class="form-control" type="text" placeholder="Enter Name">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="mb-3">
									<input name="form_email" class="form-control required email" type="email" placeholder="Enter Email">
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="mb-3">
									<input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject">
								</div>
							</div>
							<div class="col-sm-6">
								<div class="mb-3">
									<input name="form_phone" class="form-control" type="text" placeholder="Enter Phone">
								</div>
							</div>
						</div>
						<div class="mb-3">
							<textarea name="form_message" class="form-control required" rows="5" placeholder="Enter Message"></textarea>
						</div>
						<div class="mb-3 text-center">
							<input name="form_botcheck" class="form-control" type="hidden" value="" />
							<button type="submit" class="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button>
							<button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Reset</span></button>
						</div>
					</form>
					<!-- Contact Form Validation-->
				</div>
			</div>
		</div>
	</section>
	<!--Contact Details End-->
</template>
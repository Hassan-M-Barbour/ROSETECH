<template>
	<section class="contact-section-two">
		<div class="bg bg-pattern-11"></div>
		<div class="image-box">
			<div class="image"><img src="/images/resource/contact-img.png" alt=""></div>
			<div class="image-overlay"></div>
		</div>
		<div class="auto-container">
			<div class="row">
				<!-- Form Column -->
				<div class="form-column col-lg-7 col-md-12">
					<div class="inner-column">
						<div class="sec-title light">
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
										<input type="email" name="Email" placeholder="Email address" required>
									</div>
									<div class="form-group col-lg-6 col-md-12 col-sm-12">
										<input type="text" name="phone" placeholder="Phone" required>
									</div>
									<div class="form-group col-lg-6 col-md-12 col-sm-12">
										<input type="text" name="subject" placeholder="Subject" required>
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
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
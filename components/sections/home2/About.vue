<template>
	<section class="about-section-two">
		<div class="anim-icons">
			<span class="icon icon-line4"></span>
			<span class="icon icon-line5"></span>
			<span class="icon icon-arrow1 bounce-x"></span>
			<span class="icon icon-speaker zoom-one"></span>
		</div>
		<div class="auto-container">
			<div class="outer-box">
				<div class="row">
					<!-- Content Column -->
					<div class="content-column col-xl-6 col-lg-7 order-2 wow fadeInRight" data-wow-delay="600ms">
						<div class="inner-column">
							<div class="sec-title">
								<span class="sub-title">Welcome to Agency</span>
								<h2>Leading the best digital agency in town</h2>
								<div class="text">There are many variations of simply free text passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
							</div>
							<div class="row">
								<div class="info-box col-md-6">
									<div class="inner">
										<h5 class="title"><i class="icon fa fa-circle-arrow-right"></i> Digital marketing</h5>
										<div class="text">Knowledge of technologies rules better than anyone</div>
									</div>
								</div>
								<div class="info-box col-md-6">
									<div class="inner">
										<h5 class="title"><i class="icon fa fa-circle-arrow-right"></i> Quality results</h5>
										<div class="text">Knowledge of technologies rules better than anyone</div>
									</div>
								</div>
							</div>
							<!--Skills-->
							<div class="skills">
								<!--Skill Item-->
								<div class="skill-item">
									<div class="skill-header">
										<h5 class="skill-title">Marketing</h5>
									</div>
									<div class="skill-bar">
										<div class="bar-inner">
											<div class="bar progress-line" data-width="77" style="width:77%;">
												<div class="skill-percentage">
													<div class="count-box"><ElementsCounterUp :end="77"/>%</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="bottom-box">
								<NuxtLink to="page-about" class="theme-btn btn-style-one hvr-dark"><span class="btn-title">Discover more</span></NuxtLink>
							</div>
						</div>
					</div>
					<!-- Image Column -->
					<div class="image-column col-xl-6 col-lg-5">
						<div class="inner-column wow fadeInLeft">
							<div class="image-box">
								<span class="icon-dots2"></span>
								<figure class="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about2-1.jpg" alt=""></figure>
								<figure class="image-2 overlay-anim wow fadeInRight"><img src="/images/resource/about2-2.jpg" alt=""></figure>
								<div class="exp-box">
									<div class="inner">
										<i class="icon flaticon-promotion"></i>
										<span class="count">38+</span>
										<h6 class="title">Work Experience</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
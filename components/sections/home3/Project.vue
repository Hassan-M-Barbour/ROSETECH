<template>
	<!-- project-section -->
	<section class="projects-section-home3">
		<div class="upper-box">
			<div class="auto-container">
				<div class="sec-title">
					<span class="sub-title">our portfolio</span>
					<h2>our recent work</h2>
				</div>
			</div>
		</div>
    <div class="carousel-outer">
      <swiper :slides-per-view="4" :space-between="0" :loop="true" :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
        }" :breakpoints="{
		    320: {
		        slidesPerView: 1,
		        spaceBetween: 0,
		    },
		    575: {
		        slidesPerView: 1,
		        spaceBetween: 0,
		    },
		    767: {
		        slidesPerView: 2,
		        spaceBetween: 0,
		    },
		    991: {
		        slidesPerView: 3,
		        spaceBetween: 0,
		    },
		    1199: {
		        slidesPerView: 4,
		        spaceBetween: 0,
		    },
		    1350: {
		        slidesPerView: 4,
		        spaceBetween: 30,
		    },
		    }" :pagination="{
		    el: '.swiper-pagination',
		    clickable: true,
		    }" :navigation="{
		    nextEl: '.h1n',
		    prevEl: '.h1p',
		    }" :modules="modules" class="projects-carousel owl-theme default-navs">
        <swiper-slide class="slide-item">
					<!-- project-block  -->
					<div class="project-block-home3">
						<div class="image-box">
							<figure class="image"><NuxtLink to="/images/resource/project-1.jpg" class="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""></NuxtLink> </figure>
							<div class="caption-box">
								<h4 class="title"><NuxtLink to="page-project-details.html">Marketing webdesign</NuxtLink></h4>
							</div>
						</div>
					</div>
        </swiper-slide>
        <swiper-slide class="slide-item">
					<!-- project-block  -->
					<div class="project-block-home3">
						<div class="image-box">
							<figure class="image"><NuxtLink to="/images/resource/project-2.jpg" class="lightbox-image"><img src="/images/resource/project-2.jpg" alt=""></NuxtLink> </figure>
							<div class="caption-box">
								<h4 class="title"><NuxtLink to="page-project-details.html">Marketing webdesign</NuxtLink></h4>
							</div>
						</div>
					</div>
        </swiper-slide>
        <swiper-slide class="slide-item">
					<!-- project-block  -->
					<div class="project-block-home3">
						<div class="image-box">
							<figure class="image"><NuxtLink to="/images/resource/project-3.jpg" class="lightbox-image"><img src="/images/resource/project-3.jpg" alt=""></NuxtLink> </figure>
							<div class="caption-box">
								<h4 class="title"><NuxtLink to="page-project-details.html">Marketing webdesign</NuxtLink></h4>
							</div>
						</div>
					</div>
        </swiper-slide>
        <swiper-slide class="slide-item">
					<!-- project-block  -->
					<div class="project-block-home3">
						<div class="image-box">
							<figure class="image"><NuxtLink to="/images/resource/project-4.jpg" class="lightbox-image"><img src="/images/resource/project-4.jpg" alt=""></NuxtLink> </figure>
							<div class="caption-box">
								<h4 class="title"><NuxtLink to="page-project-details.html">Marketing webdesign</NuxtLink></h4>
							</div>
						</div>
					</div>
        </swiper-slide>
        <swiper-slide class="slide-item">
					<!-- project-block  -->
					<div class="project-block-home3">
						<div class="image-box">
							<figure class="image"><NuxtLink to="/images/resource/project-1.jpg" class="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""></NuxtLink> </figure>
							<div class="caption-box">
								<h4 class="title"><NuxtLink to="page-project-details.html">Marketing webdesign</NuxtLink></h4>
							</div>
						</div>
					</div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
}
</script>
<template>
  <section class="testimonial-section">
    <div class="bg bg-pattern-7"></div>
    <div class="auto-container">
      <div class="row">
        <!-- Title Column -->
        <div class="title-column col-lg-6">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">our testimonials</span>
              <h2>What they’re talking about agency?</h2>
            </div>
            <div class="info-box">
              <i class="icon flaticon-recommend"></i>
              <div class="text">We’re trusted by more then<br> 3800 satisfied & happy customers</div>
            </div>
          </div>
        </div>
        <div class="testimonial-column col-lg-6">
          <div class="inner-column">
            <swiper :slides-per-view="2" :space-between="30" :loop="true" :autoplay="{
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
                spaceBetween: 10,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1199: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1350: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              }" :pagination="{
                el: '.swiper-pagination',
                clickable: true,
              }" :navigation="{
                nextEl: '.h1n',
                prevEl: '.h1p',
              }" :modules="modules" class="testimonial-carousel default-navs">
              <swiper-slide class="slide-item">
                <!-- testimonial-block -->
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="content-box">
                      <div class="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.</div>
                    </div>
                    <div class="info-box">
                      <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <figure class="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt=""></figure>
                      <h5 class="name">Donald hardson</h5>
                      <span class="designation">Co Founder</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-item">
                <!-- testimonial-block -->
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="content-box">
                      <div class="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.</div>
                    </div>
                    <div class="info-box">
                      <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <figure class="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt=""></figure>
                      <h5 class="name">Donald hardson</h5>
                      <span class="designation">Co Founder</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-item">
                <!-- testimonial-block -->
                <div class="testimonial-block">
                  <div class="inner-box">
                    <div class="content-box">
                      <div class="text">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking.</div>
                    </div>
                    <div class="info-box">
                      <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                      </div>
                      <figure class="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt=""></figure>
                      <h5 class="name">Donald hardson</h5>
                      <span class="designation">Co Founder</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
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
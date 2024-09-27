<template>
  <section class="testimonial-section-home5-v2">
    <div class="bg bg-pattern-7"></div>
    <div class="auto-container">
      <div class="row">
        <!-- Title Column -->
        <div class="title-column col-xl-3">
          <div class="sec-title">
            <span class="sub-title">our feedbacks</span>
            <h2>what they’re <br class="d-none d-xl-block">talking?</h2>
            <div class="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.</div>
          </div>
        </div>
        <div class="testimonial-column col-xl-9">
          <div class="inner-column">
            <swiper :slides-per-view="3" :space-between="30" :loop="true" :autoplay="{
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1350: {
                slidesPerView: 3,
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
                <div class="testimonial-block-home5-v2">
                  <div class="inner-box">
                    <div class="content-box">
                      <div class="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt=""></div>
                      <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                      <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    </div>
                    <div class="info-box">
                      <h6 class="name">Sarah Albert</h6>
                      <span class="designation">Designer</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-item">
                <!-- testimonial-block -->
                <div class="testimonial-block-home5-v2">
                  <div class="inner-box">
                    <div class="content-box">
                      <div class="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt=""></div>
                      <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                      <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    </div>
                    <div class="info-box">
                      <h6 class="name">david cooper</h6>
                      <span class="designation">Designer</span>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="slide-item">
                <!-- testimonial-block -->
                <div class="testimonial-block-home5-v2">
                  <div class="inner-box">
                    <div class="content-box">
                      <div class="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt=""></div>
                      <div class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                      <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    </div>
                    <div class="info-box">
                      <h6 class="name">christine eve</h6>
                      <span class="designation">Designer</span>
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
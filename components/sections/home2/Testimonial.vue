<template>
  <!-- testmonial section -->
  <section class="testimonial-section-two">
    <div class="bg bg-pattern-9"></div>
    <div class="auto-container">
      <div class="row">
        <!-- Title Column -->
        <div class="title-column col-xl-3 col-lg-4">
          <div class="inner-column">
            <div class="sec-title">
              <span class="sub-title">testimonials</span>
              <h2>What they’re talking about</h2>
              <div class="text">Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.</div>
            </div>
          </div>
        </div>
        <div class="testimonial-column col-xl-9 col-lg-8">
          <div class="inner-column">
            <swiper :slides-per-view="3" :space-between="20" :loop="true" :autoplay="{
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
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1199: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1350: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }" :pagination="{
              el: '.swiper-pagination',
              clickable: true,
            }" :navigation="{
              nextEl: '.h1n',
              prevEl: '.h1p',
            }" :modules="modules" class="testimonial-carousel-two default-navs">
            <swiper-slide class="slide-item">
              <div class="testimonial-block-two">
                <div class="inner-box">
                  <div class="content-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt=""></figure>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    <div class="info-box">
                      <h6 class="name">Sarah albert</h6>
                      <span class="designation">Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="slide-item">
              <div class="testimonial-block-two">
                <div class="inner-box">
                  <div class="content-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt=""></figure>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    <div class="info-box">
                      <h6 class="name">Mike hardson</h6>
                      <span class="designation">Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="slide-item">
              <div class="testimonial-block-two">
                <div class="inner-box">
                  <div class="content-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt=""></figure>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    <div class="info-box">
                      <h6 class="name">Aleesha brown</h6>
                      <span class="designation">Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="slide-item">
              <div class="testimonial-block-two">
                <div class="inner-box">
                  <div class="content-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt=""></figure>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    <div class="info-box">
                      <h6 class="name">Sarah albert</h6>
                      <span class="designation">Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="slide-item">
              <div class="testimonial-block-two">
                <div class="inner-box">
                  <div class="content-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt=""></figure>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    <div class="info-box">
                      <h6 class="name">Mike hardson</h6>
                      <span class="designation">Designer</span>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide class="slide-item">
              <div class="testimonial-block-two">
                <div class="inner-box">
                  <div class="content-box">
                    <figure class="thumb"><img src="/images/resource/testi-thumb-4.jpg" alt=""></figure>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                    <div class="info-box">
                      <h6 class="name">Aleesha brown</h6>
                      <span class="designation">Designer</span>
                    </div>
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
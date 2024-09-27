<template>
    <section class="main-slider">
      <swiper :slides-per-view="1" :space-between="30" :loop="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
        }" :pagination="{
            el: '.swiper-pagination',
            clickable: true,
        }" :navigation="{
            nextEl: '.h1n',
            prevEl: '.h1p',
        }" :modules="modules" class="banner-slider">
        <!-- Slide Item -->
        <swiper-slide class="banner-slide slide-item">
          <div class="banner-slide"> <img src="/images/main-slider/1.jpg" alt="">
            <div class="outer-box">
              <div class="auto-container">
                <div class="content-box">
                  <h1 data-animation-in="fadeInLeft" data-delay-in="0.2"> <span class="selected">En Ny</span> Era <br> för Teknologi och Design</h1>
                  <NuxtLink to="/about" data-animation-in="fadeInUp" data-delay-in="0.4" class="theme-btn btn-style-one hover-light mt-20">Upptäck Mer</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
  
        <!-- Slide Item -->
        <swiper-slide class="banner-slide slide-item">
          <div class="banner-slide"> <img src="/images/main-slider/2.jpg" alt="">
            <div class="outer-box">
              <div class="auto-container">
                <div class="content-box">
                  <h1 data-animation-in="fadeInLeft" data-delay-in="0.2"> <span class="selected">Teknisk</span>  Utveckling <br>för Framtiden</h1>
                  <NuxtLink to="/about" data-animation-in="fadeInUp" data-delay-in="0.4" class="theme-btn btn-style-one hover-light mt-20">Upptäck Mer</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
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
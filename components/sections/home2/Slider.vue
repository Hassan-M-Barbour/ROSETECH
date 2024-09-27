<template>
  <section class="banner-section">
    <swiper :slides-per-view="1" :space-between="30" :loop="true" :autoplay="{
      delay: 80000,
      disableOnInteraction: true,
      }" :pagination="{
          el: '.swiper-pagination',
          clickable: true,
      }" :navigation="{
          nextEl: '.h1n',
          prevEl: '.h1p',
      }" :modules="modules" class="banner-carousel owl-theme default-navs">
      <!-- Slide Item -->
      <swiper-slide class="slide-item">
        <div class="bg-image" style="background-image: url(/images/main-slider/2.jpg);"></div>
        <div class="auto-container">
          <div class="content-box">
            <h1 class="title animate-1">Shaping the <br>Perfect Solution <br>for your business</h1>
            <div class="btn-box animate-2">
              <a href="page-about.html" class="theme-btn btn-style-one hover-light"><span class="btn-title">Discover more</span></a>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Slide Item -->
      <swiper-slide class="slide-item">
        <div class="bg-image" style="background-image: url(/images/main-slider/2.jpg);"></div>
        <div class="auto-container">
          <div class="content-box">
            <h1 class="title animate-1">Shaping the <br>Perfect Solution <br>for your business</h1>
            <div class="btn-box animate-2">
              <a href="page-about.html" class="theme-btn btn-style-one hover-light"><span class="btn-title">Discover more</span></a>
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
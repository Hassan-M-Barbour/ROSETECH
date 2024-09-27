<template>
  <section class="offer-section-home4">
    <div class="auto-container">
      <div class="row">
        <!-- Content Column -->
        <div class="content-column position-relative col-lg-6 col-md-12">
          <div class="inner-column">
            <div class="sec-title light">
              <span class="sub-title">TECH MANAGEMENT</span>
              <h2>The Best Source for IT Solutions</h2>
              <div class="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu convenient scheduling, account fugiat pariatur</div>
            </div>
            <div class="info-box">
              <i class="icon flaticon-rating"></i>
              <h5 class="title">We’re doing the right thing.<br class="d-none d-sm-block"> The right way.</h5>
            </div>
            <ul class="list-style-two">
              <li><i class="fa fa-check-circle"></i> Lorem Ipsum is not simply random text</li>
              <li><i class="fa fa-check-circle"></i> Making this the first true generator on the Internet</li>
              <li><i class="fa fa-check-circle"></i> Various versions have evolved over the years</li>
            </ul>
          </div>
        </div>

        <!-- Content Column -->
        <div class="image-column position-relative col-lg-6 col-md-12 col-sm-12">
          <div class="inner-column">
            <div class="image-box">
              <figure class="image"><img src="/images/resource/service-details.jpg" alt=""></figure>
              <div class="caption-box wow slideInRight">
                <div class="icon-box">
                  <NuxtLink @click="openVideo" class="play-now-home4 lightbox-image"><i class="icon fa fa-play"></i></NuxtLink>
                </div>
                <div class="title-box">
                  <h5 class="title">Professional IT technology services you can trust</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
	<modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from '../../components/elements/ModalVideo.vue'
export default {
  components: {
    ModalVideo
  },
  data: () => {
    return {
      videoIsOpen: false
    }
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen
    }
  },
  computed: {
    videoChannel: function () {
      //Logic to extract based on URL
      return 'youtube'
    },
    videoId: function () {
      //Logic to extract based on URL
      return 'QiqQoqtnHrk'
    }
  }
}
</script>
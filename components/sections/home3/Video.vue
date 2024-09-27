<template>
  <section class="video-section-new-3">
    <div class="auto-container">
      <div class="video-box-new-3">
        <div class="bg">
          <div class="bg bg-image" style="background-image: url(./images/background/2.jpg)"></div>
          <div class="overlay"></div>
        </div>
        <div class="content">
          <div class="btn-box">
            <NuxtLink @click="openVideo" class="play-now lightbox-image"><i class="icon fa fa-play"></i><span class="ripple"></span></NuxtLink>
          </div>
          <h2 class="title">Most Trusted Agency</h2>
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
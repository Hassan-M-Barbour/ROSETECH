<template>
  <section class="video-section pull-down">
    <div class="bg bg-pattern-4"></div>
    <div class="auto-container">
      <div class="sec-title text-center light">
        <NuxtLink @click="openVideo" class="play-btn lightbox-image"><i class="icon fa fa-play"></i></NuxtLink>
        <h2>Digital agency services built specifically <br>for your <span class="selected">business</span></h2>
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
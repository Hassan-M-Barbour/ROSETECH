<template>
  <section class="video-section p-0">
    <div class="auto-container">
      <div class="video-box">
        <div class="bg bg-image" style="background-image: url(./images/background/2.jpg)"></div>
        <div class="bg bg-overlay"></div>
        <figure class="watch-video-text"><img src="/images/resource/watch-video.png" alt=""></figure>
        <NuxtLink @click="openVideo" class="play-btn"><i class="icon fa fa-play"></i></NuxtLink>
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
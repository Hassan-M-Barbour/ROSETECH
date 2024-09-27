<template>

  <!-- FAQ Section -->
  <section class="faqs-section">
    <div class="auto-container">
      <div class="sec-title text-center">
        <span class="sub-title">frequently asked questions</span>
        <h2>Agency is building a top<br> business sectors</h2>
      </div>
      <div class="row">
        <!-- Content Column -->
        <div class="content-column col-lg-6">
          <div class="inner-column">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="image-box">
                  <figure class="image overlay-anim"><img src="/images/resource/faq.jpg" alt=""></figure>
                  <div class="exp-box">
                    <span class="count">20</span>
                    <h4 class="title">Years <br>Experience</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <!-- Faq Block -->
                <div class="faq-block">
                  <div class="inner-box">
                    <div class="title-box">
                      <i class="icon fa fa-long-arrow-alt-right"></i>
                      <h6 class="title">High Quality Services</h6>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dol sit amet, passage of.</div>
                  </div>
                </div>
    
                <!-- Faq Block -->
                <div class="faq-block">
                  <div class="inner-box">
                    <div class="title-box">
                      <i class="icon fa fa-long-arrow-alt-right"></i>
                      <h6 class="title">Perfect Business Solution</h6>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dol sit amet, passage of.</div>
                  </div>
                </div>

                <!-- Faq Block -->
                <div class="faq-block">
                  <div class="inner-box">
                    <div class="title-box">
                      <i class="icon fa fa-long-arrow-alt-right"></i>
                      <h6 class="title">Commited to Deliver</h6>
                    </div>
                    <div class="text">Lorem ipsum is simply free text dol sit amet, passage of.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- FAQ Column -->
        <div class="faq-column col-lg-6">
          <div class="inner-column">
            <ul class="accordion-box wow fadeInRight">
              <!--Block-->
              <li class="accordion block" :class="{ 'active-block': isActive.key === 1}">
                <div class="acc-btn" :class="{ 'active': isActive.key === 1}" @click="handleClick(1)">What does your process look like?
                  <div class="icon fa fa-plus"></div>
                </div>
                <div class="acc-content" :class="{ 'current': isActive.key === 1}">
                  <div class="content">
                    <div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                  </div>
                </div>
              </li>
              <!--Block-->
              <li class="accordion block" :class="{ 'active-block': isActive.key === 2}">
                <div class="acc-btn" :class="{ 'active': isActive.key === 2}" @click="handleClick(2)">Learn how we create unmatched solutions
                  <div class="icon fa fa-plus"></div>
                </div>
                <div class="acc-content" :class="{ 'current': isActive.key === 2}">
                  <div class="content">
                    <div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                  </div>
                </div>
              </li>
              <!--Block-->
              <li class="accordion block" :class="{ 'active-block': isActive.key === 3}">
                <div class="acc-btn" :class="{ 'active': isActive.key === 3}" @click="handleClick(3)">How long do services take to complete?
                  <div class="icon fa fa-plus"></div>
                </div>
                <div class="acc-content" :class="{ 'current': isActive.key === 3}">
                  <div class="content">
                    <div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                  </div>
                </div>
              </li>
              <!--Block-->
              <li class="accordion block mb-0" :class="{ 'active-block': isActive.key === 4}">
                <div class="acc-btn" :class="{ 'active': isActive.key === 4}" @click="handleClick(4)">How can i find my financial record?
                  <div class="icon fa fa-plus"></div>
                </div>
                <div class="acc-content" :class="{ 'current': isActive.key === 4}">
                  <div class="content">
                    <div class="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--End FAQ Section -->
</template>
<script setup>
import { ref } from 'vue'

const isActive = ref({
  status: false,
  key: 1,
})

const handleClick = (key) => {
  if (isActive.value.key === key) {
    isActive.value.status = false
  } else {
    isActive.value.status = true
    isActive.value.key = key
  }
};
</script>
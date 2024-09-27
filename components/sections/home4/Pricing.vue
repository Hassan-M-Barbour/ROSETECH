<template>
  <section class="pricing-section-home4 pt-0 pb-120">
    <div class="auto-container">
      <div class="row">
        <!-- Content Column -->
        <div class="content-column col-lg-6">
          <div class="inner-column wow fadeInRight">
            <div class="sec-title">
              <span class="sub-title">Our pricing plans</span>
              <h2>Choose Your Optimal Pricing Plans</h2>
            </div>
            <div class="info-box">
              <span class="icon fa fa-check"></span>
              <h5 class="title">Quality Services</h5>
              <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</div>
            </div>
            <div class="info-box">
              <span class="icon fa fa-check"></span>
              <h5 class="title">Business Management</h5>
              <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
            </div>
            <div class="info-box">
              <span class="icon fa fa-check"></span>
              <h5 class="title">Expert IT Team</h5>
              <div class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</div>
            </div>
            <div class="tm-pricing-smart-switcher-button mb-5 mb-lg-0">
              <ul class="switch-buttons">
                <li class="active">
                  <NuxtLink to="javascript:" class="btn-toggle active mb-2 mb-sm-0" data-pricing-trigger="" data-show="month"><span class="title">Monthly</span></NuxtLink>
                </li>
                <li class="">
                  <NuxtLink to="javascript:" class="btn-toggle" data-pricing-trigger="" data-show="year"><span class="title">Yearly</span>
                  <span class="price-offer">20% Off</span></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Content Column -->
        <div class="pricing-column col-lg-6 pl-md-30">
          <div class="inner-column d-block d-md-flex wow fadeInLeft">
            <!-- Pricing Block -->
            <div class="pricing-block">
              <div class="inner-box">
                <figure class="image"><img src="/images/resource/pricing-1.png" alt=""></figure>
                <div class="price-box">
                  <h4 class="price"><sup>$</sup>49</h4>
                  <span class="validaty">/ Monthly</span>
                </div>
                <h4 class="title">Basic Plan</h4>
                <ul class="features">
                  <li>24/7 system monitoring</li>
                  <li>Security management</li>
                  <li>Patch management</li>
                  <li>Remote support</li>
                </ul>
                <div class="btn-box">
                  <NuxtLink to="page-pricing" class="theme-btn btn-style-one hvr-light"><span class="btn-title">Choose plan</span></NuxtLink>
                </div>
              </div>
            </div>

            <!-- Pricing Block -->
            <div class="pricing-block style-two pull-left">
              <div class="inner-box">
                <figure class="image"><img src="/images/resource/pricing-2.png" alt=""></figure>
                <div class="price-box">
                  <h4 class="price"><sup>$</sup>69</h4>
                  <span class="validaty">/ Monthly</span>
                </div>
                <h4 class="title">Pro Plan</h4>
                <ul class="features">
                  <li>24/7 system monitoring</li>
                  <li>Security management</li>
                  <li>Patch management</li>
                  <li>Remote support</li>
                </ul>
                <div class="btn-box">
                  <NuxtLink to="page-pricing" class="theme-btn btn-style-three"><span class="btn-title">Choose plan</span></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
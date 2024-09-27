<template>
    <section class="services-details">
      <div class="container">
        <div class="row">
          <!--Start Services Details Sidebar-->
          <div class="col-xl-4 col-lg-4">
            <div class="service-sidebar">
              <!--Start Services Details Sidebar Single-->
              <div class="sidebar-widget service-sidebar-single">
  
                <div class="sidebar-service-list">
                  <ul>
                    <li ><NuxtLink to="website-development" class="current"><i class="fas fa-angle-right"></i><span>Web Apps Development</span></NuxtLink></li>
                    <li class="current" ><NuxtLink to="graphic-design"><i class="fas fa-angle-right"></i><span>Graphic Designing</span></NuxtLink></li>
                    <li><NuxtLink to="ui-ux-design"><i class="fas fa-angle-right"></i><span>UI / UX Designing</span></NuxtLink></li>
                    <li ><NuxtLink to="mobile-apps-development"><i class="fas fa-angle-right"></i><span>Mobile Apps Development</span></NuxtLink></li>
                     </ul>
                </div>
  
                <div class="service-details-help">
                  <div class="help-shape-1"></div>
                  <div class="help-shape-2"></div>
                  <h2 class="help-title">Contact with <br> us for any <br> advice</h2>
                  <div class="help-icon">
                    <span class=" lnr-icon-phone-handset"></span>
                  </div>
                  <div class="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <NuxtLink to="tel:+46 7 35 35 34 34">+46735353434</NuxtLink>
                  </div>
                </div>
  
                <!--Start Services Details Sidebar Single-->
                <!-- <div class="sidebar-widget service-sidebar-single mt-4">
                  <div class="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                    <NuxtLink to="#" class="theme-btn btn-style-one d-grid"><span class="btn-title"><span class="fas fa-file-pdf"></span> download pdf file</span></NuxtLink>
                  </div>
                </div> -->
              </div>
              <!--End Services Details Sidebar-->
            </div>
          </div>
  
          <!--Start Services Details Content-->
          <div class="col-xl-8 col-lg-8">
            <div class="services-details__content">
              <img src="/images/resource/service-2.jpg" alt="" />
              <h3 class="mt-4">Graphic Design Services</h3>
              <p style="text-align: justify;">
                We are pleased to provide a  professional graphic design services that seamlessly integrate with your brand. With our expertise, we can enhance your visual identity by creating captivating graphics and attractive visual styles. Whether you need a complete brand redesign or just minor adjustments, we are here to help improve your brand image for greater impact and engagement. Contact us today to discuss your specific needs and let us create a visual identity that sets you apart from the rest.
            </p>
              <div class="content mt-40">
                <!-- <div class="text">
                  <h3>Service Center</h3>
                  <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <blockquote class="blockquote-one">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur</blockquote>
                </div> -->
                <!-- <div class="feature-list mt-4">
                  <div class="row clearfix">
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <img class="mb-3" src="/images/resource/service-d1.jpg" alt="images" />
                      <p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 column">
                      <img class="mb-3" src="/images/resource/service-d2.jpg" alt="images" />
                      <p>Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing</p>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
              <!--  -->
            </div>
          </div>
          <!--End Services Details Content-->
        </div>
      </div>
    </section>
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
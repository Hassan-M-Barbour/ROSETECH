<template>
    <section class="services-details">
      <div class="container">
        <div class="row">
          <!--Start Services Details Sidebar-->
          <div class="col-xl-4 col-lg-4">
            <div class="service-sidebar">
               <!--Start Services Details Sidebar Single-->
               <div class="sidebar-widget service-sidebar-single">
  
  <div class="sidebar-service-listAr">
    <ul>
      <li class="current"><NuxtLink to="website-development" class="current"><i class="fas fa-angle-right"></i><span>تطوير تطبيقات الويب</span></NuxtLink></li>
      <li ><NuxtLink to="graphic-design"><i class="fas fa-angle-right"></i><span>تصميم الجرافيك</span></NuxtLink></li>
      <li><NuxtLink to="ui-ux-design"><i class="fas fa-angle-right"></i><span>تصميم واجهة المستخدم وتجربة المستخدم</span></NuxtLink></li>
      <li><NuxtLink to="mobile-apps-development"><i class="fas fa-angle-right"></i><span>تطوير تطبيقات الهاتف المحمول</span></NuxtLink></li>
       </ul>
  </div>

  <div class="service-details-help">
    <div class="help-shape-1"></div>
    <div class="help-shape-2"></div>
    <h2 class="help-title">انصل بنا للحصول على اي نصيحة</h2>
    <div class="help-icon">
      <span class=" lnr-icon-phone-handset"></span>
    </div>
    <div class="help-contact">
      <p>هل تحتاج إلى مساعدة؟ تحدث إلى أحد الخبراء</p>
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
              <h3 class="mt-4">خدمات التصميم الجرافيكي</h3>
              <p style="text-align: justify;">
                نحن متحمسون لتقديم خدمات التصميم الجرافيكي الاحترافية التي تنسجم بسلاسة مع هويتك التجارية. بفضل خبرتنا، يمكننا تعزيز العلامة التجارية الخاصة بك من خلال تصميم رسومات لافتة للنظر وأنماط بصرية فريدة. سواء كنت تبحث عن إعادة تصميم شاملة لعلامتك التجارية أو ترغب في إجراء تعديلات طفيفة، نحن هنا لمساعدتك في تحسين صورة علامتك التجارية لتحقيق تأثير أكبر وزيادة التفاعل. تواصل معنا اليوم لمناقشة احتياجاتك الخاصة، ودعنا نساعدك في إنشاء هوية بصرية تميزك عن المنافسين.
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
  <style  scoped>
  .fa-angle-right::before {
      content: "\f053"!important;
  }
  </style>
<template>
  <section class="page-title" style="background-image: url(/images/background/page-title.jpg);">
    <div class="auto-container">
      <div class="title-outer text-center">
        <h1 class="title">{{ title }}</h1>
        <ul class="page-breadcrumbAr">
          <li><NuxtLink to="/ar">الرئيسية</NuxtLink></li>
          <li><NuxtLink to="/ar">الصفحة</NuxtLink></li>
          <li>{{ title }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "PageTitle",
    props: {
      title: {
        type: String
      }
    }
  }
</script>
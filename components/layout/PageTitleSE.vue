<template>
    <section class="page-title" style="background-image: url(/images/background/page-title.jpg);">
      <div class="auto-container">
        <div class="title-outer text-center">
          <h1 class="title">{{ title }}</h1>
          <ul class="page-breadcrumb">
            <li><NuxtLink to="/">Hem</NuxtLink></li>
            <li><NuxtLink to="/">Sidor</NuxtLink></li>
            <li>{{ title }}</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  <script>
    export default {
      name: "PageTitleSE",
      props: {
        title: {
          type: String
        }
      }
    }
  </script>
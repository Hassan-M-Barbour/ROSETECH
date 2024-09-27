<template>
   <div class="Arbody">
  <LayoutPageTitleAr title="أخبار" />
  <!-- <SectionsInnerpagesNewsgrid/> -->
  <SectionsHome1BlogAr/>
   </div>
</template>
<script setup>
definePageMeta({
  layout: 'ar'
})

useHead({
  title: 'أخبار ROSETECH | أحدث التحديثات والمقالات',
  meta: [
    { name: 'description', content: 'تابع آخر أخبار ROSETECH، بما في ذلك التحديثات والمقالات الجديدة حول تقنيات البرمجيات، استراتيجيات المحتوى، وأحدث الاتجاهات في عالم التكنولوجيا.' },
    { name: 'keywords', content: 'أخبار ROSETECH, آخر أخبار ROSETECH, تحديثات ROSETECH, مدونة ROSETECH, مقالات تقنية, استراتيجيات المحتوى, اتجاهات التكنولوجيا, تحديثات البرمجيات, مقالات تقنية حديثة, أخبار التكنولوجيا, مقالات عن جوجل جيميني, تحديثات في SEO, تحليلات برمجية, أخبار التكنولوجيا الحديثة, مواضيع جديدة في البرمجيات, RoseTech AB, Företagsvägen 10, P.O. 227 61 Lund, +46 7 35 35 34 34' },
    { name: 'title', content: 'أخبار ROSETECH | أحدث التحديثات والمقالات' }
  ]
});
</script>
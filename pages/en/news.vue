<template>
  <LayoutPageTitle title="News" />
  <!-- <SectionsInnerpagesNewsgrid/> -->
  <SectionsHome1Blog/>
</template>
<script setup>
definePageMeta({
  layout: 'default'
})
useHead({
  title: 'ROSETECH News | Latest Updates, Blog Posts & Industry Insights',
  meta: [
    { name: 'description', content: 'Stay informed with ROSETECH\'s latest news, updates, and blog articles. Explore industry insights, technology trends, and company developments in our comprehensive news section.' },
    { name: 'keywords', content: 'ROSETECH news, Latest updates from ROSETECH, Technology industry news, Software development blog, ROSETECH blog articles, Company news and updates, Digital trends and insights, Software industry updates, Latest blog posts, Tech news and articles, Innovation news at ROSETECH, Software development trends, Blog updates and insights, ROSETECH company news, Technology articles and updates' },
    { name: 'title', content: 'ROSETECH News | Latest Updates, Blog Posts & Industry Insights' }
  ]
})
</script>
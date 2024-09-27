<template>
  <LayoutPageTitleSE title="Nyheter" />
  <!-- <SectionsInnerpagesNewsgrid/> -->
  <SectionsHome1BlogSE/>
</template>
<script setup>
definePageMeta({
  layout: 'se'
})

useHead({
  title: 'ROSETECH Nyheter | Senaste nytt, inblick i industrin',
  meta: [
    { 
      name: 'description', 
      content: 'Håll dig uppdaterad med ROSETECH’s senaste nyheter, uppdateringar och bloggartiklar. Få inblick och utforska sektorn, teknologiska trender och utvecklingar inom företag genom vår omfattande nyhetssektion.' 
    },
    { 
      name: 'keywords', 
      content: 'ROSETECH nyheter, Senaste uppdateringarna från ROSETECH, Teknikindustrins nyheter, Mjukvaruutvecklingsblogg, ROSETECH bloggartiklar, Företagsnyheter och uppdateringar, Digitala trender och upptäckter, Mjukvaruindustrins uppdateringar, Senaste blogginläggen, Tech-nyheter och artiklar, Innovationsnyheter hos ROSETECH, Mjukvaruutvecklings-trender, Blogg-uppdateringar och insikter, ROSETECH företagsnyheter, Nyheter och uppdateringar i teknologi, RoseTech AB, Företagsvägen 10, P.O. 227 61 Lund, +46 7 35 35 34 34' 
    },
    { 
      name: 'title', 
      content: 'ROSETECH Nyheter | Senaste nytt, inblick i industrin' 
    }
  ]
})
</script>
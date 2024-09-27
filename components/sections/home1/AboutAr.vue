<!-- 
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'public/css/styleAr.css'
        }
      ]
    }
  }
}
</script> -->

<!-- <style scoped>
.about-section{
	direction:rtl;
  }
</style> -->
<template>
	<!-- <component is="style">
  .about-section{
	direction:rtl;
  }
  .about-section .image-column .exp-box {
    position: absolute;
    right: -80px;
    top: 90px;
    padding: 40px 40px 60px;
    background-image: url(/_nuxt/public/images/icons/shape2.png);
    height: 170px;
    width: 303px;
}
</component> -->
	<section class="about-sectionAr pt-7">
		<div class="auto-container">
			<div class="row">
				<!-- Content Column -->
				<div class="content-column col-lg-6 order-2 wow fadeInRight pull-right">
					<div class="inner-column">
						<div class="sec-title">
							<span class="sub-title">تعرف علينا</span>
							<h2>ارتقِ بتجربتك الرقمية مع حلول البرمجيات المتطورة. </h2>
							<div class="text">في ROSETECH، لا نعتبر أنفسنا مجرد شركة تطوير برمجيات؛ بل نحن مهندسو الإبداع، ومحركو التقدم، ومبتكرون في مجال التميز الرقمي. نحن ندرك أنه في البيئة الرقمية المتغيرة بسرعة اليوم، يعتمد نجاحك على جودة وكفاءة الحلول البرمجية التي تقدمها. وهنا نتدخل - لنقوم بتحويل أفكارك إلى تجارب رقمية سلسة، قوية، وبديهية.</div>
						</div>

						<!-- Info Box -->
						<div class="info-box">
							<div class="inner">
								<i class="icon flaticon-targeted-marketing"></i>
								<h5 class="title">الريادة في تطوير البرمجيات</h5>
								<div class="text">نقدم مجموعة متكاملة من خدمات التطوير لتلبية احتياجات الشركات بمختلف أحجامها.</div>
							</div>
						</div>

						<!-- Info Box -->
						<div class="info-box">
							<div class="inner">
								<i class="icon flaticon-diplomat"></i>
								<h5 class="title">المطورين الخبراء</h5>
								<div class="text">يتمتع فريقنا من المطورين ذوي الخبرة بالمهارة في مختلف لغات البرمجة والأطر، مما يسمح لنا بإنشاء حلول مخصصة مصممة لتناسب متطلباتك المحددة.</div>
							</div>
						</div>
						
						<div class="other-info">
							<!-- <div class="author-info">
								<div class="inner">
									<figure class="thumb"><img src="/images/resource/avatar.jpg" alt=""></figure>
									<h5 class="name">Aleesha brown</h5>
									<span class="designation">CEO & CO Founder</span>
								</div>
							</div> -->

							<NuxtLink to="/ar/about" class="theme-btn btn-style-one"><span class="btn-title">اكتشف المزيد</span></NuxtLink>
						</div>
					</div>
				</div>

				<!-- Image Column -->
				<div class="image-column col-lg-6 wow fadeInLeft pull-right">
					<div class="image-box">
						<span class="icon-dots bounce-y"></span>
						<span class="icon-circle zoom-one"></span>
						<figure class="image-1 wow fadeIn"><img src="/images/resource/about-1.jpg" alt=""></figure>
						<figure class="image-2 wow fadeIn" data-wow-delay="600ms"><img src="/images/resource/about-2.jpg" alt=""></figure>
						<div class="exp-box">
							<div class="inner">
								<i class="icon flaticon-promotion"></i>
								<span class="count">عشرات</span>
								<div class="text">الخبرات العملية</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
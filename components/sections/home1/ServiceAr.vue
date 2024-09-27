<template>
	
	<!-- service section -->
	<section class="services-section">
		<div class="bg-shape"></div>
		<div class="bg bg-pattern-1"></div>

		<div class="auto-container">
			<div class="sec-title light">
				<div class="row">
					<div class="col-lg-7">
						<span class="sub-title">خدماتنا</span>
						<h2>دعونا نبني المستقبل معًا</h2>
					</div>
					<div class="col-lg-5">
						<div class="text">اكتشف الخدمات التي نقدمها</div>
					</div>
				</div>
			</div>

			<div class="row">
				<!-- Service Block -->
				<div class="service-block col-lg-3 col-md-6 wow fadeInUp">
					<div class="inner-box">
						<div class="image-box">
							<figure class="image"><img src="/images/resource/service-1.jpg" alt=""></figure>
						</div>
						<div class="content-box">
							<i class="icon flaticon-web-development"></i>
							<h5 class="title"> تطوير <br>تطبيقات الويب</h5>
						</div>
						<div class="hover-content">
							<i class="icon flaticon-web-development"></i>
							<h5 class="title"><NuxtLink to="website-development">تطوير <br>تطبيقات الويب</NuxtLink></h5>
							<div class="text">استمتع بخدمات تطوير تطبيقات الويب الشاملة ...</div>
						</div>
					</div>
				</div>

				<!-- Service Block -->
				<div class="service-block col-lg-3 col-md-6 wow fadeInUp">
					<div class="inner-box">
						<div class="image-box">
							<figure class="image"><img src="/images/resource/service-2.jpg" alt=""></figure>
						</div>
						<div class="content-box">
							<i class="icon flaticon-design"></i>
							<h5 class="title">تصميم <br>الغرافيك</h5>
						</div>
						<div class="hover-content">
							<i class="icon flaticon-design"></i>
							<h5 class="title"><NuxtLink to="graphic-design">تصميم <br>الغرافيك</NuxtLink></h5>
							<div class="text">يسعدنا أن نقدم خدمات التصميم الجرافيكي الاحترافية التي تتوافق بسلاسة مع...</div>
						</div>
					</div>
				</div>

				<!-- Service Block -->
				<div class="service-block col-lg-3 col-md-6 wow fadeInUp">
					<div class="inner-box">
						<div class="image-box">
							<figure class="image"><img src="/images/resource/service-3.jpg" alt=""></figure>
						</div>
						<div class="content-box">
							<i class="icon flaticon-megaphone"></i>
							<h5 class="title">تصميم <br>واجهة المستخدم / تجربة المستخدم </h5>
						</div>
						<div class="hover-content">
							<i class="icon flaticon-megaphone"></i>
							<h5 class="title"><NuxtLink to="ui-ux-design"> تصميم <br>واجهة المستخدم / تجربة المستخدم </NuxtLink></h5>
							<div class="text">انطلق في رحلة تركز على المستخدم مع خدمات UI/UX الاحترافية لدينا....</div>
						</div>
					</div>
				</div>

				<!-- Service Block -->
				<div class="service-block col-lg-3 col-md-6 wow fadeInUp">
					<div class="inner-box">
						<div class="image-box">
							<figure class="image"><img src="/images/resource/service-4.jpg" alt=""></figure>
						</div>
						<div class="content-box">
							<i class="icon flaticon-visitor"></i>
							<h5 class="title"> تطبيقات<br>الموبايل</h5>
						</div>
						<div class="hover-content">
							<i class="icon flaticon-visitor"></i>
							<h5 class="title"><NuxtLink to="mobile-apps-development">تطبيقات <br>الموبايل</NuxtLink></h5>
							<div class="text">قم بتحويل تواجدك على الهاتف المحمول من خلال خدمات تطوير تطبيقات الهاتف المحمول السلسة لدينا....</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- End service section -->
</template>
<style scoped>
.sec-title h2:before {
    position: absolute;
    right: 5px;
    top: 32px;
    height: 30px;
    width: 38px;
    border-radius: 5px 5px 5px 0;
    background-color: var(--bg-theme-color1);
    transform: skew(-15deg);
    z-index: -1;
    content: "";
}
</style>
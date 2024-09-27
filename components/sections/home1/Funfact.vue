<template>
 <!-- End Fun Fact Section-->
	<section class="fun-fact-section pull-up">
		<div class="bg bg-pattern-3"></div>
		<div class="auto-container">
			<div class="fact-counter">
				<div class="row">
					<!-- Counter block-->
					<div class="counter-block col-lg-3 col-md-6 wow fadeInUp">
						<div class="inner">
							<div class="icon-box"><i class="flaticon-completed-task"></i></div>
							<div class="count-box"><ElementsCounterUp :end="990"/></div>
							<h4 class="counter-title">Projects Completed</h4>
						</div>
					</div>
			
					<!--Counter block-->
					<div class="counter-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
						<div class="inner">
							<div class="icon-box"><i class="flaticon-settings"></i></div>
							<div class="count-box"><ElementsCounterUp :end="370"/></div>
							<h4 class="counter-title">Repeat Customers</h4>
						</div>
					</div>
			
					<!--Counter block-->
					<div class="counter-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="600ms">
						<div class="inner">
							<div class="icon-box"><i class="flaticon-rating"></i></div>
							<div class="count-box"><ElementsCounterUp :end="860"/></div>
							<h4 class="counter-title">Satisfied Customers</h4>
						</div>
					</div>
			
					<!--Counter block-->
					<div class="counter-block col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="900ms">
						<div class="inner">
							<div class="icon-box"><i class="flaticon-group"></i></div>
							<div class="count-box"><ElementsCounterUp :end="88"/></div>
							<h4 class="counter-title">Team Members</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
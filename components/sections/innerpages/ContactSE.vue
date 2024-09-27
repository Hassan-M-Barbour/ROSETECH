
<script setup>


  const name = ref('')
  const email = ref('')
  const subject = ref('')
  const telephone = ref('')
  const message = ref('')
  
  async function onSubmit(){
    const emailValid = validateEmail(email.value)
    
    // While in the category of validations, let's also make sure the user will not send us an empty email
    const messageValid = message.value.length > 8
    
    if(emailValid && messageValid){
       
        await $fetch('/api/contact', {
         method:"post",
        
        // The need to stringify objects to JSON when sending it to an server API
        body: JSON.stringify({
          name: name.value,
          mail: email.value,
		  subject:subject.value,
		  telephone:telephone.value,
          message: message.value
        }),
       
      }).then(() => {
        alert('Thanks for contacting us , our team will Respond to you ASAP!')
        name.value = '',
        email.value = '',
        message.value = '',
		subject.value = '',
		telephone.value = '',
        console.log('email sent!')
      })
    
    }
  }
</script>

<template>
	<!--Contact Details Start-->
	<section class="contact-details">
		<div class="container ">
			<div class="row">
				<div class="col-xl-7 col-lg-6">
					<div class="sec-title">
						<span class="sub-title">SKICKA ETT MAIL</span>
						<h3>Skriv gärna dina funderingar</h3>
					</div>
					<!-- Contact Form -->
					<!-- <form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post"> -->
						<form id="contact_form" @submit.prevent="onSubmit" name="contact_form" class="" >
						<div class="row">
							<div class="col-sm-6">
								<div class="mb-3">
									<input name="form_name"  v-model="name"  class="form-control" type="text" placeholder="Namn" required>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="mb-3">
									<input name="form_email"  v-model="email" class="form-control required email" type="email" placeholder="E-post" required>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="mb-3">
									<input name="form_subject" v-model="subject" class="form-control required" type="text" placeholder="Ämne" required>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="mb-3">
									<input name="form_phone" v-model="telephone" class="form-control" type="text" placeholder="Telefon" required>
								</div>
							</div>
						</div>
						<div class="mb-3">
							<textarea name="form_message" v-model="message" class="form-control required" rows="7" placeholder="Meddelande" required minlength="8"></textarea>
						</div>
						<div class="mb-3">
							<input name="form_botcheck" class="form-control" type="hidden" value="" />
							<button type="submit" class="theme-btn btn-style-one" data-loading-text="Please wait..."><span class="btn-title">Skicka</span></button>
							<button type="reset" class="theme-btn btn-style-one bg-theme-color5"><span class="btn-title">Återställ</span></button>
						</div>
					</form>
					<!-- Contact Form Validation-->
				</div>
				<div class="col-xl-5 col-lg-6">
					<div class="contact-details__right">
						<div class="sec-title">
							<span class="sub-title">BEHÖVER DU HJÄLP?</span>
							<h3>Kontakta oss</h3>
							<div class="text">
								<!-- Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna. -->
							</div>
						</div>
						<ul class="list-unstyled contact-details__info">
							<li>
								<div class="icon">
									<span class="lnr-icon-phone-plus"></span>
								</div>
								<div class="text">
									<h6>Har du några frågor?</h6>
									<NuxtLink to="tel:+46 7 35 35 34 34"><span>Ring oss på</span> +46 7 35 35 34 34</NuxtLink>
								</div>
							</li>
							<li>
								<div class="icon">
									<span class="lnr-icon-envelope1"></span>
								</div>
								<div class="text">
									<h6>Maila oss till</h6>
									<NuxtLink to="mailto:info@rosetech.se">info@rosetech.se</NuxtLink>
								</div>
							</li>
							<li>
								<div class="icon">
									<span class="lnr-icon-location"></span>
								</div>
								<div class="text">
									<h6>Besök när som helst</h6>
									<span>Företagsvägen 10, P.O. 227 61 Lund</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--Contact Details End-->

	<!-- Map Section-->
	<!-- <section class="map-section">
		<iframe  class="map w-100"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
	</section> -->
	<!--End Map Section-->
</template>
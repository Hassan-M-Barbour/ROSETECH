<script setup>


  const name = ref('')
  const email = ref('')
  const message = ref('')
  
  async function onSubmit(){
    const emailValid = validateEmail(email.value)
    
    // While in the category of validations, let's also make sure the user will not send us an empty email
    const messageValid = message.value.length > 8
    
    if(emailValid && messageValid){
       
        await $fetch('/api/send', {
        method:"post",
        // The need to stringify objects to JSON when sending it to an server API
        body: JSON.stringify({
          name: name.value,
          mail: email.value,
          message: message.value
        }),
       
      }).then(() => {
        alert('Thanks for contacting us , our team will Respond to you ASAP!')
        name.value = '',
        email.value = '',
        message.value = '',
        console.log('email sent!')
      })
    
    }
  }
</script>

<template>
    <section class="contact-section">
      <div class="anim-icons">
        <span class="icon icon-line3"></span>
        <span class="icon icon-arrow1"></span>
        <span class="icon icon-arrow2"></span>
      </div>
      <div class="auto-container">
        <div class="outer-box">
          <div class="bg bg-pattern-5"></div>
  
          <div class="sec-title">
            <span class="sub-title">HÖR AV DIG</span>
            <h2>Vi vill jobba med dig!</h2>
          </div>
          
          <!-- Contact Form -->
          <div class="contact-form wow fadeInLeft">
            <!--Contact Form-->
            <form @submit.prevent="onSubmit" id="contact-form">
              <!-- <form @submit.prevent="handleSubmit" id="contact-form"> -->
              <div class="row">
  
               
                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                  <input type="text"  v-model="name" name="name" placeholder="Namn" required>
                </div>
                <div class="form-group col-lg-6 col-md-12 col-sm-12">
                  <input type="email" v-model="email" name="Email" placeholder="E-postadress" required>
                </div>
                <div class="form-group col-lg-12">
                  <textarea name="message" v-model="message"  placeholder="Meddelande"  required minlength="8"></textarea>
                </div>
                <div class="form-group col-lg-12">
                  <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span class="btn-title"  >Skicka</span></button>
                </div>
              </div>
            </form>
             <!-- </form> -->
          </div>
          <!--End Contact Form -->
          <figure class="image"><img src="/images/resource/girl.png" alt=""></figure>
        </div>
      </div>
    </section>
  </template>


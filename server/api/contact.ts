// Add resend module and create a new instance with our API Key
import { Resend } from "resend";
//const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_848rhH6R_3pTrrCysSvkyGvxMPWPsJ7E5");

// Event Handler Function
export default defineEventHandler(async (event) => {
  // Here, the 'event' will be the object we will pass from ContactForm.vue, with all the relevant information
  const { name, email, subject , phone, message } = await readBody(event);

  try {
    var myArray = ['Axel', 'Matelda']; 
    var rand = myArray[(Math.random() * myArray.length) | 0]
    await  $fetch("/api/addContact", {
      method: "POST",
      body: {
        name: name,
        email: email,
        message:message,
        subject:subject,
        phone:phone,
   emp:rand,
      },
    });
    
    await resend.emails.send({
      // We can use one of our emails as the sender
      from: "Acme <onboarding@resend.dev>",

      // The email we want to receive the message to
      to: "barbour.hassan@gmail.com",

      // Let's add the users name and mail address as a subject
      subject: ` ${subject} from ${name}`,

      // The message content
      html: "Name:" + name + "<br>" + "Email:" + email + "<br>" + "Phone:" +telephone + "<br>" + message,
    });
    // If the await if successfully, the function will return 'success: true'
    // Otherwise, it will fall into catch, and return the error object
    return {
      success: true,
    };
  } catch (err) {
    return { err };
  }
});

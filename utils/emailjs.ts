import { init, sendForm } from 'emailjs-com';

// const init = dynamic(import('emailjs-com').then((a) => a.init), {ssr: false});
// dynamic(() => import('emailjs-com'));

init("user_nCHWPAXlvh206bYB5x1Ma");


const apiKey = {
  USER_ID: `user_nCHWPAXlvh206bYB5x1Ma`, //userID
  TEMPLATE_ID: `template_pzs2h2j`,
  SERVICE_ID: 'service_utuibsj'
  }

export const handleSubmitEmail = (e: any) => {

  sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
  .then((result: any) => {
  console.log("Message Sent, We will get back to you shortly", result.text);
  },
  (error) => {
  console.log("An error occurred, Please try again", error.text);
  // alert('An error occurred, Please try again')
  });
  };

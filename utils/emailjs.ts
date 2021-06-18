import{ init, sendForm } from 'emailjs-com';
init("user_nCHWPAXlvh206bYB5x1Ma");

const apiKey = {
  USER_ID: `user_nCHWPAXlvh206bYB5x1Ma`, //userID
  TEMPLATE_ID: `template_15bmlpm`,
  SERVICE_ID: 'service_utuibsj'
  }

export const handleSubmit = (e) => {
  e.preventDefault(); // Prevents default refresh by the browser
  sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
  .then((result: any) => {
  console.log("Message Sent, We will get back to you shortly", result.text);
  },
  (error) => {
  console.log("An error occurred, Please try again", error.text);
  });
  };

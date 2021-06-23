import React from 'react'
import { handleSubmitEmail } from '../../utils/emailjs';



const handleSubmit = async (e: any) => {
  e.preventDefault();
  handleSubmitEmail(e);

  // console.log(response)
  // if (response) {
  //   console.log('deu certo', response)
  // } else {
  //   console.log(response)
  // }
}

const Contact: React.FC = () => {
  return (
    <>
  <header className="navbar">
  <div className="container">
    <div className="navba--section navbar--logo">
      <a href="/">
        <img src="/logo-navbar.svg" alt="Offlet" />
      </a>
    </div>

    <div className="navbar--section navbar--search">
      <div className="input input-withIcon input-fullWidth">
        <input id="test1" placeholder="Search product..." type="text"/>
        <svg className="input-icon" width="26" height="26" viewBox="0 0 26 26" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.8333 19.5C12.8331 19.5 14.6715 18.8121 16.1384 17.6713L20.9007 22.4337L22.4325 20.9018L17.6702 16.1395C18.812 14.6716 19.5 12.8332 19.5 10.8333C19.5 6.05475 15.6119 2.16666 10.8333 2.16666C6.05471 2.16666 2.16663 6.05475 2.16663 10.8333C2.16663 15.6119 6.05471 19.5 10.8333 19.5ZM10.8333 4.33333C14.418 4.33333 17.3333 7.24858 17.3333 10.8333C17.3333 14.4181 14.418 17.3333 10.8333 17.3333C7.24854 17.3333 4.33329 14.4181 4.33329 10.8333C4.33329 7.24858 7.24854 4.33333 10.8333 4.33333Z"
            fill="#212E63" />
        </svg>
      </div>
    </div>

    <div className="navbar--section navbar--menu">
      <div className="burger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>

       <ul className="menu">
     <li className="menu-item">
         <a href="/privacy" target="_blank">Privacy Policy</a>
     </li>
     <li className="menu-item">
         <a href="/contact" target="_blank">Contact</a>
     </li>
 </ul>
    </div>
  </div>
</header>

<main className="wrapper">

    <div className="page-heading">
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col">
                    <h2 className="page-heading__title">Contact</h2>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    </div>

    <div className="page-content container">
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col">
                <form id="contact-form" onSubmit={(e: any) => handleSubmit(e)}>
                    <label className="label" >Name</label>
                    <div className="input input-fullWidth">
                        <input name="user_name" placeholder="Name" type="text" />
                    </div>
                    <label className="label" >Email</label>
                    <div className="input input-fullWidth">
                        <input name="user_email" placeholder="Email" type="text" />
                    </div>
                    <label className="label" >Subject</label>
                    <div className="input input-fullWidth">
                        <input name="user_subject" placeholder="Subject" type="text"/>
                    </div>
                    <label className="label" >Message</label>
                    <div className="textarea textarea-fullWidth">
                        <textarea name="message"></textarea>
                    </div>
                    <button className="button button--accent" type="submit">Send</button>
                </form>
            </div>
            <div className="col-sm-2"></div>
        </div>
    </div>

</main>



  <div id="footer">
    <div className="container">

            <div className="brand-footer">
                <img src="/logo-offlet.svg" alt="Offlet"/>
            </div>

            <div className="widget widget-follow">
                <ul className="social-menu">
                  <li className="social-item">
                        <a href="https://www.instagram.com/offlet_app/" target="_blank">
                            <svg className="icone" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.806 8.28393C17.4014 8.28393 17.884 7.80129 17.884 7.20593C17.884 6.61057 17.4014 6.12793 16.806 6.12793C16.2106 6.12793 15.728 6.61057 15.728 7.20593C15.728 7.80129 16.2106 8.28393 16.806 8.28393Z"
                                    fill="#F0F1F4" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M11.999 7.37598C9.44501 7.37598 7.37601 9.44598 7.37601 11.999C7.37601 14.553 9.44501 16.623 11.999 16.623C14.551 16.623 16.622 14.553 16.622 11.999C16.622 9.44598 14.551 7.37598 11.999 7.37598ZM11.999 15.003C10.34 15.003 8.99501 13.658 8.99501 12C8.99501 10.341 10.34 8.99698 11.999 8.99698C13.658 8.99698 15.001 10.341 15.001 12C15.001 13.658 13.658 15.003 11.999 15.003Z"
                                    fill="#F0F1F4" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M17.9 3.47791C19.109 3.94491 20.064 4.90091 20.533 6.10991C20.801 6.81791 20.941 7.56891 20.954 8.32691C21.01 9.28391 21.01 9.59391 21.01 12.0369C21.01 14.4799 20.997 14.7849 20.954 15.7469C20.939 16.4949 20.798 17.2329 20.535 17.9329C20.066 19.1419 19.111 20.0969 17.902 20.5659C17.202 20.8279 16.463 20.9699 15.716 20.9849C14.761 21.0399 14.448 21.0399 12.006 21.0399C9.56401 21.0399 9.25901 21.0269 8.29601 20.9849C7.54601 20.9609 6.80701 20.8069 6.11101 20.5349C4.90101 20.0669 3.94601 19.1109 3.47701 17.9029C3.21401 17.2019 3.07301 16.4639 3.05801 15.7159C3.00201 14.7589 3.00201 14.4479 3.00201 12.0059C3.00201 9.56291 3.01501 9.25791 3.05801 8.29591C3.07301 7.54791 3.21401 6.80991 3.47701 6.10991C3.94501 4.90091 4.90001 3.94491 6.11001 3.47791C6.80901 3.21391 7.54801 3.07291 8.29401 3.05791C9.24901 3.00391 9.56201 3.00391 12.004 3.00391C14.446 3.00391 14.751 3.01591 15.714 3.05791C16.462 3.07391 17.201 3.21491 17.9 3.47791ZM19.004 17.3299C19.204 16.7889 19.308 16.2179 19.315 15.6419V15.6429H19.326C19.369 14.6869 19.369 14.4249 19.369 11.9889C19.369 9.55191 19.358 9.28491 19.315 8.33391C19.306 7.76391 19.2 7.19891 19.004 6.66491C18.699 5.87791 18.078 5.25591 17.292 4.95291C16.757 4.75391 16.193 4.64891 15.622 4.64191C14.655 4.58691 14.405 4.58691 11.968 4.58691C9.53101 4.58691 9.26401 4.59891 8.31301 4.64191C7.74401 4.64991 7.17801 4.75491 6.64401 4.95291C5.85501 5.25491 5.23001 5.87591 4.92501 6.66491C4.72501 7.20591 4.62101 7.77591 4.61401 8.35191C4.56101 9.32091 4.56101 9.56991 4.56101 12.0069C4.56101 14.4429 4.57101 14.7109 4.61401 15.6609C4.62301 16.2309 4.72901 16.7959 4.92501 17.3299C5.23001 18.1179 5.85501 18.7399 6.64401 19.0409C7.17801 19.2399 7.74401 19.3449 8.31301 19.3519C9.28101 19.4069 9.53001 19.4069 11.968 19.4069C14.404 19.4069 14.672 19.3959 15.622 19.3519C16.193 19.3439 16.757 19.2399 17.292 19.0409C18.078 18.7389 18.699 18.1169 19.004 17.3299Z"
                                    fill="#F0F1F4" />
                            </svg>


                            </a>
                    </li>

                </ul>
            </div>
    </div>
</div>
    </>
  )
}

export default Contact

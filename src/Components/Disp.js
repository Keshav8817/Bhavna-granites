import React, { Component } from 'react';
import './css/normalize.css';
import './css/main.css';
import './css/bootstrap.min.css';
import './css/fontawesome-all.min.css'
import './css/font/flaticon.css';
import './css/astyle.css';
import logo1 from './logo6_m1.png';
import logo3 from './gigatorb2_logo.jpg';
import './css/personalised.css';
import './Disp.css';
import { render } from '@testing-library/react';


export default class Disp extends Component{

 //   constructor (props){
 //       super(props)
 //       this.state={
 //           // Name: '',
 //           // emailID: '',
 //           // Phone:'',
 //           // Message:''
 //           
 //       }
 //       this.sendemail = this.sendemail.bind(this);
 //       
 //   }
 //   sendemail = (event) =>{
 //       event.preventDefault();
 //           const Name = document.getElementById('name');
 //           const Email = document.getElementById('email');
 //           const Phone = document.getElementById('phone');
 //           const Message = document.getElementById('message');
//
 //           const endpoint ="https://izrzb3vzi9.execute-api.ap-south-1.amazonaws.com/default/sendContactEmail"
//
 //           const data =JSON.stringify({
 //               name: Name.value,
 //               phone: Phone.value,
 //               email: Email.value,
 //               desc: Message.value
 //           })
 //           console.log(data);
 //           const requestOptions = {
 //               method: "POST",
 //               data
 //             };
 //           
 //           fetch(endpoint, data)
 //             .then((response) => {
 //               if (!response.ok) throw new Error("Error in fetch");
 //               return response.json();
 //             })
 //             .then((response) => {
 //              // document.getElementById("result-text").innerText =
 //                // "Email sent successfully!";
 //                console.log("email sent")
 //             })
 //             .catch((error) => {
 //               //document.getElementById("result-text").innerText =
 //                 //"An unkown error occured.";
 //                 console.log(error)
 //             });
 //         }
//

componentDidMount(){
    const form = document.querySelector('form')
        form.addEventListener('submit', event => {
          // prevent the form submit from refreshing the page
          event.preventDefault()
        
          const { name, email, contact, message } = event.target;

          // Use your API endpoint URL you copied from the previous step
        const endpoint =
          "https://izrzb3vzi9.execute-api.ap-south-1.amazonaws.com/default/sendContactEmail";
        // We use JSON.stringify here so the data can be sent as a string via HTTP
          const body = JSON.stringify({
          senderName: name.value,
          senderEmail: email.value,
          message: message.value,
          contact: contact.value
        });
        name.value="";
        email.value="";
        message.value="";
        contact.value="";
        const requestOptions = {
          method: "POST",
          body
        };
      
        fetch(endpoint, requestOptions)
          .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            return response.json();
          })
          .then((response) => {
            console.log("Email sent successfully!");
            document.getElementById("result-text").innerText =
              "Quote sent successfully!";
          })
          .catch((error) => {
              console.log("An unkown error occured.");
              document.getElementById("result-text").innerText =
              "An unkown error occured.";
          });
        })
    }

    render(){
        return (
        <> 
        <section id="contact" className="inner-page-banner bg-common inner-page-margin  Contitle" data-bg-image="img/figure/banner.jpg">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumbs-area">
                            <h1 className="Alleft">Contact With Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-page-wrap Contitle1 ">
                <div className="contact-method-area">
                    <div className="row">
                        <div className="col-md-4 col-sm-8">
                            <div className="contact-list">
                                <h5 className="item-title">Address:</h5>
                                <ul>
                                    <li>E 138 A RIICO INDUSTRIAL AREA AJOLIYA KA KHERA</li>
                                    <li>CHITTORGARH 312001</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8">
                            <div className="contact-list">
                                <h5 className="item-title">Phone:</h5>
                                <ul>
                                    <li>+91 9649427725</li>
                                    <li>+91 8058273426</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8">
                            <div className="contact-list">
                                <h5 className="item-title">E-mail:</h5>
                                <ul>
                                    <li>dimplebaser@gmail.com</li>
                                    <li>bhavanagranitesllp@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-wrap-layout1 Contitle2">
            <div className="main-footer-wrap-layout1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 Alleft">
                            <div className="footer-box-layout1">
                                <div className="footer-logo">
                                    <a href="index.html">
                                        <img src={logo1} alt="logo" className="img-fluid" id="footer-loo"></img>
                                    </a>
                                </div>
                                <div className="footer-contact-info">
                                    <p>Give us call or drop an email, Interaction between us gets things done you know!!</p>
                                    <ul>
                                        <li>bhavanagranitesllp@gmail.com</li>
                                        <li>+91 9649427725</li>
                                        <li>+91 8058273426</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-box-layout1">
                            <h3 className="footer-title">Useful Links</h3>
                                <div className="footer-links">
                                    <ul>
                                        <li>
                                            <a href="#">HOME</a>
                                        </li>
                                        <li>
                                            <a href="#about">ABOUT US</a>
                                        </li>
                                        <li>
                                            <a href="#products">PRODUCTS</a>
                                        </li>
                                                                               
                                    </ul>
                                </div>
                                <ul className="footer-social">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="quotes" className="col-md-4">
                            <div className="footer-box-layout1">
                            <h3 class="footer-title">Quote</h3>
                                <form class="footer-form-box">
                                    <div class="row">
                                        <div class="col-12 form-group">
                                            <input type="text" placeholder="Enter your Name" class="form-control" id="name" name="name" data-error="Name field is required"
                                                required></input>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                        <div class="col-12 form-group">
                                            <input type="email" placeholder="Enter your e-mail" class="form-control" id="email" name="email" data-error="e-mail field is required"
                                                required></input>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                        <div class="col-12 form-group">
                                            <input type="text" placeholder="Enter your Phone Number" class="form-control" id="phone" name="contact"  data-error="contact field is required"
                                                required></input> 
                                            <div class="help-block with-errors"></div>
                                        </div>
                                        <div class="col-12 form-group">
                                            <textarea rows="4" cols="60" class="form-control" placeholder="Message" id="message" name="message" data-error="Message field is required"
                                                required>Message</textarea>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                        <div class="col-12 form-group">
                                            {/* <button type="submit" class="item-btn" onClick={this.sendemail}>SUBMIT</button> */}
                                            <input className="item-btn" type="submit"/>
                                        </div>
                                        <div class="col-12 form-group">
                                        <p id="result-text"></p>
                                        </div>
                                    </div>
                                    <div class="form-response"></div>
                                </form>
                            </div>
                        </div>
                        <p id = "end-note">Website Designed by Gigatorb Software Pvt. Ltd. with ❤️</p>
                    </div>
                </div>
            </div>
        </footer>
        </section>
        </>)};
};
 
   
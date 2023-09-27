import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import StickyHeader from 'react-sticky-header'
//import './index.css';
//
//const aws = require("aws-sdk");
//const ses = new aws.SES({ region: "us-east-1" });
//exports.handler = async function (event) {
//  console.log('EVENT: ', event)
//	// Extract the properties from the event body
//  const { senderEmail, senderName, message } = JSON.parse(event.body)
//  const params = {
//    Destination: {
//      ToAddresses: ["alakhkarmarkar@gigatorb.com"],
//    },
//		// Interpolate the data in the strings to send
//    Message: {
//      Body: {
//        Text: { 
//            Data: `You just got a message from ${senderName} - ${senderEmail}:
//            ${message}` 
//        },
//      },
//      Subject: { Data: `Message from ${senderName}` },
//    },
//    Source: "alakhkarmarkar@gigatorb.com",
//  };
//
//  return ses.sendEmail(params).promise();
//};
//
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


'use strict';

const send = require('./index.js');


async function handler(event) {

  console.log("hi");
  await send();

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Successfully pushed notifications',
  //     input: event,
  //   }, null, 2),
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

// handler(null);

module.exports.pushNotifications = handler
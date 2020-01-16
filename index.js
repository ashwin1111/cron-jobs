const cron = require('node-cron');
const axios = require('axios')

cron.schedule('*/30 * * * *', () => {
  var time = new Date().toLocaleString();
  console.log('job ran at ',time);
  // remainder to drink water everyday 30 minutes :-p
  // this api will trigger us a message in slack
  axios.get('https://slack-bot-quotes.herokuapp.com/jobs');
})
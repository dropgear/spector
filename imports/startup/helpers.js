const moment = require('moment');

Template.registerHelper('selectedIfEquals', (value, check) => {
  return value == check ? 'selected' : '';
});

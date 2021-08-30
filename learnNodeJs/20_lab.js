const { mortgage, overpayment } = require('./21_mortgage');
console.log(mortgage(2e6, 10 , 12));
console.log(overpayment(2e6, 10, 12));

var dayjs = require('dayjs')
require('dayjs/locale/ru');

dayjs.locale('ru')
console.log( dayjs().format('DD MMMM YYYY'));
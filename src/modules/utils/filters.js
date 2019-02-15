import axios from 'axios';
import moment from 'moment'
export  function getCurrentDayOrders(orders) {
  let curDate=new Date();
  const yesterday = new Date(curDate);
  const nextDay = new Date(curDate);
  nextDay.setDate(curDate.getDate() + 1);
  const tomorrow = moment(nextDay).format('MM-DD-YYYY')
  yesterday.setDate(curDate.getDate() - 1);
  const prevDate = moment(yesterday).format('MM-DD-YYYY')
  const nextTime = `${tomorrow + ' 04:00 AM'}`;
  curDate=moment(curDate).format("MM-DD-YYYY");
  const curTime = `${curDate + ' 4:00 AM'}`;
  const todayOrders=[];
  // console.log('orders', orders)
  for (const i of orders) {
    let orderDate = i.created_at;
    orderDate=moment(orderDate).format("MM-DD-YYYY");
    const orderTime=moment(orderDate).format("MM-DD-YYYY hh:mm A");
    // console.log('tes`t',(orderDate == prevDate || orderDate == curDate), orderDate, prevDate, curDate)
    if(orderDate == prevDate || orderDate == curDate){
      // console.log("date check true", i, "=>orderTime",orderTime, "=>prevTime", prevTime, "=>curTime", curTime)
      if(moment(orderTime).isBefore(nextTime) || moment(orderTime).isAfter(curTime)){
        // console.log("in time check true ", i)
        todayOrders.push(i);
       
      }
    }
  }
  return todayOrders;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(employeeData){
    return {
        firstName: employeeData[0],
        familyName: employeeData[1],
        title: employeeData[2],
        payPerHour: employeeData[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(nestedArray){
    return nestedArray.map(employeeArray => createEmployeeRecord(employeeArray));
}

function createTimeInEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const [hourString] = time.split(":");
    const hour = parseInt(hourString);
    const timeInEvent = {
      type: "TimeIn",
      hour: hour,
      date: date,
    };
    this.timeInEvents.push(timeInEvent);
    return this;
  }

  function createTimeOutEvent(dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const [hourString] = time.split(":");
    const hour = parseInt(hourString);
    const timeOutEvent = {
      type: "TimeOut",
      hour: hour,
      date: date,
    };
    this.timeOutEvents.push(timeOutEvent);
    return this;
  }

  function hoursWorkedOnDate(date){
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
    const timeInHour = timeInEvent.hour;
    const timeOutHour = timeOutEvent.hour;
  
    const hoursWorked = timeOutHour - timeInHour;
  
    return hoursWorked/100
  }

  function wagesEarnedOnDate(employeeRecord, date){
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = employeeRecord.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
  }
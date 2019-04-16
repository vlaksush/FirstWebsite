function getCurrentMonth() {
    var today = new Date();
    var monthNumber = today.getMonth();

    var monthNames = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];

    return monthNames[monthNumber];
}

function getCurrentWeekDay() {
    var today = new Date();
    var dayNumber = today.getDay();

    var weekDays = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];

    return weekDays[dayNumber];

}
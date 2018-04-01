/**
* A method to scan a number.
*
* @param    number|string   number
* @return   bool
*/
module.exports = function(string)
{

	var userDate = string.toString(),
	    dateTime,
	    date,
	    time,
	    value;

	// check is valid date
	// if (isNaN(userDate)) {
	//     ////alert("invalid userDate");
	//     console.log('asdadad');
	//     return false;
	// }

	// check the string specifically matches "yyyy-mm-dd hh:mm:ss" and is valid
	function isGregorianLeapYear(year) {
	    return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
	}

	function daysInGregorianMonth(year, month) {
	    var days;

	    if (month == 2) {
	        days = 28;
	        if (isGregorianLeapYear(year)) {
	            days += 1;
	        }
	    } else {
	        days = 31 - ((month - 1) % 7 % 2);
	    }

	    return days;
	}

	if (typeof userDate !== "string") {
	    ////alert("not an iso8601 string");
	    return false;
	} else {
	    dateTime = userDate.split(" ");
	    if (dateTime.length !== 2) {
	        //alert("missing date or time element");
	        return false;
	    } else {
	        date = dateTime[0].split("-");
	        if (date.length !== 3) {
	            //alert("incorrect number of date elements");
	            return false;

	        } else {
	            value = +date[0];
	            if (date[0].length !== 4 || value < -9999 || value > 9999) {
	                //alert("year value is incorrect");
	                return false;

	            }

	            value = +date[1];
	            if (date[1].length !== 2 || value < 1 || value > 12) {
	                //alert("month value is incorrect");
	                return false;

	            }

	            value = +date[2];
	            if (date[2].length !== 2 || value < 1 || value > daysInGregorianMonth(+date[0], +date[1])) {
	                //alert("day value is incorrect");
	                return false;

	            }
	        }

	        time = dateTime[1].split(":");
	        if (time.length !== 3) {
	            //alert("incorrect number of time elements");
	            return false;

	        } else {
	            value = +time[0];
	            if (time[0].length !== 2 || value < 0 || value > 23) {
	                //alert("hour value is incorrect");
	                return false;

	            }

	            value = +time[1];
	            if (time[1].length !== 2 || value < 0 || value > 59) {
	                //alert("minute value is incorrect");
	                return false;

	            }

	            value = +time[2];
	            if (time[2].length !== 2 || value < 0 || value > 59) {
	                //alert("second value is incorrect");
	                return false;

	            }
	        }
	    }
	}
    // Return false if the data is not a number.
    return true;
};



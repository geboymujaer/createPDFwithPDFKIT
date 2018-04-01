/**
* A method to scan a number.
*
* @param    number|string   number
* @return   bool
*/
module.exports = {
    // scanner //
    name: function(string)
    {
        // Validate the string.
        if(new RegExp("[^a-zA-Z ]").test(string) || string.length > 80 ||
        Object.prototype.toString.call(string) !== '[object String]')
        {
            // Return false if the string is not valid.
            return false;
        }

        // Return true if everything is ok.
        return true;
    },

    username: function(string)
    {
        // Validate the string.
        if(new RegExp("[^a-zA-Z0-9]").test(string) || string.length > 20 ||
        Object.prototype.toString.call(string) !== '[object String]')
        {
            // Return false if the string is not valid.
            return false;
        }

        // Return true if everything is ok.
        return true;
    },

    email: function(string)
    {
        // Validate the string.
        if(new RegExp("[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z0-9]+").test(string) === false
        || string.length > 40 || Object.prototype.toString.call(string) !== '[object String]')
        {
            // Return false if the string is not valid.
            return false;
        }

        // Return true if everything is ok.
        return true;
    },

    password: function(string)
    {
        // Validate the string.
        if(new RegExp("[^a-zA-Z0-9 @]").test(string) || string.length > 20 ||
        Object.prototype.toString.call(string) !== '[object String]')
        {
            // Return false if the string is not valid.
            return false;
        }

        // Return true if everything is ok.
        return true;
    },

	amount: function(number)
    {
        // Validate the string.
        if((Object.prototype.toString.call(number) === '[object String]' && new RegExp('[^0-9]').test(number) === false  && number > 0))
        {
            // Return false if the string is not valid.
            return true;
        }

        // Return true if everything is ok.
        return false;
    },

    number: function(number)
    {
        // Checking the number data.
        if(Object.prototype.toString.call(number) === '[object Number]' ||
        (Object.prototype.toString.call(number) === '[object String]' && new RegExp('[^0-9]').test(number) === false))
        {
            // Return true if the data is number.
            return true;
        }

        // Return false if the data is not a number.
        return false;
    },
    // end scanner //
    
    // 12000 ==>> 12.000 
    putComma: function(number) {
        return number.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ".");
    },

    putDate: function(string, time, long) {
        const moment = require('moment');
        const dateFormat = 'YYYY-MM-DD HH:mm:ss';

        if(string === "now"){
            return moment().format(dateFormat);
        }else if(string === "add"){
            if(time){
                if(long){
                    return moment().add(long,time).format(dateFormat);
                }else{
                    return "require argument long";
                }
            }else{
                return "require argument time";
            }
        }else if(string === "utc"){
            return moment().format();
        }else{
            return "require argument now/future";
        }
    },

    getRandomNumber: function(number, number2) {
        const randomInt = require('random-int');
        
        return randomInt(number, number2);
    },
    
    getRandomString: function(number) {
        const randomstring = require("randomstring");
        
        return randomstring.generate(number);
    },
};

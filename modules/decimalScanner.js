/**
* A method to scan a number.
*
* @param    number|string   number
* @return   bool
*/
module.exports = function(number)
{
    // Checking the number data.
    if(Object.prototype.toString.call(number) === '[object Number]' ||
    (Object.prototype.toString.call(number) === '[object String]' && number.match( /^(\d+\.?\d{0,9}|\.\d{1,9})$/ )))
    {
        // Return true if the data is number.
        return true;
    }

    // Return false if the data is not a number.
    return false;
};



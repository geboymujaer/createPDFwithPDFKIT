/**
* A method to scan a string.
*
* @param    string         string
* @param    string         type
* @var      regex object   regex
* @return   bool
*/
module.exports = function(string, type)
{
    var regex, offset;

    switch(type)
    {
        case 'name':
            regex = new RegExp("[^a-zA-Z ]");
            regex = regex.test(string);
            offset = 80;
            break;

        case 'username':
            regex = new RegExp("[^a-zA-Z0-9]");
            regex = regex.test(string);
            offset = 20;
            break;

        case 'email':
            regex = new RegExp("[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z0-9]+");
            regex = regex.test(string) ? false : true;
            offset = 40;
            break;

        case 'password':
            regex = new RegExp("[^a-zA-Z0-9 @]");
            regex = regex.test(string);
            offset = 20;
            break;

        default:
            regex = new RegExp("[^a-zA-Z0-9]");
            regex = regex.test(string);
            offset = 10;
            break;
    }

    // Validate the string.
    if(regex || string.length > offset || Object.prototype.toString.call(string) !== '[object String]')
    {
        // Return false if the string is not valid.
        return false;
    }

    // Return true if everything is ok.
    return true;
};

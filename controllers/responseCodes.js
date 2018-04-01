/**
* A method to generate error or response codes.
*
* @return   mixed
*/
module.exports = {
    // If everything is ok.
    0: 'Success',

    // Internal service problem.
    1: 'Invalid request or internal service problem',
    2: function(value){return 'Not valid format : \'' + value ;},
    3: 'Code has expired',
    
    // Data already exists.
    // 100: function(value){return 'Username \'' + value + '\' already exists';},
    // 101: function(value){return 'Email \'' + value + '\' already exists';},
    // 102: function(value){return 'Phone \'' + value + '\' already exists';},

    100: 'Data already exists',


    // Wrong data format.
    200: 'Wrong username format',
    201: 'Wrong phone format',
    202: 'Wrong pin format',
    203: 'Wrong email format',
    205: 'Wrong schema/query format',

    // Data mismatch.
    300: 'Username/email or password doesn\'t match',


    // Data not found.
    400: 'Data not found',
    401: function(value){return 'Bank account with name \'' + value.name + '\' and account number \''
        + value.number + '\' was not found';},


    // Invalid data.
    500: 'Invalid key',

    // Unknown specified error.
    600: 'An error has occur when adding bank data',


    // Missing data & Mobile
    700: 'Missing transaction type key',

    // Process failed
    800: 'Transfer failed',


    // Custom error
    900: 'Internal Server Error',
    999: 'Custem error app',
    901: 'You must verify your account',

    // upload error
    1001 : 'File is too big',
    1002 : 'Unexpected Field Name',
    1003 : 'File upload only supports image (jpg,png)',
    1004 : 'Only 1 file image',

};

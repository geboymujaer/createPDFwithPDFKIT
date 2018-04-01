/**
* A method to scan a number.
*
* @param    number|string   number
* @return   bool
*/
module.exports = {
    encBuffer: function (string,args)
    {
        var crypto = require('crypto');
        var buffer = new Buffer(string, "utf8")
        var cipher = crypto.createCipher(args.config.algoritma,args.config.secret);
        var crypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
        return crypted;
    },

    decBuffer: function(buffer,args){
        var crypto = require('crypto');
        // var buffer = new Buffer(buffer, "utf8")
        var decipher = crypto.createDecipher(args.config.algoritma,args.config.secret);
        var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
        return dec;
    }
};

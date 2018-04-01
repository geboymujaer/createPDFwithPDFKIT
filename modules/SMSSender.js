/**
* A custom module to send a SMS.
*
* Now using TukangSMS Service.
*
* @return   mixed
*/
module.exports = {
    sendSMS: function(receiver, message)
    {
        // Initialize NodeJS http module.
        var http = require("http");
        // Initialize main Request API (TukangSMS) object variable.
        var req = http.request({
            "method": "GET",
            "hostname": "103.16.199.187",
            "port": null,
            "path": "/masking/send.php?username=vascommex1&password=JWLewy3923&hp="
                + receiver + "&message=" + escape(message),
            "headers": {
                "cache-control": "no-cache"
            }
        }, function(res)
        {
            var chunks = [];

            res.on("data", function(chunk)
            {
                chunks.push(chunk);
            });

            res.on("end", function()
            {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });
        });

        // Finish & end the request API.
        req.end();
    }
};

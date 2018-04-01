/*
* A custom module for Web Socket vendors.
*
* We can access the service (API) from socket vendors bellow.
*/
module.exports = {

    /*
    * NEEST socket configuration.
    */
    neestSocket: {
        /*
        * Request settings.
        */
        request: {
            method: 'POST',
            hostName: 'socket.paymentsgate.com',
            port: null,
            path: '/receivedCash',
            headers: {
                contentType: "application/json",
                cacheControl: "no-cache"
            }
        },

        /**
        * The NEEST socket main handler.
        *
        * @param    JSON    params
        * @return   mixed
        */
        handler: function(params)
        {
            // Initialize default Node's HTTP module.
            var http = require("http");
            // Create new request to the socket vendor.
            // Save it into variable 'req'.
            var req = http.request({
                "method": this.request.method, // Default method is POST.
                "hostname": this.request.hostName, // Default socket host.
                "port": this.request.port, // Default port is null.
                "path": this.request.path, // Default path is /receivedCash
                // Default headers.
                "headers": {
                    "content-type": this.request.headers.contentType,
                    "cache-control": this.request.headers.cacheControl
                }
            }, function(res)
            {
                // Initialize chunk as an empty array.
                var chunks = [];

                res.on("data", function(chunk)
                {
                    // Insert value to chunk.
                    chunks.push(chunk);
                });

                res.on("end", function()
                {
                    // Body buffer.
                    var body = Buffer.concat(chunks);

                    // This just for debugging.
                    console.log(body.toString());
                });
            });

            // Write new request.
            req.write(JSON.stringify(params));
            // Finish the request.
            req.end();

            return;
        }
    }
};

/**
* A custom module to send an email.
* 
* @return   mixed
*/
module.exports = {
    // Email configuration.
    emailConfig: {
        host: '202.78.202.227',
        //host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'remittance@vascomm.co.id',
            pass: 'A228pg58KZ'
            // user: 'cap5l0ck.tws@gmail.com',
            // pass: 'c4p5l0ckfile',
        },
        tls: {
            rejectUnauthorized: false
        }
    },

    /**
    * A method to send an email.
    *
    * @return   mixed
    */
    sendEmail: function(sender, receiver, subject, messages)
    {
        // Initialize nodemailer package module.
        var nodemailer = require('nodemailer');
        // Initialize email configuration.
        var emailConfig = this.emailConfig;
        // Create reusable transporter object using the default SMTP transport.
        var transporter = nodemailer.createTransport(emailConfig);
        // Setup Email data with unicode symbols.
        var mailOptions = {
            from: sender,
            to: receiver,
            subject: subject,
            text: messages.plain,
            html: messages.html
        };

        // Send mail with defined transport object.
        transporter.sendMail(mailOptions, function(error, info)
        {
            if(error)
            {
                return console.log(error);
            }

            console.log('Message sent: ' + info.response);
        });
    }
};

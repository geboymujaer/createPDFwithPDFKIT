/**
* A custom module to send an email.
*
* @return   mixed
*/
module.exports = function(params, data)
{
    // Initialize main email sender.
    var mainSender = '"Lavisa " <remittance@vascomm.co.id>';
    // Initialize main email subject.
    var mainSubject = '[Lavisa] Transaction Confirmation';

    // Send email to available receiver.
    // if(data.senderEmail !== null && typeof data.senderEmail !== 'undefined')
    // {
    //     params.args.dependencies.modules('emailSender').sendEmail(
    //         mainSender, data.senderEmail, mainSubject, {
    //             plain: params.args.dependencies.modules('emailTemplates').transferPlain({
    //                 senderName: data.senderName,
    //                 senderBankAccountNumber: data.senderBankAccountNumber,
    //                 receiverName: data.recieverName,
    //                 receiverBankAccountNumber: data.recieverBankAccountNumber,
    //                 originalAmount: data.originalAmount,
    //                 exchange: data.exchange,
    //                 destinationAmount: data.destinationAmount
    //             }),
    //             html: params.args.dependencies.modules('emailTemplates').transferHTML({
    //                 senderName: data.senderName,
    //                 senderBankAccountNumber: data.senderBankAccountNumber,
    //                 receiverName: data.recieverName,
    //                 receiverBankAccountNumber: data.recieverBankAccountNumber,
    //                 originalAmount: data.originalAmount,
    //                 exchange: data.exchange,
    //                 destinationAmount: data.destinationAmount
    //             })
    //         });
    // }

    if(data.receiverEmail !== null && typeof data.receiverEmail !== 'undefined')
    {
        if(data.trType == 'TR003'){
            params.args.dependencies.modules('emailSender').sendEmail(
             mainSender, data.senderEmail, mainSubject, {
                plain: params.args.dependencies.modules('emailTemplates').cashPlain(data),
                html: params.args.dependencies.modules('emailTemplates').cashHTML(data)
            });
        }else{
            params.args.dependencies.modules('emailSender').sendEmail(
             mainSender, data.senderEmail, mainSubject, {
                plain: params.args.dependencies.modules('emailTemplates').transferPlain(data),
                html: params.args.dependencies.modules('emailTemplates').transferHTML(data)
            });
        }
        
    }
    return;
};
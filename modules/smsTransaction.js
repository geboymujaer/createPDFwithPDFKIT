/**
* A custom module to send an email.
*
* @return   mixed
*/
module.exports = function(params, data)
{
    //Send sms to available receiver.
    // if(data.senderPhone !== null && typeof data.senderPhone !== 'undefined')
    // {
    //     params.args.dependencies.modules('SMSSender').sendSMS(data.senderPhone, 'Halo Kak '
    //         + data.recieverName + ', kakak mendapat transferan dari  ' +
    //         data.senderName + ' sebesar RP. ' + data.destinationAmount +
    //         ' ke rekening bank ' + data.recieverBankName  +
    //         ' kakak. Silahkan di cek.\n\nTerima kasih, with love NEEST.');
    // }

    if(data.recieverPhone !== null && typeof data.recieverPhone !== 'undefined')
    {
        params.args.dependencies.modules('SMSSender').sendSMS(data.recieverPhone, 'Halo Kak '
            + data.recieverName + ', kakak mendapat transferan dari  ' +
            data.senderName + ' sebesar RP. ' + data.destinationAmount +
            ' ke rekening bank ' + data.recieverBankName  +
            ' kakak. Silahkan di cek.\n\nTerima kasih, with love NEEST.');
    }
    return;
};
const fetch = require('node-fetch');
const express = require('express');

const app = express();

app.post('/payment/ipn', (req, res) => {

    fetch('https://api.manage-invite.xyz/paypal/ipn', {
        method: 'POST',
        body: req.body
    }).then((response) => {
        res.sendStatus(response.status);
    }).catch(() => {
        res.sendStatus(500);
    });

});

app.get('*', (req, res) => res.redirect('https://manage-invite.xyz'));

app.listen(3100);

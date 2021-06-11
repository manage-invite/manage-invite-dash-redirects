const fetch = require('node-fetch');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/payment/ipn', (req, res) => {

    fetch('https://api.manage-invite.xyz/paypal/ipn', {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    }).then((response) => {
        res.sendStatus(response.status);
    }).catch(() => {
        res.sendStatus(500);
    });

});

app.get('*', (req, res) => res.redirect('https://manage-invite.xyz'));

app.listen(3100);

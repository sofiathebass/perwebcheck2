const express = require('express');
const fs = require('fs');
const port = 3000;

const app = express();

let totalViews = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/captcha.html');
});

app.get('/captcha.js', (req, res) => {
    res.sendFile(__dirname + '/captcha.js');
});

app.get('/index.html', (req, res) => {
    totalViews++;
    let html = fs.readFileSync(__dirname + '/html/index.html', 'utf8');
    html = html.replace('{{views}}', totalViews);
    res.send(html);
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.get('/images/blood.png', (req, res) => {
    res.sendFile(__dirname + '/images/blood.png');
});

app.get('/images/party_cannon.png', (req, res) => {
    res.sendFile(__dirname + '/images/party_cannon.png');
});

app.get('/images/poison_miracle.png', (req, res) => {
    res.sendFile(__dirname + '/images/poison_miracle.png');
});

app.get('/images/purification_by_fire.png', (req, res) => {
    res.sendFile(__dirname + '/images/purification_by_fire.png');
});

app.get('/images/LabScripts.png', (req, res) => {
    res.sendFile(__dirname + '/images/LabScripts.png');
});

app.get('/images/red_background.jpg', (req, res) => {
    res.sendFile(__dirname + '/images/red_background.jpg');
});

app.get('/images/sofia_dog.jpg', (req, res) => {
    res.sendFile(__dirname + '/images/sofia_dog.jpg');
});

app.get('/images/surmice.png', (req, res) => {
    res.sendFile(__dirname + '/images/surmice.png');
});

app.get('/images/trevor.jpeg', (req, res) => {
    res.sendFile(__dirname + '/images/trevor.jpeg');
});

app.get('/images/the_kennedy_veil.png', (req, res) => {
    res.sendFile(__dirname + '/images/the_kennedy_veil.png');
});

app.get('/images/tmsca_logo.png', (req, res) => {
    res.sendFile(__dirname + '/images/tmsca_logo.png');
});

app.get('/images/red-grunge-background.jpg', (req, res) => {
    res.sendFile(__dirname + '/images/red-grunge-background.jpg');
});

app.get('/images/upsidefoodsdark.png', (req, res) => {
    res.sendFile(__dirname + '/images/upsidefoodsdark.png');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
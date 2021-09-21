const express = require('express');
const path = require('path');
config = require('config')

const PORT = config.get('PORT') || 8080;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(PORT,()=>console.log(`Приложение запущено на порту ${PORT}...`));
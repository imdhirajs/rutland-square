const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
const PORT = process.env.PORT || 4200;
app.listen(PORT, () => console.log(`RUTLAND SQUARE running at http://localhost:${PORT}`));
module.exports = app;

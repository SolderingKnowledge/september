const express = require('express');//bringing express
const app = express(); //express to use
const path = require('path');//path to know the url



const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send("Hello there");
});
app.post('/', (req, res) => {
	res.send(req.body);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
// nodemon app.js to run this app






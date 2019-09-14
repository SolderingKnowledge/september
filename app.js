const express = require('express');//bringing express
const app = express(); //express to use
const path = require('path');//path to know the url
const cors = require('cors');
app.use(cors());//to allow cors to use


app.use(express.json());//this will show your messages in preview tab, otherwise it will keep saying failed to load
app.use(express.urlencoded({extended:false}));
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send("Hello there");
});
app.post('/', (req, res) => {
	console.log("req.body ", req.body);
	res.send(req.body);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
// nodemon app.js to run this app






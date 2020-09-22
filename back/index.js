const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const connection = require("./helpers/db");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

app.get("/", (req, res) => {
    res.send("You've reached home");
});

app.post('/api/add', (req, res) => {

	// Get the data sent
	const formData = req.body;
  
	// connection to the database, and insertion of the employee
	connection.query('INSERT INTO suggestion SET ?', formData, (err, result) => {
  
	  if (err) {
		// If an error has occurred, then the user is informed of the error
		console.log(err);
		res.status(500).send("Error saving a movie");
	  } else {
		// If everything went well, we send a status "ok".
		res.sendStatus(200);
	  }
	});
  });
  

// / in case path is not found, return the 'Not Found' 404 code
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// launch the node server
let server = app.listen(process.env.PORT || 3799, function () {
    console.log('Listening on port ' + server.address().port);
});
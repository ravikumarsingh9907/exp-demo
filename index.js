const express = require('express');
const app = express();
require('./Database/index');
const studentsRouter = require('./Router/student');
const path = require('path');

const port = process.env.HOSTPORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(studentsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
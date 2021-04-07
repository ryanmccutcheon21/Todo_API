const
    express = require('express'),
    app = express(),
    port = 3000 || process.env.PORT,
    todoRoutes = require('./routes/todos'),
    bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, + '/public'));
app.use(express.static(__dirname + '/views'));


app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.all('*', (req, res, next) => {
    res.send('Page Not Found', 404)
});

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'Oh no! Something went wrong!'
    res.status(status).render('error', { err })
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
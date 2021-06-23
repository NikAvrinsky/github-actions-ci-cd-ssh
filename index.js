let express = require('express');
let app = express();
app.get('/', (req, res) => {
    console.log('get request ci-cd-aws-app');
    res.send('hello from ci-cd-aws-app <br/>' + new Date());
});

app.get('/asd', (req, res) => {
    res.send('ci-cd-aws-app asd');
});

app.listen('8080', () => {
    console.log('listening port 8080')
})
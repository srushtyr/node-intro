const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our Home Page.');
    } else if(req.url === '/about'){
        res.end('Here is a short history.');
    } else{
        res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    
    `);

    }
    
    // console.log(req);
    // res.write('Welcome to our Home Page.');
    // res.end();
});


server.listen(3000);
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our page!');
  }

  if (req.url === '/about') {
    res.end('This is who we are');
  }

      res.end(`
      <h1>Oopsy!</h1>
    <p> Can't find the page you are looking for</p>
    <a href="/">Back Home</a>
    `);

});
// console.log('starting the server at port 5000');
server.listen(5000);


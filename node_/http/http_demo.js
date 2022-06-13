const http = require("http");
const fs = require("fs");

fs.writeFile(path.join(__dirname, "/test_directory", "hello.txt"), "Hello World!", (err) => {
  if (err) throw err;
  console.log("File created");
});

// Create server
//
http
  .createServer((req, res) => {
    // Find out all the properties of req by printing it
    console.log(req);

    // Write response
    // res.write("Hello");
    // res.end();
  })
  .listen(5000, () => console.log("Server running"));

const http = require("http");
const path = require("path");
const fs = require("fs");

const htmlContentType = { "Content-Type": "text/html" };
const jsonContentType = { "Content-Type": "application/json" };
const SUCCESS_STATUS_CODE = 200;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Add Header to Response Object
    res.writeHead(SUCCESS_STATUS_CODE, htmlContentType);
    // Calling end stops the writing to Writable, it ends the Stream
    res.end("<h1>Homepage</h1>");
    // No more adding to Response! Except through chunk and encoding
    // Which allows ONE more thing to be added immediately before closing the stream after
    // calling .end()
  }
});

const PORT = process.env.PORT || 5000;
// Start the server
// server.listen(PORT, () => console.log(`Server running on ${PORT}`));

/**
 * When the user visits the root of our site, the HTML content of index.html will be served
 *
 * The file is read with fs.readFile. The callback function returns the content, or an error.
 */
const serverReturnTemplate = () => {
  http.createServer((req, res) => {
    console.log(`serverReturnTemplate = ${serverReturnTemplate}`);
    // Index
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "public", "index.html"),

        (err, content) => {
          if (err) throw err;
          res.writeHead(SUCCESS_STATUS_CODE, htmlContentType);
          res.end(content);
        }
      );
    }

    // /api/users
    // returns JSON object of users
    if (req.url === "/api/users") {
      const users = [
        { name: "Bobby Hill", age: 17 },
        { name: "Hank Hill", age: 48 },
      ];
      res.writeHead(200, { "Content-Type": "application/json" });
      // Serve as JSON object
      res.end(JSON.stringify(users));
    }
  });
};

/**
 * When the user visits the root of our site, the HTML content of index.html will be served
 *
 * The file is read with fs.readFile. The callback function returns the content, or an error.
 */
const server2 = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),

      (err, content) => {
        if (err) throw err;
        res.writeHead(SUCCESS_STATUS_CODE, htmlContentType);
        res.end(content);
      }
    );
  }

  if (req.url === "/api/users") {
    const users = [
      { name: "Bobby Hill", age: 17 },
      { name: "Hank Hill", age: 48 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    // Serve as JSON object
    res.end(JSON.stringify(users));
  }
});
// server2.listen(PORT, () => console.log(`Server running on ${PORT}`));

/**
 * A server that returns a 404 if a path is not found.
 */
const server3 = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
  console.log(`req.url = ${req.url}`);
  const { headers, url, method } = req;
  console.log(`headers = ${headers}`);
  console.log(`url = ${url}`);
  console.log(`method = ${method}`);

  // Index
  if (req.url === "/api/users") {
    const users = [
      { name: "Bobby Hill", age: 17 },
      { name: "Hank Hill", age: 48 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    // Serve as JSON object
    res.end(JSON.stringify(users));
  }

  // console.log(filePath);
  // res.end();

  // Extension of file
  let extname = path.extname(filePath);
  let contentType = "text/html"; // variable shadowing
  // Get "Content-Type"
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Return a 404 template if the route does not return an HTML file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      µ;
      console.log(err);
      if (err.code == "ENOENT") {
        // Page not found
        let filePath = path.join(__dirname, "public", "404.html");
        console.log(filePath);
        fs.readFile(filePath, (err, content) => {
          if (err) throw err;
          res.writeHead(404, htmlContentType);
          console.log(`content: ${content}`);
          res.end(content, "utf-8");
        });
      } else {
        // Some Server Error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success!
      res.writeHead(SUCCESS_STATUS_CODE, htmlContentType);
      res.end(content, "utf-8");
    }
  });
});

// server3.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

const todos = [
  { id: 1, text: "Todo One" },
  { id: 2, text: "Todo Two" },
  { id: 3, text: "Todo Three" },
];

const server4 = http.createServer((req, res) => {
  // Add Headers to Response object
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("X-Powered-By", "Node.js");

  console.log(req.headers.authorization);

  // Cleaner way to add Response Headers
  res.writeHead(400, {
    "Content-Type": "applicaiton/json",
    "X-Powered-By": "Node.js",
  });

  // Use res.end() to send fill the Response object instead of res.write()
  // res.write("<h1>Hello</h1>");
  // res.write("<h2>Hello Again</h2>");

  // Will return an invalid argument Error since
  // Chunk argument needs to be of type string or buffer
  let response = JSON.stringify({ success: false, error: "Please add email", data: null });
  res.end(response);
});
server4.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

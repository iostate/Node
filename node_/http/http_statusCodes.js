/**
 * Displaying how to return dynamic responses in Node.js
 *
 * GET /todos -
 * Uses variable shadowing to return a default Fail Response if the incorrect route
 * is entered.
 *
 * If correct route is entered, then the shadowed variables (response, status)
 * get changed from the default to a correct Return response.
 *
 */

const http = require('http');

const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];

const PORT = process.env.PORT || 5000; // PORT FOR SERVER
/**
 * Make a request to GET TODOS
 */
const nodeServer = http.createServer((req, res) => {
  const { method, url } = req;
  // Body of the Response
  let body = [];

  // Request incoming
  req
    .on('data', (chunk) => {
      body.push(chunk);
      console.log(`chunk = ${chunk}`);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      // console.log(body);

      // Variable shadowing
      let status = 404;
      // Variable shadowing, default value
      const response = { success: false, data: null };

      // If success, change response and status code
      if (method === 'GET' && (url === '/todos' || url === '/todos/')) {
        status = 200;
        response.success = true;
        response.data = todos;
      } else if (method === 'POST' && url === '/todos') {
        const { id, text } = JSON.parse(body);
        console.log('Entered POST /todos');

        // Validate whether the Todo Object has both id & text
        // Can create helper functions to help verify this.
        if (!id || !text) {
          status = 400;
          response.error = 'Please add id and text';
        } else {
          todos.push({ id, text });
          status = 201; // Success but created something
          response.success = true;
          response.data = todos;
        }
      }

      // Return the proper HTTP Headers, success or failure?
      res.writeHead(status, {
        'Content-Type': 'applicaiton/json',
        'X-Powered-By': 'Node.js',
      });

      res.end(JSON.stringify(response));
    });

  // Will return an invalid argument Error since
  // Chunk argument needs to be of type string or buffer
  // let response = JSON.stringify({ success: true, data: todos });
});
// Begin the server
// Use nodemon to serve the file
nodeServer.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

const url = require("url");

const myUrl = new URL("http://localhost.com:8000/hello.html?id=2053&status=active");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host domain name
console.log(myUrl.host);

// Hostname ( doesn't include the port )
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
//  Serialized Query
console.log(myUrl.search);
// Params object
myUrl.searchParams.append("ownerId", "092");
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

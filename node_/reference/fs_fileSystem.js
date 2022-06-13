const path = require("path");
const fs = require("fs");

// Create a folder
// fs.mkdir(path.join(__dirname, "/test_directory"), {}, (err) => {
//   if (err) throw err;
//   console.log(`Folder named ${path.join(__dirname) + "/test_directory"}`);
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, "/test_directory", "hello.txt"), "Hello World!", (err) => {
//   if (err) throw err;
//   console.log("File created");
// });

let fileLocation = path.join(__dirname, __filename);
console.log(fileLocation);

console.log("\n\n");

// The name of the directory from which this is called from
let directoryName = __dirname;
console.log(`directoryName: \n${directoryName}`);

let fileName = __filename;
console.log(`fileName: \n${fileName}`);

const getThisFilesPath = () => {
  return path.join(__dirname, __filename);
};

// Get the directory of a file1
const getDirectory = (file) => {
  return path.dirname(file);
};
console.log(path.dirname(__filename));
// Read file - must add text type, utf-8
// fs.readFile(fileLocation, "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   console.log("File read done!");
// });

// Rename a file
// fs.rename(fileLocation, path.join(__dirname, "/test_directory", "helloworld.txt"), (err, data) => {
//   if (err) throw err;
//   console.log("Rename successful!\n\n");
// });

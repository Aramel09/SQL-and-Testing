const createServer = require("./utils/server");
const port = 3002;
//  https://expressjs.com/en/resources/middleware/body-parser.html

const app = createServer();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Express Server listening on port ${port}`);
});

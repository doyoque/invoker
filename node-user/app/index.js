const app = require("express")();
const appId = process.env.APPID;

app.get("/", (req, res) => {
  res.send(`appid: ${appId} home page: says hello!`)
});

app.get("/app1", (req, res) => {
  res.send(`appid: ${appId} app1 page: says hello!`)
});

app.get("/app2", (req, res) => {
  res.send(`appid: ${appId} app2 page: says hello!`)
});

app.get("/admin", (req, res) => {
  res.send(`appid: ${appId} ADMIN page: only few people could see this!`)
});

app.listen(appId, () => {
  console.log(`${appId} is listening on ${appId}`)
});

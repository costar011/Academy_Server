import express from "express";

const PORT = 5000;
const app = express();

app.get("/api/testREST", (req, res) => {
  console.log("실행");
  console.log("실행");
  console.log("실행");

  return "TEST";
});

app.post("/api/dataTest", (req, res) => {
  console.log("data");
});

app.listen(PORT, () => {
  console.log(`✅ ${PORT} Server Start`);
});

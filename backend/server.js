const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const arr = [1, 2, 3, 4];

app.get("/hello", (req, res) => {
  res.json(arr);
});

app.post("/push", (req, res) => {
  const { name } = req.body;          
  arr.push(name);                    
  res.json(arr);
});

app.put("/update", (req, res) => {   
  const { index, value } = req.params;
  arr[index] = value;
  res.json(arr);
});

app.delete("/delete", (req, res) => {
  const { index } = req.params;
  arr.splice(index, 1);
  res.json(arr);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});   




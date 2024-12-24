const express = require("express");
const app = express();

// UGLY SOLUTION - in this we need to repeat the auth code in every route

app.get("/health", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const Kidney_id = req.query.Kidney_id;
  if (username != "admin" && password != "pass") {
    res.status(400).json({
        msg:"Something's up with your inputs"
    })
    return
  }
  if (Kidney_id != 1 && Kidney_id != 2) {
    res.status(400).json({
        msg:"Something's up with your inputs"
    })
    return
  }
  res.json({
    msg: "You login succesfully",
  });
});
app.listen(3000);

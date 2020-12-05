const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {
  const { rollNumbers } = req.body;
  console.log(rollNumbers);
  if (!rollNumbers)
    return res.status(400).json({ msg: "Input at least 1 roll number" });
  const rollArray = rollNumbers.split(",").map((item) => item.trim());
  results = {};

  try {
    rollArray.map(async (roll, idx) => {
      const result = await axios.get(
        `http://proedge.me/test.php?rollnumber=${roll}`
      );
      if (result.data == "Pass" || result.data == "Fail") {
        status = result.data;
        results[roll] = status;
      } else {
        results[roll] = "No result found";
      }
      if (idx == rollArray.length - 1) {
        res.send(results);
      }
    });
  } catch (err) {
    if (err.response) {
      console.error(err);
    }

    res.status(500).send("Server Error");
  }
});

module.exports = router;

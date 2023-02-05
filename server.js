const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.post("/login", (req, res) => {
  // console.log("body", req.body);
  const { email, password } = req.body;
  console.log("email", email);
  console.log("password", password);
  setTimeout(() => {
    res.send({
      email: email,
      name: "Heritier",
      surname: "Kaumbu",
      balance: 1000,
      ID: "HWU-TST-TCT-HERI-0005",
      phone: "+27 78 123 4567",
      company: "Hydrodrip",
      companyPhone: "+27 10 765 4321",
      companyEmail: "info@hydrodrip.com",
      companyAddress: "1234 Main Street, Johannesburg, 8000, South Africa",
    });
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

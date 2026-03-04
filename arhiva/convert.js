const fs = require("fs");

const csvPath = "products.csv";
const jsonPath = "products.json";

const csv = fs.readFileSync(csvPath, "utf8");

// razbij po linijama
const lines = csv.split("\n").filter(l => l.trim() !== "");

// header
const headers = lines[0].split(";");

// podaci
const data = lines.slice(1).map(line => {
  const values = line.split(";");

  let obj = {};
  headers.forEach((h, i) => {
    obj[h.trim()] = values[i] ? values[i].trim() : "";
  });

  return obj;
});

// upiši JSON
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));

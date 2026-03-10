const fs = require("fs");

const path = "./products.json"; // ako je skripta u istom folderu kao JSON
// ako nije, stavi punu putanju, npr:
// const path = "C:/Users/dell/Documents/GitHub/katalog/data/products.json";

let data = JSON.parse(fs.readFileSync(path, "utf8"));

data = data.map(p => {
  if (!("katalog_krajina" in p)) {
    p.katalog_krajina = "NE";
  }
  return p;
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf8");

console.log("Gotovo. Dodano 'katalog_krajina':'NE' gdje je falilo.");
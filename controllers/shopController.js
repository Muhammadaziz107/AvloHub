const { shops } = require("../data");

var lut = [];
for (var i = 0; i < 256; i++) {
  lut[i] = (i < 16 ? "0" : "") + i.toString(16);
}
function e5() {
  var k = [
    "x",
    "x",
    "x",
    "x",
    "-",
    "x",
    "x",
    "-",
    "4",
    "x",
    "-",
    "y",
    "x",
    "-",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
  ];
  var u = "",
    i = 0,
    rb = (Math.random() * 0xffffffff) | 0;
  while (i++ < 20) {
    var c = k[i - 1],
      r = rb & 0xff,
      v = c == "x" ? r : c == "y" ? (r & 0x3f) | 0x80 : (r & 0xf) | 0x40;
    u += c == "-" ? c : lut[v];
    rb = i % 4 == 0 ? (Math.random() * 0xffffffff) | 0 : rb >> 8;
  }
  return u;
}

const newShop = (req, res) => {
  try {
    const { name } = req.body;
    shops.push({
      id: e5(),
      name: name,
      createdAt: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    });

    res.send(shops);
  } catch (err) {
    console.log(err);
  }
};

const allShops = (req, res) => {
  try {
    res.send(shops);
  } catch (err) {
    console.log(err);
  }
};

const getOneShop = (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const updateShop = (req, res) => {
  try {
    //   const {old}
  } catch (err) {
    console.log(err);
  }
};

const deleteAllShops = (req, res) => {
  try {
    const sliced = shops.splice(0, shops.length);

    res.send("Deleted all shops");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  newShop,
  allShops,
  //   getOneShop,
  updateShop,
  deleteAllShops,
};

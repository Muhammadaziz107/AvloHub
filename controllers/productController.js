const { products, shops } = require("../data");

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

const newProduct = (req, res) => {
  try {
    const { name, description, shopId } = req.body;

    products.push({
      id: e5(),
      name: name,
      description: description,
      shopId: shopId,
      createdAt: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
    });

    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

const getProducts = (req, res) => {
  try {
    res.send(products);
  } catch (err) {
    console.log(err);
  }
};

const getOneProduct = (req, res) => {
  try {
    const productId = req.params.id;

    const foundProduct = products.find(id => (id = productId));

    if (foundProduct) {
      res.send(foundProduct);
    } else {
      res.send("Not found");
    }
  } catch (err) {
    console.log(err);
  }
};

const getOneShopsProduct = (req, res) => {
  try {
    const shopId = req.params.id;

    const foundShop = shops.find(id => (id = shopId));

    if (foundShop) {
      res.send(products);
    } else {
      res.send("Shop not found");
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  newProduct,
  getProducts,
  getOneProduct,
  getOneShopsProduct,
};

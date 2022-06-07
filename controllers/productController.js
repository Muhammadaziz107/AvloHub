const { products, shops } = require("../data");

const newProduct = (req, res) => {
  try {
    const { name, description } = req.body;

    products.push({
      id: 1,
      name: name,
      description: description,
      shopId: 1,
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
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  newProduct,
  getProducts,
};

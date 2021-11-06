const express = require("express");
const upload = require("../middleware/file-upload");
const { findByIdAndDelete } = require("../models/product.model");
const router = express.Router();

const Product = require("../models/product.model");

// single
router.post(
  "/single",
  upload.single("productImage"),
  async function (req, res) {
    const product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      image_urls: req.file.path,
    });
    return res.status(201).send(product);
  }
);

//multiple
router.post(
  "/multiple",
  upload.any("productImages"),
  async function (req, res) {
    const filespath = req.files.map((file) => file.path);

    const product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      image_urls: filespath,
    });
    return res.send(product);
  }
);


router.get("/multiple", async function (req, res) {
  const product = await Product.find();
  return res.send(product);
});

router.get("/single", async function (req, res) {
  const product = await Product.find();
  return res.send(product);
});

router.patch("/single/:id", async function (req, res) {
  //console.log(req.body);
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.file.path,
    {
      new: true,
      // versionkey: false,
    }
  );
  return res.send({ product });
});

router.delete("/single/:id", async function (req, res) {
  const product = await findByIdAndDelete(
    req.params.id,
    req.file.path,
    {
      new: true,
      // versionkey: false,
    }
  );
  return res.send(product);
});
router.delete("/multiple/:id", async function (req, res) {
  const product = await findByIdAndDelete(
    req.params.id,
    req.file.path,
    {
      new: true,
      // versionkey: false,
    }
  );
  return res.send(product);
});

module.exports = router;

const contact = require("../models/contact");

exports.postContact = async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });
    if (!req.body.email) {
      res.status(400).send({ msg: "email is required, check again" });
      return;
    }
    const user = await contact.findOne({ email: req.body.email });
    if (user) {
      res.status(400).send({ msg: "user already exists" });
      return;
    }
    const response = await newContact.save();
    res.send({ response, msg: "user is saved" });
  } catch (error) {
    res.status(400).send({ msg: "can not save it" });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ result, msg: "getting contacts succ" });
  } catch (error) {
    res.status(400).send({ msg: " cannot get contacts" });
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ result, msg: "getting contact succ" });
  } catch (error) {
    res.status(400).send({ msg: " there is no contact with id " });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ result, msg: " contact deleted" })
      : res.send("there is no contact to delete");
  } catch (error) {
    res.status(400).send({ msg: " cannot delete " });
  }
};

exports.updateById = async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ result, msg: " contact updated" })
      : res.send({ msg: "already updated" });
  } catch (error) {
    res
      .status(400)
      .send({ msg: " there is no contact with this id to update " });
  }
};

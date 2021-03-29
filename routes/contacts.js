const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const controllers = require("../controllers/contact.controllers");
/*test*/
router.get("/hello", (req, res) => {
  res.send("hello routing");
});

/*Post contact*/
/*get all contacts*/
/*get contact by id*/
/*delete contact by id*/
/*update a contact by id*/

//@POST method
//@desc post a contact
//@path :http://localhost:5000/api/contact/
//Params Body

router.post("/", controllers.postContact);

//@method GET
// @desc GET all contacts
//@path:http://localhost:5000/api/contact/

router.get("/", controllers.getAllContacts);

//@method GET
// @desc GET one contact
//@path:http://localhost:5000/api/contact/:id
//Params id

router.get("/:id", controllers.getById);

//@method DELETE
// @desc DELETE one contact by id
//@path:http://localhost:5000/api/contact/:id
//Params id

router.delete("/:id", controllers.deleteById);

//@method PUT
// @desc update one contact by id
//@path:http://localhost:5000/api/contact/:id
//@Params id Body

router.put("/:id", controllers.updateById);

module.exports = router;

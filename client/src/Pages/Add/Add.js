import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { editContact, postContact } from "../../JS/actions/contact";
import { Button } from "react-bootstrap";

import "./Add.css";

const Add = () => {
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  const EditContact = useSelector((state) => state.contactReducer.contact);
  const edit = useSelector((state) => state.EditReducer.edit);
  useEffect(() => {
    edit
      ? setContact(EditContact)
      : setContact({ name: "", email: "", Phone: "" });
  }, [EditContact]);

  const handleChange = (id) => {
    edit ? dispatch(editContact(id, contact)) : dispatch(postContact(contact));
  };

  const handleContact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div >
    <div className="addcontact">
      <div className="add">
        <label>Name</label>
        <input name="name" value={contact.name} onChange={handleContact} />
      </div>
      <div className="add">
        <label>email</label>
        <input name="email" value={contact.email} />
      </div>
      <div className="add">
        <label>phone</label>
        <input name="Phone" value={contact.Phone} />
      </div>
      <div className="add">
        <Button
          variant="primary"
          onClick={() => handleChange(EditContact._id)}
        >
          {edit ? "Edit contact" : "Add contact "}
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Add;

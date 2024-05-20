import React from "react";
import "src/components/event_cards/contact_field/contact_field.css";

const Contact_field = () => {
  return (
    <div className="contactField">
      <p className="contactTitleText fieldTitle font textBase">Field Title</p>
      <p className="contactTitleText contactTitleSpan font">*</p>
      <input placeholder="Placeholder Text" />
    </div>
  );
};

export default Contact_field;

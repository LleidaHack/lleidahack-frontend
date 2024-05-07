import React from "react";
import "src/components/event_cards/contact_field/contact_field.css";

const contact_field = () => {
  return (
    <div class="contactField">
      <p class="contactTitleText fieldTitle font textBase">Field Title</p>
      <p class="contactTitleText contactTitleSpan font">*</p>
      <input type={text} placeholder="Placeholder Text" />
    </div>
  );
};

export default contact_field;

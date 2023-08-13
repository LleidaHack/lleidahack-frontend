
import React from "react";


function Button(props) {
  return (<a href={props.href} className="text-center btn rounded-0 p-bg-red text-decoration-none text-white m-auto px-3 py-2 me-xl-2 mb-2 d-block d-xl-inline">
    {props.text}
  </a>);
}

// TODO Where should the form be sended out
// TODO Bottom buttons where should they redirect or do

const AnnouncementPanel = () => {
  return (<div className="container m-auto">
    <div className="row">
      <div className="col-12 col-xl-8 m-auto">
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-xl-7 m-auto p-4 p-bg-grey">
        <h3 className="text-center mt-1 mb-1">Nou Anunci</h3>
        <form className="d-inline" action="">
          {/* Title */}
          <label for="title" className="form-label">Titol</label>
          <input type="text" className="form-control rounded-0" id="title" placeholder="Titol de l'anunci" />
          {/* Message  */}
          <label for="description" className="form-label mt-3">Missatge</label>
          <textarea type="text" id="description" rows="5" className="form-control rounded-0" placeholder="Explicacions del que vols parlar..." />
        </form>
        <hr />
        {/* Buttons to other pages */}
        <Button text="Gestionar Grups" href="/"></Button>
        <Button text="Gestionar Tiquets" href="/"></Button>
        <Button text="Gestionar Horaris" href="/"></Button>
      </div>

    </div>
  </div>);
};

export default AnnouncementPanel;


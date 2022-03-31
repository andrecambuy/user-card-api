import React from "react";
import "./Card.css";

const Card = ({ user, click }: any) => {
  return (
    <div className="card">
      <div className="bg-card">
        <div className="btn-att" onClick={click}></div>
      </div>
      <div className="card-prof-pic">
        <img src={user.picture.large} alt="img" />
      </div>
      <div className="info">
        <div className="card-info">
          <div className="card-info-single name">
            <span>Name</span>
            <h1>
              {user.name.first} {user.name.last}
            </h1>
          </div>
          <div className="card-info-single">
            <span>Email</span>
            <h1>{user.email}</h1>
          </div>
          <div className="card-info-single">
            <span>Address</span>
            <h1>
              {user.location.street.name} - {user.location.street.number},{""}
              {user.location.city}
            </h1>
          </div>
          <div className="card-info-single">
            <span>State / Country</span>
            <h1>
              {user.location.state}
              {" / "}
              {user.location.country}
            </h1>
          </div>
          <div className="card-info-single">
            <span>DOB</span>
            <h1>
              {user.dob.date} / {user.dob.age} years old
            </h1>
          </div>
          <div className="card-info-single">
            <span>Cell</span>
            <h1>{user.cell}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

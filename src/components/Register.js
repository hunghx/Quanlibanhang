import React from "react";

export default function Register() {
  return (
    <form>
      <div className="form-group">
        <label for="">Username</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelpId"
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label for="">Email</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelpId"
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label for="">Password</label>
        <input
          type="password"
          className="form-control"
          aria-describedby="emailHelpId"
          placeholder=""
        />
      </div>
      <div className="form-group">
        <label for="">Repassword</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelpId"
          placeholder=""
        />
      </div>
    </form>
  );
}

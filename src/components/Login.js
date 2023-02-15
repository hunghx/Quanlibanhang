import React from "react";

export default function Login() {
  return (
    <form>
      <div className="form-group">
        <label for="">Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          placeholder="nhap username"
          aria-describedby="helpId"
        />
      </div>
      <div class="form-group">
        <label for="">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder=""
          aria-describedby="helpId"
        />
      </div>
    </form>
  );
}

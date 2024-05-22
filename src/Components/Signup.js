import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigateTL = useNavigate();
  const navigateTM = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            projectID: "48hhftpw7q7z",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            appType: "music",
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      const toMain = () => navigateTM("/content");

      if (response.ok) {
        toast.success("SignUp Successfull Taking you to the Main Page")
        toMain();
        setName("");
        setEmail("");
        setPassword("");
        setError("");
      } else {
        setError(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error signing up");
    }
  };

  return (
    <div className="container">
      {/* <div className="left-column">
        <div className="content">
          <img
            srcset="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/8c2f013457144ca195423e726c231708.png"
            className="logo"
            alt="Logo"
          />
          <div className="title">All Your Music.</div>
          <div className="subtitle">Anytime, anywhere.</div>
        </div>
      </div> */}
      <div className="right-column">
        <div className="form-container">
          <div className="form-header">SignUp</div>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <input
                placeholder="Enter Full Name..."
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <input
                placeholder="Enter Email..."
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <input
                placeholder="Enter Password..."
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              SignUp 
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
        <div className="footer">
          <div className="footer-text">Already have an account? </div>
          <button onClick={() => navigateTL("/login")} className="login-link">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

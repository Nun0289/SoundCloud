import React, { useState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSession } from "../Contexts/SessionContext";
import { REGISTER_MUTATION } from "../GraphQL/registerMutation";
import { useMutation } from "@apollo/client";
import logo from "../assets/NoCopyRightCloud-removebg-preview.png";
import bgvideo from "../assets/4K_168.mp4";
import crvideo from "../assets/create.mp4";
import playmusic from "../component/playsong/playsong";
import "../css/LoginPopup.css";
const LoginPopup = () => {
  const { login } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repassword, setRePassword] = useState("");
  const [onRegister, setonRegister] = useState(false);
  const [onLogin, setonLogin] = useState(true);
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await login(email, password);
      } catch (err) {
        alert(err?.message);
      }
    },
    [login, password, email]
  );
  const [addUser] = useMutation(REGISTER_MUTATION, {
    update(result) {
      console.log(result);
      alert("สมัครสมาชิกเรียบร้อย!!!!!!!!!!");
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.message);
    },
    variables: {
      record: {
        role: "Guest",
        username: email,
        fullname: name,
        password: password,
        email: email,
      },
    },
  });
  const handleRegister = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        addUser();
        await login(email, password);
      } catch (err) {
        alert(err?.message);
      }
    },
    [login, password, email, addUser]
  );
  return (
    <>
      {onLogin == true && onRegister == false ? (
        <div
          style={{
            backgroundColor: "#000",
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            borderRadius: "20px",
          }}
        >
          <playmusic />
          <div
            style={{
              backgroundColor: "#000",
              display: "flex",
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            <div
              style={{
                position: "fixed",
                zIndex: 10,
                marginLeft: "10%",
                marginTop: "50px",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "100px",
                }}
              />
            </div>
            <video
              autoPlay
              muted
              loop
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                top: "50%",
                left: "50%",
                objectFit: "cover",
                transform: "translate(-50%,-50%)",
                borderBottomLeftRadius: "20px",
                borderTopLeftRadius: "20px",
              }}
            >
              <source src={bgvideo} />
            </video>
          </div>
          <div
            style={{
              backgroundColor: "#FFF",
              display: "flex",
              width: "100%",
              height: "100%",
              borderBottomRightRadius: "20px",
              borderTopRightRadius: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="group">
              <h1>Login</h1>
              <div className="Login">
                <Form onSubmit={handleLogin}>
                  <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      autoFocus
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Login
                  </Button>
                </Form>
                <div style={{ paddingTop: "10px" }}>or</div>
                <div
                  className="createuser"
                  onClick={() => {
                    setonRegister(true);
                    setonLogin(false);
                  }}
                >
                  Create NewUser
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#000",
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFF",
              display: "flex",
              width: "90%",
              height: "100%",

              borderBottomLeftRadius: "20px",
              borderTopLeftRadius: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="group">
              <h2>Create NewUser</h2>
              <div className="Createuser">
                <Form onSubmit={handleRegister}>
                  <Form.Group size="lg" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      autoFocus
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group size="lg" controlId="repassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={repassword}
                      onChange={(e) => setRePassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group size="lg" controlId="password"></Form.Group>
                  <Button
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                  >
                    Login
                  </Button>
                </Form>
                <div
                  style={{ paddingTop: "10px" }}
                  className="cancel"
                  onClick={() => {
                    setonRegister(false);
                    setonLogin(true);
                  }}
                >
                  Cancel
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#000",
              display: "flex",
              width: "100%",
              height: "100%",
              borderBottomRightRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <div
              style={{
                position: "fixed",
                zIndex: 10,
                marginLeft: "8%",
                marginTop: "50px",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "100px",
                }}
              />
            </div>
            <video
              autoPlay
              muted
              loop
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                top: "50%",
                left: "50%",
                objectFit: "cover",
                transform: "translate(-50%,-50%)",
                borderBottomRightRadius: "20px",
                borderTopRightRadius: "20px",
              }}
            >
              <source src={crvideo} />
            </video>
          </div>
        </div>
      )}
    </>
  );
};
export default LoginPopup;

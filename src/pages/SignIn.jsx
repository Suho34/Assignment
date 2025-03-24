import InputForm from "../InputForm";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="cards-container">
      <div className="front-content">
        <h1 className="front-page-title">
          Signin to your
          <br /> PopX account
        </h1>
        <p className="front-page-description">
          Lorem ipsum dolor sit amet
          <br /> consectetur, adipisicing elit.
        </p>
      </div>
      <InputForm
        type="text"
        placeholder="Enter email address"
        label="Email Address"
      />

      <InputForm
        type="password"
        placeholder="Enter password"
        label="Password"
      />

      <button
        type="submit"
        className="login-btn"
        onClick={() => navigate("/user")}
      >
        Login
      </button>
    </div>
  );
}

export default SignIn;

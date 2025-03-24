import { useNavigate } from "react-router-dom";

function FrontPage() {
  const navigate = useNavigate();

  return (
    <div className="front-page">
      <div>
        <h1 className="front-page-title">Welcome to PopX</h1>
        <p className="front-page-description">
          Lorem, ipsum dolor sit amet
          <br /> consectetur adipisicing elit.
        </p>
      </div>

      <button
        className="create-account-button"
        onClick={() => navigate("/create-account")}
      >
        Create Account
      </button>
      <button className="login-button" onClick={() => navigate("/signin")}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default FrontPage;

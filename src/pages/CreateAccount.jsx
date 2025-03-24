import InputForm from "../InputForm";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  return (
    <div className="cards-container">
      <h1 className="front-title">
        Create your <br />
        PopX account
      </h1>

      <div>
        <InputForm
          type="text"
          placeholder="Marry Doe"
          label="Full Name"
          required
        />

        <InputForm
          type="tel"
          placeholder="Enter phone number"
          label="Phone Number"
          required
        />

        <InputForm
          type="email"
          placeholder="Enter email"
          label="Email Address"
          required
        />

        <InputForm
          type="password"
          placeholder="Enter password"
          label="Password"
          required
        />

        <InputForm
          type="text"
          placeholder="Enter company name"
          label="Company Name"
        />
      </div>
      <div className="radio-group">
        <p className="radio-label">
          Are you an agency? <span className="required-asterisk">*</span>
        </p>
        <div className="radio-options">
          <label className="radio-option">
            <input type="radio" name="agency" value="yes" />
            Yes
          </label>
          <label className="radio-option">
            <input type="radio" name="agency" value="no" />
            No
          </label>
        </div>
      </div>

      <button
        className="submit-button"
        type="submit"
        onClick={() => navigate("/user")}
      >
        Create Account
      </button>
    </div>
  );
}

export default CreateAccount;

import PropTypes from "prop-types";
export default function InputForm({ type, placeholder, label, required }) {
  return (
    <fieldset className="input-box">
      <legend>
        {label} {required && <span className="required-asterisk">*</span>}
      </legend>
      <input type={type} placeholder={placeholder} required />
    </fieldset>
  );
}

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

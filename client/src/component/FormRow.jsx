import PropTypes from "prop-types";
const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className="form-input"
          defaultValue={defaultValue || ""}
        />
      </div>
    </div>
  );
};

FormRow.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default FormRow;

import { Field } from "formik";
const CheckboxField = ({ name, label, defaultValue, ...rest }) => {
  return (
    <div
      className="text-textSecondaryHackeps"
      style={{ display: "flex", alignItems: "center" }}
    >
      <label style={{ marginRight: "8px" }}>
        <Field type="checkbox" name={name} checked={defaultValue} {...rest} />
      </label>
      {label}
    </div>
  );
};

export default CheckboxField;

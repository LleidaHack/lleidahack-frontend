import { Field } from "formik";
const CheckboxField = ({ name, label, defaultValue, ...rest }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", color: "white" }}>
      <label style={{ marginRight: "8px" }}>
        <Field type="checkbox" name={name} checked={defaultValue} {...rest} />
      </label>
      {label}
    </div>
  );
};

export default CheckboxField;

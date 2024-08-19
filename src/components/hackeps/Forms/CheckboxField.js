import { Field } from "formik";

const CheckboxField = ({ name, label, defaultValue, ...rest }) => {
  return (
    <div
      className="text-textSecondaryHackeps"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Field name={name}>
        {({ field }) => (
          <label style={{ marginRight: "8px" }}>
            <input
              type="checkbox"
              {...field}
              checked={field.value}
              defaultChecked={defaultValue}
              {...rest}
            />
            {label}
          </label>
        )}
      </Field>
    </div>
  );
};

export default CheckboxField;
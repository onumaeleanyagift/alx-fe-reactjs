import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitting(false);
      return;
    }

    console.log("Form submitted:", values);
    setErrors({});
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, isSubmitting }) => (
        <Form className="space-y-4 p-4 border rounded-md">
          <div>
            <label className="block font-medium">Username</label>
            <Field
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, username: e.target.value });
              }}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <Field
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, email: e.target.value });
              }}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <Field
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, password: e.target.value });
              }}
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;

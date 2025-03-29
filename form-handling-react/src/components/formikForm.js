import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form submitted:", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 p-4 border rounded-md">
          <div>
            <label className="block font-medium">Username</label>
            <Field
              type="text"
              name="username"
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
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <Field
              type="password"
              name="password"
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

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Layout } from "../../layout";
import { CardForm } from "../../components";
import { loginSchema } from "../../../schemas";
import { useAuth } from "../../../hooks";

export const Login = () => {
  const { startLogin } = useAuth();

  return (
    <Layout>
      <CardForm title="Login">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={({ email, password }) => {
            startLogin({ email, password });
          }}
        >
          {({ isSubmitting, errors, handleSubmit, touched }) => (
            <Form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <label htmlFor="email">Dirección de correo electrónico</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                />

                {touched.email && errors.email ? (
                  <ErrorMessage
                    component="span"
                    className="invalid-feedback"
                    name="email"
                  />
                ) : null}
              </div>

              <div className="row mb-3">
                <label htmlFor="password">Contraseña</label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : null
                  }`}
                />

                {touched.password && errors.password ? (
                  <ErrorMessage
                    component="span"
                    className="invalid-feedback"
                    name="password"
                  />
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-100 mt-4"
              >
                Iniciar sesión
              </button>
            </Form>
          )}
        </Formik>
      </CardForm>
    </Layout>
  );
};

import { Formik, Form, Field, ErrorMessage } from "formik";
import FormSchema from "./schema/FormSchema";
import { useState } from "react";

interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  data: string;
  telefone: string;
  instagram?: string;
  checkbox: boolean;
}

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  data: "",
  telefone: "",
  instagram: "",
  checkbox: false,
};

export const ContactForm = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const formSubmit = (values: IFormikValues) => {
    setIsSubmited(true);
  };
  return (
    <Formik
      onSubmit={formSubmit}
      initialValues={initialValues}
      validationSchema={FormSchema}
      validateOnMount
    >
      {({ errors, touched, isValid, validateForm }) => (
        <Form>
          <div className="form-entryes">
            <label htmlFor="name">Nome</label>
            <span className="error">
              <ErrorMessage name="name" className="form-ivalid-feedback" />
            </span>
            <Field
              id="name"
              name="name"
              placeholder="Seu nome completo"
              className={errors.name && touched.name && "invalid"}
            />
          </div>

          <div className="form-entryes">
            <label htmlFor="email">E-mail</label>
            <span className="error">
              <ErrorMessage name="email" className="form-ivalid-feedback" />
            </span>
            <Field
              id="email"
              name="email"
              placeholder="Seu e-mail"
              className={errors.email && touched.email && "invalid"}
            />
          </div>

          <div className="form-entryes">
            <label htmlFor="cpf">CPF</label>
            <span className="error">
              <ErrorMessage name="cpf" className="form-ivalid-feedback" />
            </span>
            <Field
              id="cpf"
              name="cpf"
              type="number"
              placeholder="000.000.000-00"
              className={errors.cpf && touched.cpf && "invalid"}
            />
          </div>

          <div className="form-entryes">
            <label htmlFor="data">Data de Nascimento:</label>
            <span className="error">
              <ErrorMessage name="data" className="form-ivalid-feedback" />
            </span>
            <Field
              id="data"
              name="data"
              type="number"
              placeholder="00.00.0000"
              className={errors.data && touched.data && "invalid"}
            />
          </div>

          <div className="form-entryes">
            <label htmlFor="telefone">Telefone:</label>
            <span className="error">
              <ErrorMessage name="telefone" className="form-ivalid-feedback" />
            </span>
            <Field
              id="telefone"
              name="telefone"
              type="tel"
              placeholder="(00) 00000-0000"
              className={errors.telefone && touched.telefone && "invalid"}
            />
          </div>

          <div className="form-entryes">
            <label htmlFor="instagram">Instagram</label>
            <span>
              <ErrorMessage name="instagram" className="form-ivalid-feedback" />
            </span>
            <Field id="instagram" name="instagram" placeholder="@seuuser" />
          </div>

          <div className="checkbox_wrapper">
            <label htmlFor="checkbox">Declaro que li e aceito</label>
            <span className="check-error">
              <ErrorMessage name="checkbox" className="form-ivalid-feedback" />
            </span>
            <Field
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className={errors.checkbox && touched.checkbox && "invalid"}
            />
          </div>
          <button>CADASTRE-SE</button>
          {isSubmited && <span>*Formulário enviado com sucesso!</span>}
        </Form>
      )}
    </Formik>
  );
};

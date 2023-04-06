import * as Yup from "yup";

import { phoneNumber, cpfNumber, insta } from "./CustonValidationsRegex";

export default Yup.object().shape({
  name: Yup.string().required("*Campo Obrigatório"),
  email: Yup.string()
    .email()
    .required("*Campo Obrigatório")
    .email("E-mail inválido"),
  cpf: Yup.string()
    .matches(cpfNumber, "CPF inválido")
    .required("*Campo Obrigatório"),
  telefone: Yup.string()
    .matches(phoneNumber, "numero inválido")
    .required("*Campo Obrigatório"),
  instagram: Yup.string().matches(insta, "conta inválida"),
  data: Yup.date().required("*Campo Obrigatório"),
  checkbox: Yup.boolean().oneOf([true], "*"),
});

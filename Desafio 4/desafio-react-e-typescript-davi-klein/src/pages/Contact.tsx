import { ContactForm } from "../components/ContactForm";
import "./Contact.modules.scss";

export const Form = () => {
  return (
    <>
      <div className="Main_textArea">
        <h2>Preencha o formulário </h2>
        <ContactForm />
      </div>
    </>
  );
};

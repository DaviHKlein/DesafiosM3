import { Routes, Route } from "react-router-dom";

import { About } from "./pages/About";
import { Payments } from "./pages/Payments";
import { Delivery } from "./pages/Delivery";
import { Form } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Refund } from "./pages/Refund";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Pagamentos" element={<Payments />} />
        <Route path="/Entrega" element={<Delivery />} />
        <Route path="/Devolução" element={<Refund />} />
        <Route path="/Segurança" element={<Privacy />} />
        <Route path="/Contatos" element={<Form />} />
      </Routes>
    </>
  );
};

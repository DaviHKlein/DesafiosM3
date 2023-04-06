export const Newsletter = () => {
  return (
    <>
      <section className="Newsletter_Container">
        <div className="Newsletter_wrapper">
          <h4 className="News_title"> Assine nossa Newsletter </h4>

          <div className="Submite_wrapper">
            <input className="Input_News" type="text" placeholder="E-mail" />
            <button className="Button_News"> ENVIAR </button>
          </div>
        </div>
      </section>
    </>
  );
};

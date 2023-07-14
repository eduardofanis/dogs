import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Interface/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Página principal do site Dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;

import React from "react";
import { Helmet } from "react-helmet";

const Sitemetadata = () => {
  return (
    <Helmet>
      <html lang="en" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Roboto"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
    </Helmet>
  );
};

export default Sitemetadata;

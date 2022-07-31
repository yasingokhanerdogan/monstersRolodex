import React from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>NotFound</title>
        <meta name="description" content="NotFound Description" />
        <meta name="googlebot" content="noindex" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div>NotFound</div>
    </>
  );
};

export default NotFound;

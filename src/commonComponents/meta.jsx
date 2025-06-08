// src/components/PageHead.jsx

import { Helmet } from "react-helmet";

const PageHead = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title ? title : "Default Title"}</title>
      <meta
        name="description"
        content={description ? description : "Default description here"}
      />
    </Helmet>
  );
};

export default PageHead;

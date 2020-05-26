/* eslint-disable */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'bulma/css/bulma.css';

const Index = ({ meta, children }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       buildTime(formatString: "YYYY-MM-DD HH:mm")
  //       siteMetadata {
  //         title
  //         description
  //         basePath
  //       }
  //     }
  //   }
  // `);
  // const { title, description } = data.site.siteMetadata;
  // const { buildTime } = data.site;
  return (
    <>
      <div className="column is-two-thirds">{children}</div>
    </>
  );
};

export default Index;

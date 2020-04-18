import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import './base.css';
import 'sanitize.css';

const PageLayout = props => {
  const { children } = props;

  const style = css`
    margin: 0 auto;
    padding: 0 1rem 1.4rem;
    max-width: 960px;

    main {
      font-size: 1rem;
    }
  `;

  /*
   * See: https://www.gatsbyjs.org/docs/use-static-query/
   */
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div css={style}>
        <main>{children}</main>
        <footer>&copy; {new Date().getFullYear()} Ben Junya</footer>
      </div>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageLayout;

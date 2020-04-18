import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const style = css`
  background-color: turquoise;
  margin-bottom: 1.4rem;

  .header-content {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.4rem 1rem;
  }

  h1 {
    margin: 0;
  }

  .link {
    color: white;
    text-decorataion: none;
  }
`;

const Header = ({ siteTitle }) => (
  <header css={style}>
    <div className="header-content">
      <h1 style={{ margin: 0 }}>
        <Link className="link" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

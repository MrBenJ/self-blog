import React, { useContext } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { ThemeContext } from '../ThemeProvider';

const Header = ({ siteMetadata }) => {
  const { currentTheme } = useContext(ThemeContext);

  const style = css`
    background-color: ${currentTheme.colors.primary.main};
    margin-bottom: 1.4rem;

    .header-content {
      margin: 0 auto;
      max-width: 960px;
      padding: 1.4rem 1rem;
    }

    h1 {
      font-size: ${currentTheme.typography.header.size};
      margin: 0;
    }

    h2 {
      font-size: ${currentTheme.typography.subhead.size};
    }

    .link {
      color: ${currentTheme.colors.static.white};
      text-decorataion: none;
    }
  `;

  return (
    <header css={style}>
      <div className="header-content">
        <h1>
          <Link className="link" to="/">
            {siteMetadata.title}
          </Link>
        </h1>
        <h2>{siteMetadata.headline}</h2>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteMetadata: PropTypes.shape({
    title: PropTypes.string,
    headline: PropTypes.string
  }).isRequired
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

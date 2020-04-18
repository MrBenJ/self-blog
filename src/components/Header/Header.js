import React, { useContext } from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { ThemeContext } from '../ThemeProvider';

const Header = ({ siteTitle }) => {
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
      margin: 0;
    }

    .link {
      color: ${currentTheme.colors.static.white};
      text-decorataion: none;
    }
  `;

  return (
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
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

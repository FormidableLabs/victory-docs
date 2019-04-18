import React, { Component } from "react";
import PropTypes from "prop-types";
import NavLink from "./nav-link";
import LOGO from "../assets/logo-white.svg";

const siteRoot = "https://formidable.com";
const navItems = [
  { path: "/about", title: "What We Do" },
  { path: "/work", title: "Our Work" },
  { path: "/careers", title: "Careers" },
  { path: "/open-source", title: "Open Source" },
  { path: "/blog", title: "Journal" },
  { path: "/contact", title: "Contact" }
].map(ni => ({ ...ni, path: `${siteRoot}${ni.path}` }));

const ESCSAPE_KEY_CODE = 27;

export default class Header extends Component {
  static displayName = "Header";

  static propTypes = {
    activeLink: PropTypes.func,
    isOpen: PropTypes.bool,
    location: PropTypes.object,
    onToggleMenu: PropTypes.func,
    preventSamePathReload: PropTypes.bool
  };

  static defaultProps = {
    isOpen: false
  };

  constructor(props) {
    super(props);
    this.onResize = this.onResize.bind(this);
    this.onEscape = this.onEscape.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleAnchorClick = this.handleAnchorClick.bind(this);
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      document.addEventListener("keydown", this.onEscape);
      window.addEventListener("resize", this.onResize);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      document.removeEventListener("keydown", this.onEscape);
      window.removeEventListener("resize", this.onResize);
    }
  }

  /**
   * Close hamburger dropdown menu items when in desktop size
   *
   * @returns {void}
   */
  onResize() {
    // eslint-disable-next-line no-magic-numbers
    if (typeof window !== "undefined") {
      const mobileVersion = document.getElementsByClassName(
        "display-mobile-only"
      )[0];
      const style = getComputedStyle(mobileVersion);
      if (style.display === "none" && this.props.isOpen === true) {
        this.props.onToggleMenu(!this.props.isOpen);
      }
    }
  }

  /**
   * Closes the hamburger menu when the escape key is pressed
   * @param {number} keyCode accepts keycode from event
   * @memberof Header
   * @returns {void}
   */
  onEscape({ keyCode }) {
    if (this.props.isOpen === true) {
      // If pressed escape key
      if (keyCode === ESCSAPE_KEY_CODE) {
        this.props.onToggleMenu(!this.props.isOpen);
      }
    }
  }

  /**
   * @param {object} e React synthetic event object
   * Toggles open and closed the hamburger menu when clicking on the menu button
   * and prevents reload if the path selected is the same as the current path
   * @returns {void}
   */
  handleToggleMenu(e) {
    this.props.onToggleMenu(!this.props.isOpen);
    this.handleAnchorClick(e);
  }

  handleAnchorClick(e) {
    if (
      this.props.location.pathname === e.target.getAttribute("href") &&
      this.props.preventSamePathReload
    ) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  render() {
    const { isOpen } = this.props;
    return (
      <div>
        <div className={`site-header isOpen-${this.props.isOpen}`}>
          {/* Site-Header: Logo */}
          <a href={siteRoot} className="site-header__logo" title="Formidable">
            <img className="logo-type" src={LOGO} />
          </a>

          <nav className="site-header__nav display-desktop-only">
            {navItems.map((item, i) => (
              <NavLink
                className="site-header__nav-links"
                item={item}
                current={this.props.location.pathname}
                onClick={this.handleAnchorClick}
                activeLink={this.props.activeLink}
                key={i}
              />
            ))}
          </nav>
          <div className="site-header__nav display-mobile-only">
            {/* Site-Header: Toggle */}
            <button
              className="site-header__menu-toggle"
              title="navigation menu"
              aria-label="navigation menu"
              role="button"
              onClick={this.handleToggleMenu}
            >
              Menu
              <span className="site-header__menu-text" />
              <span className="site-header__menu-bar" />
            </button>
          </div>
        </div>
        {/* SITE MENU FOR MOBILE */}
        <nav className="site-menu" aria-hidden={!isOpen}>
          <ul className="site-menu__nav">
            {navItems.map((item, i) => (
              <li key={`navlink-${item}-${i}`} className="site-menu__nav-item">
                <NavLink
                  className="site-menu__nav-item-link"
                  onClick={this.handleToggleMenu}
                  item={item}
                  current={this.props.location.pathname}
                  activeLink={this.props.activeLink}
                  key={i}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

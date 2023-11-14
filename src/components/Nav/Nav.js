import './styles.css';

import { Link, useLocation } from 'react-router-dom';

import fox from '../../assets/fox.png';
import penguin from '../../assets/penguin.png';
import rabbit from '../../assets/rabbit.png';
import swan from '../../assets/swan.png';

const Nav = () => {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case '/':
        return 'nav-about';
      case '/skills':
        return 'nav-skills';
      case '/projects':
        return 'nav-projects';
      case '/contact':
        return 'nav-contact';
      default:
        return '';
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'ABOUT';
      case '/skills':
        return 'SKILLS';
      case '/projects':
        return 'PROJECTS';
      case '/contact':
        return 'CONTACT';
      default:
        return '';
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();
  const isCurrentPage = (navClass) => navClass === navPositionClass;

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? 'nav-link current' : 'nav-link';

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} className="icon" />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink('/', fox, 'fox icon', 'nav-about')}
      {renderNavLink('/skills', penguin, 'penguin icon', 'nav-skills')}
      {renderNavLink('/projects', rabbit, 'rabbit icon', 'nav-projects')}
      {renderNavLink('/contact', swan, 'swan icon', 'nav-contact')}
    </nav>
  );
};

export default Nav;

import AboutMenuItem from './AboutMenuItem';
import AboutSubheading from './AboutSubheading';
import careerIcon from '../../assets/snake.png';
import educationIcon from '../../assets/dove.png';
import infoData from './infoData';
import personalIcon from '../../assets/panda.png';
import { useState } from 'react';

const AboutMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<number>(1);
  const [activeSubheading, setActiveSubheading] = useState<number>(1);
  const menuItem = ['PERSONAL', 'EDUCATION', 'CAREER'];
  const activeMenuTitle = menuItem[activeMenuItem];
  const activeMenuIcon =
    activeMenuTitle === 'PERSONAL'
      ? personalIcon
      : activeMenuTitle === 'EDUCATION'
      ? educationIcon
      : careerIcon;
  const subheadings = { ...infoData }[activeMenuItem];

  const handleMenuItemClick = (menuItem: number) => {
    setActiveMenuItem(menuItem);
    setActiveSubheading(1);
  };

  const handleSubheadingClick = (subheading: number) => {
    setActiveSubheading(subheading);
  };

  return (
    <>
      <div className="menu">
        {menuItem.map((item, index) => (
          <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => handleMenuItemClick(index + 1)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img
            src={activeMenuIcon}
            alt={activeMenuTitle}
            className="active-menu-icon"
          />
          <h3>{activeMenuTitle}</h3>
        </div>
        {subheadings?.map((subheading, index) => (
          <AboutSubheading
            key={index}
            title={subheading?.title}
            content={subheading?.content}
            active={activeSubheading === index + 1}
            onClick={() => handleSubheadingClick(index + 1)}
            menuItem={activeMenuItem}
          />
        ))}
      </div>
    </>
  );
};

export default AboutMenu;

import './styles.css';

import backend from '../../assets/node.png';
import classNames from 'classnames';
import frontend from '../../assets/react.png';
import skills from './skillsData';
import { useState } from 'react';

const SkillsMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<number>(1);
  const menuItems = ['FRONT-END', 'BACK-END'];
  const currentIcon = activeMenuItem === 1 ? frontend : backend;

  const handleMenuItemClick = (menuItem: number) => {
    setActiveMenuItem(menuItem);
  };

  const renderContent = (skills: any) => {
    return skills.map((skill: any, index: number) => (
      <div key={index} className={`skill-sub-container-${activeMenuItem}`}>
        <h3>{skill.title}</h3>
        <div className="level-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? 'filled' : 'unfilled'
              }`}
            />
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="skill-menu">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={classNames('skill-item', {
            activeSkill: activeMenuItem === index + 1,
          })}
          onClick={() => handleMenuItemClick(index + 1)}
        >
          <h2 className="skill-title">{item}</h2>
        </div>
      ))}
      <img className="skill-icon" src={currentIcon} alt="current skill" />
      <div className="skill-sub-container">
        {renderContent({ ...skills }[activeMenuItem])}
      </div>
    </div>
  );
};

export default SkillsMenu;

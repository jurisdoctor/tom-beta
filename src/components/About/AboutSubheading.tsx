import './styles.css';

import classNames from 'classnames';

type Props = {
  title: string;
  content: any;
  active: boolean;
  menuItem: Number;
  onClick: () => void;
};

const AboutSubheading = ({
  title,
  content,
  active,
  onClick,
  menuItem,
}: Props) => {
  const subContainerClass = `sub-container-${menuItem}`;
  return (
    <>
      <div
        className={classNames(subContainerClass, {
          'active-subheading': active,
        })}
      >
        <h3 onClick={onClick}>{title}</h3>
        <div className="p-container">{content}</div>
      </div>
    </>
  );
};

export default AboutSubheading;

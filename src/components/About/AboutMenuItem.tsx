import classNames from 'classnames';

type Props = {
  title: string;
  active: boolean;
  onClick: () => void;
};

const AboutMenuItem = ({ title, active, onClick }: Props) => {
  return (
    <>
      <div className={classNames('item', { active })} onClick={onClick}>
        <h2 className="title">{title}</h2>
      </div>
    </>
  );
};

export default AboutMenuItem;

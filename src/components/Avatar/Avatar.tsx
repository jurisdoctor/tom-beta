import './styles.css';

import avatar from '../../assets/me.png';

type Props = {
  page: string;
};

const Avatar = ({ page }: Props) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <div>
      <div className={spanClass}></div>
      <img src={avatar} className={avatarClass} alt="avatar" />
    </div>
  );
};

export default Avatar;

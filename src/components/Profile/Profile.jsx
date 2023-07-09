import PropTypes from 'prop-types';
import {
  UserNameStyled,
  UserProfileStyled,
  UserStats,
  UserStatsNumber,
} from './Profile.Styled';

const Profile = props => {
  const { avatar, username, tag, location, stats } = props;
  return (
    <UserProfileStyled className="profile">
      <div className="userInfo">
        <img src={avatar} alt="User avatar" className="avatar" />
        <UserNameStyled className="name">{username}</UserNameStyled>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <UserStats>
        <li>
          <span className="label">Followers</span>
          <UserStatsNumber>{stats.followers}</UserStatsNumber>
        </li>
        <li>
          <span className="label">Views</span>
          <UserStatsNumber>{stats.views}</UserStatsNumber>
        </li>
        <li>
          <span className="label">Likes</span>
          <UserStatsNumber>{stats.likes}</UserStatsNumber>
        </li>
      </UserStats>
    </UserProfileStyled>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;

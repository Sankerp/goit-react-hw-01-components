import PropTypes from 'prop-types';
import { FriendsListStyled } from './FriendsList.Styled';

const FriendsList = props => {
  return (
    <FriendsListStyled className="friendList">
      {props.friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" key={id}>
            <span className="friendStatus">{isOnline ? '🟢' : '🔴'}</span>
            <img
              className="friendAvatar"
              src={avatar}
              alt="Friend avatar"
              width="60"
            />
            <p className="friendName">{name}</p>
          </li>
        );
      })}
    </FriendsListStyled>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendsList;

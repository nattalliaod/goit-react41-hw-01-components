import PropTypes from 'prop-types';
import { FriendListCard, Item } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <FriendListCard>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <Item key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </Item>
            ))}
        </FriendListCard>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
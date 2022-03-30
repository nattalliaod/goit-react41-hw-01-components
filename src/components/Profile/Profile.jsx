import PropTypes from 'prop-types';
import { UserProfile, UserDescription, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes}}) => {
    return (
        
        <UserProfile>
            
            <UserDescription>
                <Avatar
                    src={avatar}
                    alt={username}
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </UserDescription>

            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsItem>

                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsItem>

                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsItem>
            </Stats>

        </UserProfile>
       
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
    }),
};
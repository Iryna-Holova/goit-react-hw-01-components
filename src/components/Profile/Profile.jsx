import { ProfileCard, ProfileDescription, ProfileImage, ProfileLocation, ProfileName, ProfileTag, Stats, StatsItem, StatsLabel, StatsQuantity } from "./Profile.styled";
import PropTypes from "prop-types";

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats,
}) => {
    return (
        <ProfileCard>
            <ProfileDescription>
                <ProfileImage
                    src={avatar}
                    alt="User avatar"
                />
                <ProfileName>{username}</ProfileName>
                <ProfileTag>@{tag}</ProfileTag>
                <ProfileLocation>{location}</ProfileLocation>
            </ProfileDescription>
            <Stats>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{new Intl.NumberFormat('en-US').format(stats.followers)}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{new Intl.NumberFormat('en-US').format(stats.views)}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{new Intl.NumberFormat('en-US').format(stats.likes)}</StatsQuantity>
                </StatsItem>
            </Stats>
        </ProfileCard>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
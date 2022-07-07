import { FriendListItems } from "components/FriendListItem/FriendListItem";
import { FriendListContainer } from "./FriendList.styled";
import PropTypes from "prop-types";

export const FriendList = ({friends}) => {
    return (
        <FriendListContainer>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItems
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </FriendListContainer>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};
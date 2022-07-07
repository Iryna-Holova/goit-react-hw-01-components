import { FriendAvatar, FriendListItem, FriendName, FriendStatusOff, FriendStatusOn } from "./FriendListItem.styled";
import PropTypes from "prop-types";

export const FriendListItems = ({avatar, name, isOnline}) => {
    return (
        <FriendListItem>
            {isOnline
                ? (<FriendStatusOn></FriendStatusOn>)
                : (<FriendStatusOff></FriendStatusOff>)
            }
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendListItem>
    )
}

FriendListItems.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
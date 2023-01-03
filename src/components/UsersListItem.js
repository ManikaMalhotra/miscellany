import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import { Fragment } from "react";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
    const [doRemoveUser, isDeletingUser, removeUserError] = useThunk(removeUser);

    const handleDeleteUser = () => {
        doRemoveUser(user);
    };

    const header = <Fragment>
        <Button className = "mr-3" loading = {isDeletingUser} onClick = {handleDeleteUser}>
            <GoTrashcan />
        </Button>
        {removeUserError && <div>Error deleting</div>}
        {user.name}
    </Fragment>;

    return (
        <ExpandablePanel header = {header}>
            <AlbumsList user = {user} />
        </ExpandablePanel>
    );
};

export default UsersListItem;
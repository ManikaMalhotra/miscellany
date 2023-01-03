import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import { Fragment } from "react";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album }) => {
    const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = <Fragment>
        <Button className = "mr-2" onClick = {handleRemoveAlbum} loading = {removeAlbumResults.isLoading}>
            <GoTrashcan />
        </Button>
        {album.title}
    </Fragment>;

    return (
        <ExpandablePanel key = {album.id} header = {header}>
            <PhotosList album = {album} />
        </ExpandablePanel>
    );
};

export default AlbumsListItem;
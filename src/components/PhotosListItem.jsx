import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleRemovePhoto}
      >
        <GoTrashcan />
      </Button>
      {photo.name}
    </>
  );
  return (
    <ExpandablePanel key={photo.id} header={header}>
      {photo.name}
    </ExpandablePanel>
  );
}

export default PhotosListItem;

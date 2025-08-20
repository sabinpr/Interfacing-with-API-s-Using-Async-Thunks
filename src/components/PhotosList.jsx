import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";

function PhotosList({ album }) {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error Loading Photos</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos for {album.title}</h3>
        <Button onClick={handleAddPhoto} loading={results.isLoading}>
          + Add Photo
        </Button>
      </div>

      <div>{content}</div>
    </div>
  );
}

export default PhotosList;

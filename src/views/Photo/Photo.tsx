import { useParams } from 'react-router-dom'

import { useGetAlbum, useGetPhotoList } from 'src/api/hooks'
import { LoadingSpinner } from 'src/components'

import { Caption, Container, Image } from './Photo.style'

const Photo = () => {
  const { album, isLoading: isAlbumLoading } = useGetAlbum()
  const { photoList, isLoading: isPhotosLoading } = useGetPhotoList()
  const { photoId } = useParams()
  const photo = photoList?.find((photo) => photo.id === Number(photoId))

  const isLoading = isAlbumLoading || isPhotosLoading

  return (
    <div>
      <h1>Photo page</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <Image
            src={photo?.url}
            alt={photo?.title}
          />
          <Caption>Photo: {photo?.title}</Caption>
          <Caption>Album: {album?.title}</Caption>
        </Container>
      )}
    </div>
  )
}
export default Photo

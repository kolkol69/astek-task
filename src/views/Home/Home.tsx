import { useNavigate } from 'react-router-dom'

import { useGetPhotoList } from 'src/api/hooks'
import { LoadingSpinner } from 'src/components'

import { Container, List, ListItem } from './Home.styled'

const Home = () => {
  const { photoList, isLoading } = useGetPhotoList()
  const navigate = useNavigate()

  const openPhotoPage = (albumId: number, photoId: number) => {
    navigate(`/album/${albumId}/photo/${photoId}`)
  }

  return (
    <Container>
      <h1>Home</h1>
      <h3>List of photos</h3>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <List>
          {photoList?.map((photo) => (
            <ListItem
              key={photo.id}
              onClick={() => openPhotoPage(photo.albumId, photo.id)}
            >
              {photo.title}
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  )
}
export default Home

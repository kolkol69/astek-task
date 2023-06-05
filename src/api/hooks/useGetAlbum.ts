import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { getAlbumFn } from 'src/api/services'

export const useGetAlbum = () => {
  const { albumId } = useParams()

  const { data, isLoading, isError, error, refetch, isSuccess } = useQuery(
    ['album/:id', albumId],
    async () => await getAlbumFn(albumId ?? ''),
    {
      onError: (e: any) => {
        console.log(e)
      },
    },
  )

  return {
    album: data,
    data,
    isLoading,
    isError,
    error,
    isSuccess,
    refetch,
  }
}

import { useQuery } from 'react-query'

import { getPhotoListFn } from 'src/api/services'

export const useGetPhotoList = () => {
  const { data, isLoading, isError, error, refetch, isSuccess } = useQuery(
    ['photos'],
    getPhotoListFn,
    {
      refetchOnMount: false,
      onError: (e: any) => {
        console.log(e)
      },
    },
  )

  return { photoList: data, isLoading, isError, error, isSuccess, refetch }
}

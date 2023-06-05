import { authApi } from '../apiClient'
import { IAlbumResponse, IPhotosListResponse } from '../types'

export const getPhotoListFn = async () => {
  const response = await authApi.get<IPhotosListResponse>('albums/1/photos')
  return response.data
}

export const getAlbumFn = async (albumId: string) => {
  const response = await authApi.get<IAlbumResponse>(`/albums/${albumId}`)
  return response.data
}

export interface IPhotoResponse {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export type IPhotosListResponse = IPhotoResponse[]

export interface IAlbumResponse {
  id: number
  userId: number
  title: string
}

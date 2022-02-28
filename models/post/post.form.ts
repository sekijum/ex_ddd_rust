import { IPost } from '@/models/post'

export type TPostForm = Omit<IPost, 'id'>

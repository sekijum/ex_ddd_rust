import * as yup from 'yup'
import api from '@/api'
import { IPost, TPostForm } from '@/models/post'

export const usePosts = () => {
  const posts = ref<IPost[]>([])

  const fetchPosts = async () => {
    const response = await api.get<IPost[]>('/post').catch((error) => {
      console.error(error)
    })
    if (!response) return
    posts.value = response.data
  }
  return {
    fetchPosts,
    posts,
  }
}

export const usePost = () => {
  const route = useRoute()

  const post = ref<IPost>()
  const isLoading = ref(false)
  const id = route.params.id

  const fetchPost = async () => {
    const response = await api.get<IPost>(`/post/${id}`).catch((error) => {
      console.error(error)
    })
    if (!response) return
    post.value = response.data
  }

  const savePost = async (params: TPostForm) => {
    await Promise.all([
      id
        ? api.put(`/post/${id}`, params).catch((error) => {
            console.error(error)
          })
        : api.post('/post', params).catch((error) => {
            console.error(error)
          }),
    ])
  }

  const removePost = async (id) => {
    const response = await api.delete<void>(`/post/${id}`).catch((error) => {
      if (error.response.status !== 404) {
        console.error(error)
      }
      return error.response.status
    })
    if (response === 404 || response.status === 200) {
      return true
    }
    return false
  }

  return {
    fetchPost,
    savePost,
    removePost,
    post,
    isLoading,
  }
}

export const usePostValidate = () => {
  const schema = {
    title: yup.string().required('タイトルは必須です。'),
    content: yup.string().required('本文は必須です。'),
  }

  return {
    schema,
  }
}

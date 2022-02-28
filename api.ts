type Method = 'POST' | 'GET' | 'PUT' | 'DELETE'
type Path = string

const succeed = <T>(a: T) => ({
  type: 'succeeded' as const,
  data: a,
})

const fail = <T>(a: T) => ({
  type: 'failed' as const,
  data: a,
})

const api = async (method: Method, path: Path, params?) => {
  const ctx = useRuntimeConfig()
  const endpoint = ctx.ApibaseUrl

  const { data, error } = await useFetch(endpoint + path, {
    method: method,
    params,
  })
  try {
    return succeed<any>(await data.value)
  } catch (error) {
    return fail(error)
  }
}

export default api

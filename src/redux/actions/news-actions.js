// INDEX
export const newsIndexEnter = () => ({
  type: 'news/INDEX_ENTER',
})

export const newsIndexLoadSuccess = (payload) => ({
  type: 'news/INDEX_LOAD_SUCCESS',
  payload,
})

export const newsIndexLoadFail = (message) => ({
  type: 'news/INDEX_LOAD_FAIL',
  message,
})

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface NewsState {
  news: NewsItem[]
  isLoading: boolean
  isError: boolean
  skip: number
}

export interface NewsItem {
  id: number
  title: string
  body: string
  reactions: number
  tags: string[]
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  isError: false,
  skip: 0,
}

export const fetchNews = createAsyncThunk(
  "news/fetch",
  async (_, { getState }) => {
    const { skip } = (getState() as { news: NewsState }).news
    const response = await fetch(
      `https://dummyjson.com/posts?limit=10&skip=${skip}`,
    )
    const data = await response.json()
    return data.posts
  },
)

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false
        state.news = [...state.news, ...action.payload]
        state.skip = state.skip + 10
      })
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export default newsSlice.reducer

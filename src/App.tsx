import React, { FC, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews, NewsItem } from "./store/newsSlice"
import { RootState } from "./store/store"
import { LikeOutlined } from "@ant-design/icons"
import { Tag, Card, Space } from "antd"

interface PostProps {
  post: NewsItem
}

const Post: FC<PostProps> = ({ post }) => {
  const tags = post.tags.map((tag) => <Tag color={"blue"}>{tag}</Tag>)

  return (
    <>
      <Space align="center">
        <Card title={post.title} bordered={true}>
          <p>{post.body}</p>
          {tags}
          <>
            {post.reactions}
            <LikeOutlined />
          </>
        </Card>
      </Space>
    </>
  )
}

const App: React.FC = () => {
  const dispatch = useDispatch()
  const newsData = useSelector((state: RootState) => state.news)
  const skip = useSelector((state: RootState) => state.skip)

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return
    }

    dispatch(fetchNews(skip))
  }, [dispatch, skip])

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      {newsData.news.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default App

import React, { FC, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews } from "./app/newsSlice"
import { RootState } from "./app/store"
import { LikeOutlined } from "@ant-design/icons"
import { Tag, Card, Space, Flex } from "antd"

interface NewsItem {
  id: number
  title: string
  body: string
}

interface PostProps {
  post: {
    id: number
    title: string
    body: string
  }
}

const Post: FC<PostProps> = ({ post }) => {
  const tags = post.tags.map((tag) => <Tag color={"blue"}>{tag}</Tag>)

  return (
    <>
      {/*<Flex vertical>*/}
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
      {/*</Flex>*/}
    </>
  )
}

const App: React.FC = () => {
  const dispatch = useDispatch()
  // const news = useSelector((state) => state.news)
  const news: NewsItem[] = useSelector((state: RootState) => state.news)
  const skip = useSelector((state: RootState) => state.skip)
  // const [news, setNews] = useState<NewsItem[]>([])

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
      {news.news.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default App

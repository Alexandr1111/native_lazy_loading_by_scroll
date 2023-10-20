// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from './store';
// import { fetchPosts, fetchMorePosts } from './store/posts';
//
// const App: React.FC = () => {
//   const dispatch = useDispatch();
//   const { posts, loading } = useSelector((state: RootState) => state.posts);
//   const [currentPage, setCurrentPage] = useState(1);
//
//   useEffect(() => {
//     dispatch(fetchPosts(currentPage));
//   }, [dispatch, currentPage]);
//
//   const loadMorePosts = () => {
//     setCurrentPage(currentPage + 1);
//   };
//
//   const handleScroll = () => {
//     const isAtBottom =
//       window.innerHeight + window.scrollY >= document.body.offsetHeight;
//
//     if (isAtBottom && !loading) {
//       loadMorePosts();
//     }
//   };
//
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//
//   return (
//
//     Посты
//
//   {posts.map((post) => (
//
//     {post.title}
//
//     {post.body}
//
//
//
//   ))}
//   {loading &&
//   Загрузка...
//
//   }
//
// );
// };
//
// export default App;
export {}

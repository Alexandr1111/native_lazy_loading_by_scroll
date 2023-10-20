// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "./store";
// import { fetchNews } from "../src/store/newsSlice";
//
// const News: React.FC = () => {
//   const dispatch = useDispatch();
//   const { news, isLoading, isError, skip } = useSelector(
//     (state: RootState) => state.news
//   );
//
//   useEffect(() => {
//     dispatch(fetchNews());
//   }, [dispatch]);
//
//   const handleScroll = (e: React.UIEvent) => {
//     const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
//     if (scrollTop + clientHeight === scrollHeight) {
//       dispatch(fetchNews(skip + 10));
//     }
//   };
//
//   return (
//
//     {news.map((item) => (
//         <div>{item.title}</div>
//
//       )}
//
//
//
// );
// };
//
// export default News;

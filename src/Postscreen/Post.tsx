// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";

// const Post = () => {
//   const [userInfo, setUserInfo] = useState([]);
//   console.log(userInfo);
//   useEffect(() => {
//     const fetchdata = async () => {
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       setUserInfo(data);
//     };
//     fetchdata();
//   }, []);
//   return (
//     <div>
//       {userInfo.slice(0, 10).map((item: any) => (
//         <>
//           <p>{item?.userid}</p>
//           <p>{item?.id}</p>
//           <p>{item?.title}</p>
//           <p>{item?.body}</p>
//           {}
//         </>
//       ))}
//     </div>
//   );
// };

// export default Post;
import React from "react";

const Post = () => {
  return <div></div>;
};

export default Post;

import React from "react";

import FeedBackOne from "./FeedBackOne";

const projectData = [
  {
    id: 1,
    url: "/project/1",
    title: "Project Alpha",
    category: "Development",
    users: [
      { id: 1, name: "Alice", avatar: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: 2, name: "Bob", avatar: "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ],
  },
  {
    id: 2,
    url: "/project/2",
    title: "Project Beta",
    category: "Design",
    users: [
      { id: 3, name: "Charlie", avatar: "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ],
  },
];

const MainFeedBack = () => {
  return <FeedBackOne projects={projectData} />;
};

export default MainFeedBack;

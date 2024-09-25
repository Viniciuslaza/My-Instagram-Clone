import { Users } from "./users";

export const Posts = [
  {
    imageUrl: require("../assets/images/leMans.jpeg"),
    user: Users[0].user,
    likes: 2000,
    caption: "Le Mans Winner Car",
    profile_picture: Users[0].image,
    comments: [
      {
        user: "jao",
        comment: "Forza Ferrari",
      },
    ],
  },
  {
    imageUrl: require("../assets/images/realMadrid.jpg"),
    user: Users[2].user,
    likes: 20000,
    caption: "Mbape injure",
    profile_picture: Users[2].image,
    comments: [
      {
        user: "f1",
        comment: "No way",
      },
    ],
  },
];

import { Post } from "../models/Post";
import "./PostInList.css";

import { BsTrash } from "react-icons/bs";

interface Props {
  post: Post;
  onDelete: (id: string) => void;
}

const PostInList = ({ post, onDelete }: Props) => {
  return (
    <div className="PostInList">
      <div>
        <h1>{post.title}</h1>
        <p>{post.thought}</p>
      </div>
      <span onClick={() => onDelete(post.title)}>
        <BsTrash />
      </span>
    </div>
  );
};

export default PostInList;

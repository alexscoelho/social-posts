import { Post } from "../models/Post";
import PostInList from "./PostInList";
import "./SocialPosts.css";

interface Props {
  posts: Post[];
  onDelete: (id: string) => void;
}

const SocialPosts = ({ posts, onDelete }: Props) => {
  return (
    <div className="SocialPosts">
      {posts.map((post) => (
        <PostInList key={post?.title} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default SocialPosts;

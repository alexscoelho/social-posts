import { useState } from "react";
import { Post } from "../models/Post";
import "./PostForm.css";

import { AiOutlineClose } from "react-icons/ai";

interface Props {
  onHide: () => void;
  onAddPost: (post: Post) => void;
}

const PostForm = ({ onHide, onAddPost }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPost({
      title,
      thought,
    });
    setTitle("");
    setThought("");
    onHide();
  };

  return (
    <div className="PostForm">
      <span onClick={onHide}>
        <AiOutlineClose />
      </span>
      <form name="postForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          type="text"
          name="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postThought">Thought</label>
        <textarea
          name="postThought"
          value={thought}
          cols={30}
          rows={10}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>

        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;

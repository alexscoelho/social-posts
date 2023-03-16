import { useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import SocialPosts from "./components/SocialPosts";
import { Post } from "./models/Post";

import Modal from "react-modal";

const customStyles = {
  content: {
    backgroundColor: "#79c5e8",
    width: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    { title: "First Post", thought: "My first Post" },
    { title: "Second Post", thought: "My Second Post" },
    { title: "Thrid Post", thought: "My Thrid Post" },
  ]);

  const onHide = () => {
    setShowPostForm(false);
  };

  const onAddPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  const onDeletePost = (id: string) => {
    const newPosts = posts.filter((post) => post.title !== id);
    setPosts(newPosts);
  };

  return (
    <div className="App">
      <header>
        <h1>My Thoughts</h1>
      </header>
      <div className="new-post-button">
        <button onClick={() => setShowPostForm(true)}>New Thought</button>
      </div>
      <main>
        <SocialPosts posts={posts} onDelete={onDeletePost} />
      </main>
      <Modal ariaHideApp={false} isOpen={showPostForm} style={customStyles}>
        <PostForm onHide={onHide} onAddPost={onAddPost} />
      </Modal>
    </div>
  );
}

export default App;

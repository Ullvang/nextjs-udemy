import PostItem from "./post-item";
import classes from ".posts-grid.module.css";

function PostsGrid({ posts }) {
  return (
    <ul classes={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;

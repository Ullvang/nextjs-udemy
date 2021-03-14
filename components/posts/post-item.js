import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";

function PostItem({ post: { title, image, excerpt, date, slug } }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numberic",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div classes={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div classes={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;

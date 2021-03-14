import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/jon.jpg"
          alt="An image showing Jon"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jon</h1>
      <p>I blog about web development</p>
    </section>
  );
}

export default Hero;

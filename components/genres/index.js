import Link from "next/link";

import styles from "./styles.module.css";

const Genres = ({ genres }) => {
  return (
    <div className={styles.genres}>
      {genres.map((genre) => {
        return (
          <Link key={genre.id} className={styles.genre} href={`/${genre.id}`}>
            <div className={styles.name}>{genre.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Genres;

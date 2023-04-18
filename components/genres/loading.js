import Skeleton from "@/components/skeleton";

import styles from "./styles.module.css";

const GenresLoading = () => {
  return (
    <div className={styles.genres}>
      {Array(5)
        .fill(null)
        .map((_, index) => {
          return <Skeleton key={index} height={72} />;
        })}
    </div>
  );
};

export default GenresLoading;

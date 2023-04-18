import Link from "next/link";

const MovieNotFound = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>We couldn&apos;t find the movie you looking for!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default MovieNotFound;

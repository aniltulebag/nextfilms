"use client";

import Link from "next/link";

const MovieError = () => {
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
      <h1>An error has occurred. Sorry for that!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default MovieError;

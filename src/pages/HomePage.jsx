import React from "react";
import styles from "./styles/homepage.module.scss";
const HomePage = ({ lang }) => {
  console.log("Lang: ", lang);
  return (
    <main className={styles.container}>
      <h1>HomePage {lang.id}</h1>
    </main>
  );
};

export default HomePage;

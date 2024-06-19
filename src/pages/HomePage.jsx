import React from "react";
import styles from "./styles/homepage.module.scss";
const HomePage = ({ lang }) => {
  console.log("Lang: ", lang);
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.headerFera}
          src="/homePage/header/feras.webp"
          alt=""
        />
        <div className={styles.headerMain}>
          <img src="/homePage/header/logo.webp" alt="" />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/83HM1vGdp4I?si=BQMW_OuApZ1FIbQg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>{lang.header.trailer}</p>
        </div>
      </header>
      <section className={styles.embarkAdventure}>
        <img
          className={styles.embarkAdventureFera1}
          src="/homePage/embarkAdventure/fera1.webp"
          alt=""
        />
        <img
          className={styles.embarkAdventureFera2}
          src="/homePage/embarkAdventure/fera2.webp"
          alt=""
        />
        <h3>{lang.embarkAdventure.title}</h3>
        <h4>{lang.embarkAdventure.text1}</h4>
        <p>{lang.embarkAdventure.text2}</p>
      </section>
      <section className={styles.discoverVillages}>
        <img className={styles.discoverVillagesDeco} src="/homePage/discoverVillages/deco.webp" alt="" />
        <img className={styles.discoverVillagesFera1} src="/homePage/discoverVillages/fera1.webp" alt="" />
        <img className={styles.discoverVillagesFera2} src="/homePage/discoverVillages/fera2.webp" alt="" />
        <h3>{lang.discoverVillages.text}</h3>
      </section>
      <section>
        asdasd
      </section>
    </main>
  );
};

export default HomePage;

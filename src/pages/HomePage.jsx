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
        <img
          src="/homePage/header/deco.webp"
          className={styles.headerDeco}
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
        <img
          className={styles.discoverVillagesDeco}
          src="/homePage/discoverVillages/deco.webp"
          alt=""
        />
        <img
          className={styles.discoverVillagesFera1}
          src="/homePage/discoverVillages/fera1.webp"
          alt=""
        />
        <img
          className={styles.discoverVillagesFera2}
          src="/homePage/discoverVillages/fera2.webp"
          alt=""
        />
        <h3>{lang.discoverVillages.text}</h3>
      </section>
      <section className={styles.dominateCreatures}>
        <img
          className={styles.dominateCreaturesFera1}
          src="/homePage/dominateCreatures/fera1.webp"
          alt=""
        />
        <img
          className={styles.dominateCreaturesFera2}
          src="/homePage/dominateCreatures/fera2.webp"
          alt=""
        />
        <img
          className={styles.dominateCreaturesWave}
          src="/homePage/dominateCreatures/wave.webp"
          alt=""
        />
        <h3 className={styles.dominateCreaturesTitle}>
          {lang.dominateCreatures.title}
        </h3>
        <p className={styles.dominateCreaturesSubtitle}>
          {lang.dominateCreatures.text1}
        </p>
        <iframe
          className={styles.dominateCreaturesVideo1}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/83HM1vGdp4I?si=BQMW_OuApZ1FIbQg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className={styles.dominateCreaturesCube}>
          <img src="/homePage/dominateCreatures/cube.webp" alt="" />
          <p>{lang.dominateCreatures.text2}</p>
        </div>
        <iframe
          className={styles.dominateCreaturesVideo2}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/83HM1vGdp4I?si=BQMW_OuApZ1FIbQg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>
      <section className={styles.experimentTecs}>
        <p>{lang.dominateCreatures.text3}</p>
        <p>
          {lang.dominateCreatures.text4Pre}{" "}
          <b>{lang.dominateCreatures.text4Bold1}</b>{" "}
          {lang.dominateCreatures.text4Mid}{" "}
          <b>{lang.dominateCreatures.text4Bold2}</b>{" "}
          {lang.dominateCreatures.text4Final}
        </p>
      </section>
      <section className={styles.raiseCreatures}>
        <h4 className={styles.raiseCreaturesTitle}>
          {lang.raiseCreatures.title}
        </h4>
        <p className={styles.raiseCreaturesSubtitle}>
          {lang.raiseCreatures.text1}
        </p>
        <img
          className={styles.raiseCreaturesBreeding}
          src="/homePage/raiseCreature/breeding.webp"
          alt=""
        />
        <img
          className={styles.raiseCreaturesMobileBreeding1}
          src="/homePage/raiseCreature/mobileBreeding1.png"
          alt=""
        />
        <img
          className={styles.raiseCreaturesMobileBreeding2}
          src="/homePage/raiseCreature/mobileBreeding2.png"
          alt=""
        />
        <div className={styles.raiseCreaturesEgg}>
          <p>{lang.raiseCreatures.text2}</p>
          <img src="/homePage/raiseCreature/egg.webp" alt="" />
        </div>
      </section>
      <section className={styles.levelUpFeras}>
        <h3>{lang.levelUpFeras.title}</h3>
        <img src="/homePage/levelUp/fera.webp" alt="" />
        <div className={styles.levelUpFerasTiers}>
          <span>{lang.levelUpFeras.tier1}</span>
          <span>{lang.levelUpFeras.tier2}</span>
        </div>
      </section>
      <section className={styles.farmResources}>
        <img
          className={styles.farmResourcesFera1}
          src="/homePage/farmResources/fera1.webp"
          alt=""
        />
        <img
          className={styles.farmResourcesFera2}
          src="/homePage/farmResources/fera2.webp"
          alt=""
        />
        <img
          className={styles.farmResourcesRock1}
          src="/homePage/farmResources/rock1.webp"
          alt=""
        />
        <img
          className={styles.farmResourcesRock2}
          src="/homePage/farmResources/rock2.webp"
          alt=""
        />
        <h3 className={styles.farmResourcesTitle}>
          {lang.farmResources.title}
        </h3>
        {/*  */}
        <div className={styles.farmResourcesContainer1}>
          <div className={styles.farmResourcesContainer1Left}>
            <img src="/homePage/farmResources/wood.webp" alt="" />
          </div>
          <div className={styles.farmResourcesContainer1Right}>
            <p>{lang.farmResources.text1}</p>
            <div>
              <img src="/homePage/farmResources/berries.webp" alt="" />
              <img src="/homePage/farmResources/gems.webp" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.farmResourcesContainer1Mobile}>
          <div className={styles.farmResourcesContainer1Up}>
            <img src="/homePage/farmResources/wood.webp" alt="" />
            <p>{lang.farmResources.text1}</p>
          </div>
          <div className={styles.farmResourcesContainer1Down}>
            <img src="/homePage/farmResources/berries.webp" alt="" />
            <img src="/homePage/farmResources/gems.webp" alt="" />
          </div>
        </div>
        {/*  */}
        <p className={styles.farmResourcesText2}>{lang.farmResources.text2}</p>
        <iframe
          className={styles.farmResourcesVideo}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/83HM1vGdp4I?si=BQMW_OuApZ1FIbQg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <p className={styles.farmResourcesText3}>{lang.farmResources.text3}</p>
      </section>
      <section className={styles.participateBattles}>
        <h3 className={styles.participateBattlesTitle}>
          {lang.participateBattles.title}
        </h3>
        <p className={styles.participateBattlesSubtitle}>
          {lang.participateBattles.text1}
        </p>
        <div className={styles.participateBattlesContainer1}>
          <iframe
            className={styles.participateBattlesVideo}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/83HM1vGdp4I?si=BQMW_OuApZ1FIbQg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <img src="/homePage/participateBattles/fera.webp" alt="" />
        </div>
        <img
          className={styles.participateBattlesBattle}
          src="/homePage/participateBattles/battle.webp"
          alt=""
        />
      </section>
      <section>asdasd</section>
    </main>
  );
};

export default HomePage;

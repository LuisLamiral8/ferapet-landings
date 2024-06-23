import React, { useEffect, useState } from "react";
import styles from "./styles/homepage.module.scss";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const HomePage = ({ lang }) => {
  const [loader, setLoader] = useState(false);
  const [emailCounter, setEmailCounter] = useState(0);
  const [captchaState, setCaptchaState] = useState(true);
  const [headerEmailInput, setHeaderEmailInput] = useState("");
  const [footerEmailInput, setFooterEmailInput] = useState("");
  const [modalKickstarter, setModalKickstarter] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptchaState(true);

    if (isValidEmail(emailFront)) {
      setInputSubmit(false);
    }
  }
  function actualLanguage() {
    switch (lang.id) {
      case 1:
        return "Español";
      case 2:
        return "Ingles";
      case 3:
        return "Portugues";
      case 4:
        return "Coreano";
      case 5:
        return "Japones";
      case 6:
        return "Aleman";
      case 7:
        return "Holandes";
      case 8:
        return "Ruso";
      case 9:
        return "Frances";
      case 10:
        return "Chino";
      case 11:
        return "Italiano";
      default:
        break;
    }
  }
  const postEmail = (e, emailInput) => {
    e.preventDefault();
    if (captchaState && isValidEmail(emailInput)) {
      axios
        .post(
          `https://starfish-app-licfp.ondigitalocean.app/ferapet/save`,
          // `localhost:4000/ferapet/save`,
          { email: emailInput, origin: actualLanguage() }
        )
        .then(() => {
          getEmails();
          toast.success(lang.toast.info1, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            setModalKickstarter(true);
          }, 1000);
          setTimeout(() => {
            window.location.href =
              "https://www.kickstarter.com/projects/secretforest/secretforest";
          }, 7500);
          setFooterEmailInput("");
          setHeaderEmailInput("");
        })
        .catch((error) => {
          console.error("Error al enviar el email:", error);
          toast.error(lang.toast.emailRegistered, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    } else {
      if (captchaState == false) {
        toast.error(lang.toast.verifyCaptcha, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      if (isValidEmail(emailInput) == false || emailInput == "") {
        toast.error(lang.toast.emailWrong, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };
  const getEmails = () => {
    axios
      .get(`https://starfish-app-licfp.ondigitalocean.app/ferapet/count`)
      // .get(`localhost:4000/ferapet/get`)
      .then((response) => {
        setEmailCounter(response.data.emailCuantity);
      });
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptchaState(true);

    if (isValidEmail(emailFront)) {
      setInputSubmit(false);
    }
  }
  useEffect(() => {
    getEmails();
    setTimeout(() => {
      setLoader(false);
    }, 3000);
    console.log("actualLenguaje: ", actualLanguage());
  }, []);

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
      <section className={styles.enjoyFeras}>
        <img
          className={styles.enjoyFerasFera1}
          src="/homePage/enjoyFeras/fera1.webp"
          alt=""
        />
        <img
          className={styles.enjoyFerasFera2}
          src="/homePage/enjoyFeras/fera2.webp"
          alt=""
        />
        <img
          className={styles.enjoyFerasMobileFera2}
          src="/homePage/enjoyFeras/mobileFera2.webp"
          alt=""
        />
        <div className={styles.enjoyFerasMain}>
          <h3>{lang.enjoyFeras.title}</h3>
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
        </div>
      </section>
      <section className={styles.customStrategies}>
        <img
          className={styles.customStrategiasFera1}
          src="/homePage/customStrategies/fera1.webp"
          alt=""
        />
        <img
          className={styles.customStrategiasFera2}
          src="/homePage/customStrategies/downFeras1.webp"
          alt=""
        />
        <img
          className={styles.customStrategiasFera3}
          src="/homePage/customStrategies/downFeras2.webp"
          alt=""
        />
        <img
          className={styles.customStrategiasTrophy}
          src="/homePage/customStrategies/trophy.webp"
          alt=""
        />
        <img
          className={styles.customStrategiasMobileFera1}
          src="/homePage/customStrategies/mobileFera1.png"
          alt=""
        />
        <img
          className={styles.customStrategiasMobileFera2}
          src="/homePage/customStrategies/mobileFera2.png"
          alt=""
        />
        <h3>{lang.customStrategies.title}</h3>
        <div className={styles.customStrategiesContainer1}>
          <p>{lang.customStrategies.text1}</p>
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
        </div>
        <div className={styles.customStrategiesFloat}>
          <p>{lang.customStrategies.text2}</p>
        </div>
      </section>
      <section className={styles.ferapedia}>
        <img
          className={styles.ferapediaFera1}
          src="/homePage/ferapedia/topFera1.webp"
          alt=""
        />
        <img
          className={styles.ferapediaFera2}
          src="/homePage/ferapedia/midFera1.webp"
          alt=""
        />
        <img
          className={styles.ferapediaFera3}
          src="/homePage/ferapedia/downFera1.webp"
          alt=""
        />
        <img
          className={styles.ferapediaFera4}
          src="/homePage/ferapedia/downFera2.webp"
          alt=""
        />
        <h3 className={styles.ferapediaTitle}>{lang.ferapedia.title}</h3>
        <div className={styles.ferapediaContainer1}>
          <div className={styles.ferapediaContainer1Left}>
            <p>{lang.ferapedia.text1}</p>
          </div>
          <div className={styles.ferapediaContainer1Right}>
            <img src="/homePage/ferapedia/ferapedia.webp" alt="" />
          </div>
        </div>
        <p className={styles.ferapediaText1}>{lang.ferapedia.text2}</p>
        <iframe
          className={styles.ferapediaVideo}
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
      <section className={styles.universeFera}>
        <h3>{lang.universeFera.title}</h3>
        <div className={styles.universeFeraContainer}>
          <div className={styles.universeFeraSectionTitle}>
            <h4>{lang.universeFera.subtitle1}</h4>
            <div className={styles.universeFeraSectionSeparator}></div>
          </div>
          <div className={styles.universeFeraSectionMain}>
            <div className={styles.universeFeraSectionLeft}>
              <p>{lang.universeFera.text1}</p>
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
            </div>
            <div className={styles.universeFeraSectionRight}>
              <img src="/homePage/universeFera/fera1.webp" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.universeFeraContainer}>
          <div className={styles.universeFeraSectionTitle}>
            <h4>{lang.universeFera.subtitle2}</h4>
            <div className={styles.universeFeraSectionSeparator}></div>
          </div>
          <div className={styles.universeFeraSectionMain}>
            <div className={styles.universeFeraSectionLeft}>
              <p>{lang.universeFera.text2}</p>
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
            </div>
            <div className={styles.universeFeraSectionRight}>
              <img src="/homePage/universeFera/fera2.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.strengthFeras}>
        <img
          className={styles.strengthFera}
          src="/homePage/strengthFeras/fera1.webp"
          alt=""
        />
        <h3 className={styles.strengthFerasTitle}>{lang.getReady.title1}</h3>
        <div className={styles.strengthFerasSeparator}></div>
        <p className={styles.strengthFerasText1}>{lang.getReady.text1}</p>
        <iframe
          className={styles.strengthFerasVideo}
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
      <section className={styles.getReady}>
        <img
          className={styles.getReadyFera1}
          src="/homePage/getReady/downFera1.webp"
          alt=""
        />
        <img
          className={styles.getReadyFera2}
          src="/homePage/getReady/downFera2.webp"
          alt=""
        />
        <img
          className={styles.getReadyWave}
          src="/homePage/getReady/wave.webp"
          alt=""
        />
        <h3 className={styles.getReadyTitle}>{lang.getReady.title2}</h3>
        <p className={styles.getReadySubtitle}>{lang.getReady.subtitle}</p>
        <div className={styles.getReadyForm}>
          <span>{lang.getReady.label}</span>
          <ReCAPTCHA
            size="normal"
            className={styles.headerCaptcha}
            sitekey="6LffkPUpAAAAAFz29HWVDFmBumIYm_DMCcb1V2I3"
            onChange={onChange}
          />
          <div className={styles.getReadyInput}>
            <input type="text" placeholder={lang.getReady.placeholder} />
            <button>{lang.getReady.signIn}</button>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <img src="/homePage/footer/zelcar.webp" alt="" />
          <img src="/homePage/footer/ferapet.webp" alt="" />
        </div>
        <div className={styles.footerRight}>
          <a href="#">{lang.footer.termsConditions}</a>
          <a href="#">{lang.footer.privacyPolicy}</a>
          <a href="#">{lang.footer.cookiesPolicy}</a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;

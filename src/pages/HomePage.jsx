import React, { useEffect, useState } from "react";
import styles from "./styles/homepage.module.scss";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomePage = ({ lang }) => {
  const [loader, setLoader] = useState(false);
  const [emailCounter, setEmailCounter] = useState(0);
  const [captchaState, setCaptchaState] = useState(true);
  const [footerEmailInput, setFooterEmailInput] = useState("");
  const [modalKickstarter, setModalKickstarter] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [activeLang, setActiveLang] = useState(false);
  const navigate = useNavigate();
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
          `https://hammerhead-app-i4xs5.ondigitalocean.app/ferapet/save`,
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
      .get(`https://hammerhead-app-i4xs5.ondigitalocean.app/ferapet/count`)
      // .get(`localhost:4000/ferapet/get`)
      .then((response) => {
        setEmailCounter(response.data.emailCuantity + 5000);
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
    // console.log("actualLenguaje: ", actualLanguage());
  }, []);

  // console.log("Lang: ", lang);
  return (
    <main className={styles.container}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {modalKickstarter == true && (
        <>
          <div className={styles.kickstarterXl}>
            <div>
              <img loading="lazy" src="/landingPage/modal/xl.jpg" alt="" />
              <button onClick={() => setModalKickstarter(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffff"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.kickstarterMd}>
            <div>
              <img loading="lazy" src="/landingPage/modal/md.jpg" alt="" />
              <button onClick={() => setModalKickstarter(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffff"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.kickstarterXs}>
            <div>
              <img loading="lazy" src="/landingPage/modal/xs.jpg" alt="" />
              <button onClick={() => setModalKickstarter(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffff"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
      <nav className={styles.nav}>
        <ul className={styles.desktopUl}>
          <li>
            <a href="#home">{lang.nav.item1}</a>
          </li>
          <li>
            <a href="#feracube">{lang.nav.item2}</a>
          </li>
          <li>
            <a href="#breeding">{lang.nav.item3}</a>
          </li>
          <li>
            <a href="#professions">{lang.nav.item4}</a>
          </li>
          <li>
            <a href="#battle">{lang.nav.item5}</a>
          </li>
          <li>
            <a href="#ferapedia">{lang.nav.item6}</a>
          </li>
          <li>
            <a href="#world">{lang.nav.item7}</a>
          </li>
          <li onClick={() => setActiveLang(!activeLang)}>
            <a href="#">{lang.nav.item8}</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
            </svg>
          </li>
        </ul>
        <ul
          className={
            activeNav == true
              ? `${styles.mobileUl} ${styles.activeNav}`
              : `${styles.mobileUl}`
          }
        >
          <li>
            <a href="#home" onClick={() => setActiveNav(false)}>
              {lang.nav.item1}
            </a>
          </li>
          <li>
            <a href="#feracube" onClick={() => setActiveNav(false)}>
              {lang.nav.item2}
            </a>
          </li>
          <li>
            <a href="#breeding" onClick={() => setActiveNav(false)}>
              {lang.nav.item3}
            </a>
          </li>
          <li>
            <a href="#professions" onClick={() => setActiveNav(false)}>
              {lang.nav.item4}
            </a>
          </li>
          <li>
            <a href="#battle" onClick={() => setActiveNav(false)}>
              {lang.nav.item5}
            </a>
          </li>
          <li>
            <a href="#ferapedia" onClick={() => setActiveNav(false)}>
              {lang.nav.item6}
            </a>
          </li>
          <li>
            <a href="#world" onClick={() => setActiveNav(false)}>
              {lang.nav.item7}
            </a>
          </li>
        </ul>
        <ul
          className={
            activeLang == true
              ? `${styles.desktopLang} ${styles.activeLang}`
              : `${styles.desktopLang}`
          }
        >
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/es");
                setActiveLang(false);
              }}
            >
              Español
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/en");
                setActiveLang(false);
              }}
            >
              English
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/br");
                setActiveLang(false);
              }}
            >
              Portuguese
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/ko");
                setActiveLang(false);
              }}
            >
              Korean
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/ja");
                setActiveLang(false);
              }}
            >
              Japanese
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/de");
                setActiveLang(false);
              }}
            >
              German
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/nl");
                setActiveLang(false);
              }}
            >
              Dutch
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/ru");
                setActiveLang(false);
              }}
            >
              Russian
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/fr");
                setActiveLang(false);
              }}
            >
              French
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/zh");
                setActiveLang(false);
              }}
            >
              Chinese
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/it");
                setActiveLang(false);
              }}
            >
              Italian
            </a>
          </li>
        </ul>
        <button
          onClick={() => {
            setActiveLang(false);
            setActiveNav(!activeNav);
          }}
          className={styles.ham}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#ffff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 17h14M5 12h14M5 7h14"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            setActiveNav(false);
            setActiveLang(!activeLang);
          }}
          className={styles.langHam}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffff"
              d="M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2s.06-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.92 7.92 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8 8 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.7 15.7 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
            />
          </svg>
        </button>
      </nav>
      <header id="home" className={styles.header}>
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
      <section id="feracube" className={styles.dominateCreatures}>
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
      <section id="breeding" className={styles.raiseCreatures}>
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
      <section id="professions" className={styles.farmResources}>
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
      <section id="battle" className={styles.participateBattles}>
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
        {/* <img
          className={styles.customStrategiasTrophy}
          src="/homePage/customStrategies/trophy.webp"
          alt=""
        /> */}
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
      <section id="ferapedia" className={styles.ferapedia}>
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
      <section id="world" className={styles.universeFera}>
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
              <img className={styles.universeFeraImage1}src="/homePage/universeFera/fera1.webp" alt="" />
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
            <input
              value={footerEmailInput}
              onChange={(e) => setFooterEmailInput(e.target.value)}
              type="text"
              placeholder={lang.getReady.placeholder}
            />
            <button onClick={(e) => postEmail(e, footerEmailInput)}>
              {lang.getReady.signIn}
            </button>
          </div>
          <span>
            {lang.toast.counter1} {emailCounter} {lang.toast.counter2}
          </span>
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

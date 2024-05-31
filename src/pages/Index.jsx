import React from "react";
import Loader from "../components/Loader";
import styles from "./styles/index.module.scss";
import ReCAPTCHA from "react-google-recaptcha";
const Index = ({ lang }) => {
  const [loader, setLoader] = React.useState(true);
  let selectedLang =
    lang.id === 1
      ? "es"
      : lang.id === 2
      ? "en"
      : lang.id === 3
      ? "br"
      : lang.id === 4
      ? "nl"
      : lang.id === 5
      ? "de"
      : lang.id === 6
      ? "fr"
      : lang.id === 7
      ? "it"
      : "en";

  React.useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptchaState(true);

    if (isValidEmail(emailFront)) {
      setInputSubmit(false);
    }
  }
  return (
    <main className={styles.container}>
      <Loader loader={loader}></Loader>
      <a href="#header" className={styles.upArrow}>
        <img src="/arrow.png" alt="" />
      </a>
      <header id="header" className={styles.header}>
        <img
          src="/desktop/header_logo.png"
          className={styles.headerLogo}
          alt=""
        />
        <h1>{lang.header.title}!</h1>
        <div className={styles.headerForm}>
          <label htmlFor="" className={styles.headerJoinPeople}>
            And join 2000 more people!
          </label>
          <label htmlFor="">{lang.header.email}:</label>
          <input type="text" placeholder={lang.header.placeholder} />
          <ReCAPTCHA
            size="normal"
            className={styles.headerCaptcha}
            sitekey="6LcKs2MoAAAAANbEb8FgM_zGq-AZx2SegfCCegkn"
            onChange={onChange}
          />
          <ReCAPTCHA
            size="compact"
            className={styles.headerCaptchaMobile}
            sitekey="6LcKs2MoAAAAANbEb8FgM_zGq-AZx2SegfCCegkn"
            onChange={onChange}
          />
          <button>{lang.header.signUp}</button>
        </div>
        <img
          src="/desktop/header_bgForm.png"
          className={styles.headerFormBg}
          alt=""
        />
      </header>
      <section className={styles.section1}>
        <h3>{lang.section1.text1}</h3>
        <img
          src="/section1/leftDeco.png"
          alt=""
          className={styles.section1LeftDeco}
        />
        <img
          src="/section1/rightDeco.png"
          alt=""
          className={styles.section1RightDeco}
        />
        <img
          src="/section1/mobileDeco.png"
          alt=""
          className={styles.section1MobileDeco}
        />
      </section>
      <section className={styles.section2}>
        <h3>{lang.section2.text1}</h3>
        <img
          className={styles.section2Ferapets}
          src="/section2/ferapets.png"
          alt=""
        />
        <img
          className={styles.section2MobileFerapets}
          src="/section2/mobileFerapets.png"
          alt=""
        />
      </section>
      <section className={styles.section3}>
        <h3 className={styles.section3Title}>{lang.section3.title}</h3>
        <h4 className={styles.section3Text1}>{lang.section3.text1}</h4>
        <div className={styles.section3Float}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
          >
            <path
              fill="#ffff"
              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"
            />
          </svg>
          <h4>{lang.section3.text3}</h4>
        </div>
        <h4 className={styles.section3Text2}>{lang.section3.text2}</h4>
        <img
          className={styles.section3LeftDeco}
          src="/section3/leftDeco.png"
          alt=""
        />
        <img
          className={styles.section3LeftDeco2}
          src="/section3/leftDeco2.png"
          alt=""
        />
        <img
          className={styles.section3RightDeco}
          src="/section3/rightDeco.png"
          alt=""
        />
      </section>
      <section className={styles.preSection4}>
        <h3>{lang.section3.text4}</h3>
        <div></div>
      </section>
      <section className={styles.section4}>
        <h3>{lang.section4.title}</h3>
        <p>{lang.section4.text1}</p>
        <img
          className={styles.section4Elements}
          src="./section4/elements.png"
          alt=""
        />
        <img
          className={styles.section4Image}
          src="./section4/image.png"
          alt=""
        />
        <img
          className={styles.section4MobileImage}
          src="./section4/mobileImage.png"
          alt=""
        />
      </section>
      <section className={styles.section5}>
        <h3>{lang.section5.title}</h3>
        <div className={styles.section5UpContainer}>
          <img src="/section5/first.png" alt="" />
          <p>{lang.section5.text1}</p>
        </div>
        <div className={styles.section5DownContainer}>
          <p>{lang.section5.text2}</p>
          <img src="/section5/second.png" alt="" />
        </div>
      </section>
      <section>asd</section>
    </main>
  );
};

export default Index;

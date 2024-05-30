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
      <header className={styles.header}>
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
      </section>
      <section className={styles.section2}>
        <h3>{lang.section2.text1}</h3>
      </section>
    </main>
  );
};

export default Index;

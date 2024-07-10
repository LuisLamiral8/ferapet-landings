import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import styles from "./styles/index.module.scss";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-cards";
import Navbar from "../components/Navbar";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const LandingPage = ({ lang }) => {
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
    console.log("actualLenguaje: ", actualLanguage());
  }, []);

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
      <Loader loader={loader}></Loader>
      <Navbar lang={lang} isHome={true} />
      <a href="#header" className={styles.upArrow}>
        <img loading="lazy" src="/landingPage/arrow.png" alt="" />
      </a>
      <header id="header" className={styles.header}>
        <img loading="lazy"
          src="/landingPage/desktop/header_logo.png"
          className={styles.headerLogo}
          alt=""
        />
        <h1>{lang.header.title}!</h1>
        <div className={styles.headerForm}>
          <label htmlFor="" className={styles.headerJoinPeople}>
            {lang.toast.counter1} {emailCounter} {lang.toast.counter2}
          </label>
          <label htmlFor="">{lang.header.email}:</label>
          <input
            type="text"
            value={headerEmailInput}
            onChange={(e) => setHeaderEmailInput(e.target.value)}
            placeholder={lang.header.placeholder}
          />
          <ReCAPTCHA
            size="normal"
            className={styles.headerCaptcha}
            sitekey="6LffkPUpAAAAAFz29HWVDFmBumIYm_DMCcb1V2I3"
            onChange={onChange}
          />
          <ReCAPTCHA
            size="compact"
            className={styles.headerCaptchaMobile}
            sitekey="6LffkPUpAAAAAFz29HWVDFmBumIYm_DMCcb1V2I3"
            onChange={onChange}
          />
          <button onClick={(e) => postEmail(e, headerEmailInput)}>
            {lang.header.signUp}
          </button>
          <img loading="lazy" className={styles.feraRed} src="/landingPage/FeraRed.png" alt="" />
        </div>
        <img loading="lazy"
          src="/landingPage/desktop/header_bgForm.png"
          className={styles.headerFormBg}
          alt=""
        />
      </header>
      <section className={styles.section1}>
        <h3>{lang.section1.text1}</h3>
        <img loading="lazy"
          src="/landingPage/section1/leftDeco.png"
          alt=""
          className={styles.section1LeftDeco}
        />
        <img loading="lazy"
          src="/landingPage/section1/rightDeco.png"
          alt=""
          className={styles.section1RightDeco}
        />
        <img loading="lazy"
          src="/landingPage/section1/mobileDeco.png"
          alt=""
          className={styles.section1MobileDeco}
        />
      </section>
      <section className={styles.section2}>
        <h3>{lang.section2.text1}</h3>
        <img loading="lazy"
          className={styles.section2Ferapets}
          src="/landingPage/section2/ferapets.png"
          alt=""
        />
        <img loading="lazy"
          className={styles.section2MobileFerapets}
          src="/landingPage/section2/mobileFerapets.png"
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
        <img loading="lazy"
          className={styles.section3LeftDeco}
          src="/landingPage/section3/leftDeco.png"
          alt=""
        />
        <img loading="lazy"
          className={styles.section3LeftDeco2}
          src="/landingPage/section3/leftDeco2.png"
          alt=""
        />
        <img loading="lazy"
          className={styles.section3RightDeco}
          src="/landingPage/section3/rightDeco.png"
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
        <img loading="lazy"
          className={styles.section4Elements}
          src="/landingPage/section4/elements.png"
          alt=""
        />
        <img loading="lazy"
          className={styles.section4BigImage}
          src="/landingPage/section4/bigImage.png"
          alt=""
        />
        <img loading="lazy"
          className={styles.section4Image}
          src="/landingPage/section4/image.webp"
          alt=""
        />
        <img loading="lazy"
          className={styles.section4MobileImage}
          src="/landingPage/section4/mobileImage.webp"
          alt=""
        />
      </section>
      <section className={styles.section5}>
        <h3>{lang.section5.title}</h3>
        <div className={styles.section5UpContainer}>
          <img loading="lazy" src="/landingPage/section5/first.png" alt="" />
          <p>{lang.section5.text1}</p>
        </div>
        <div className={styles.section5DownContainer}>
          <p>{lang.section5.text2}</p>
          <img loading="lazy" src="/landingPage/section5/second.png" alt="" />
        </div>
      </section>
      <section className={styles.section6}>
        <h3>{lang.section6.title}</h3>
        <p>{lang.section6.text1}</p>
        <div className={styles.section6Tiers}>
          <div className={styles.section6Tier}>
            <img loading="lazy" src="/landingPage/section6/tier1.png" alt="" />
            <p>Tier 1</p>
          </div>
          <div className={styles.section6Tier}>
            <img loading="lazy" src="/landingPage/section6/tier2.png" alt="" />
            <p>Tier 2</p>
          </div>
          <div className={styles.section6Tier}>
            <img loading="lazy" src="/landingPage/section6/tier3.png" alt="" />
            <p>Tier 3</p>
          </div>
        </div>
        <img loading="lazy" className={styles.section6Bg} src="/landingPage/section6/bg.png" alt="" />
      </section>
      {/*  */}
      <section className={styles.section7}>
        <h3>{lang.section7.title}</h3>
        <img loading="lazy" src="/landingPage/section7/battle.png" alt="" />
      </section>
      {/*  */}
      <section className={styles.section8}>
        <h3>{lang.section8.title}</h3>
        <img loading="lazy" src="/landingPage/section8/battle.jpg" alt="" />
      </section>
      {/*  */}
      <section className={styles.section9}>
        <h3>{lang.section9.title}</h3>
        <div className={styles.section9Main}>
          <div className={styles.section9Left}>
            <p>{lang.section9.text1}</p>
            <div></div>
            <img loading="lazy" src="/landingPage/section9/ferapets.png" alt="" />
          </div>
          <div className={styles.section9Right}>
            <img loading="lazy" src="/landingPage/section9/ferapedia.png" alt="" />
          </div>
        </div>
        <div className={styles.section9Divisor}>
          <div className={styles.section9DivisorLeft}></div>
          <div className={styles.section9DivisorMiddle}></div>
          <div className={styles.section9DivisorRight}></div>
        </div>
      </section>
      {/*  */}
      <footer className={styles.form}>
        <p>{lang.form.title}</p>
        <div className={styles.headerForm}>
          <label htmlFor="" className={styles.headerJoinPeople}>
            {lang.toast.counter1} {emailCounter} {lang.toast.counter2}
          </label>
          <label htmlFor="">{lang.header.email}:</label>
          <input
            type="text"
            value={footerEmailInput}
            onChange={(e) => setFooterEmailInput(e.target.value)}
            placeholder={lang.header.placeholder}
          />
          <ReCAPTCHA
            size="normal"
            className={styles.headerCaptcha}
            sitekey="6LffkPUpAAAAAFz29HWVDFmBumIYm_DMCcb1V2I3"
            onChange={onChange}
          />
          <ReCAPTCHA
            size="compact"
            className={styles.headerCaptchaMobile}
            sitekey="6LffkPUpAAAAAFz29HWVDFmBumIYm_DMCcb1V2I3"
            onChange={onChange}
          />
          <button onClick={(e) => postEmail(e, footerEmailInput)}>
            {lang.header.signUp}
          </button>
        <img loading="lazy" className={styles.feraBlue} src="/landingPage/FeraBlue.png" alt="" />
        </div>
        <img loading="lazy" className={styles.formBg1} src="/landingPage/form/left.png" alt="" />
        <img loading="lazy" className={styles.formBg2} src="/landingPage/form/right.png" alt="" />
        <img loading="lazy" className={styles.formBg3} src="/landingPage/form/mid1.png" alt="" />
        <img loading="lazy" className={styles.formBg4} src="/landingPage/form/mid2.png" alt="" />
        <div className={styles.formDiscord}>
          <p>{lang.footer.title}</p>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5.12em"
              height="1em"
              viewBox="0 0 512 100"
            >
              <path
                fill="white"
                d="M82.003 0a104.229 104.229 0 0 1 26.402 8.297c14.484 21.63 21.68 46.025 19.023 74.163c-11.082 8.286-21.831 13.313-32.4 16.603a80.176 80.176 0 0 1-6.935-11.421a68.02 68.02 0 0 0 10.94-5.326a65.816 65.816 0 0 1-2.677-2.118c-20.805 9.85-43.684 9.85-64.74 0c-.866.73-1.762 1.44-2.678 2.118a68.192 68.192 0 0 0 10.921 5.315a80.53 80.53 0 0 1-6.935 11.422C22.365 95.763 11.626 90.736.544 82.46C-1.722 58.188 2.807 33.566 19.516 8.317A103.882 103.882 0 0 1 45.939 0c1.147 2.056 2.506 4.822 3.422 7.022c9.663-1.48 19.416-1.48 29.26 0A77.412 77.412 0 0 1 82.003 0m253.933 31.687c7.045 0 12.893 1.51 17.544 4.533v13.17c-1.64-1.152-3.554-2.087-5.738-2.807c-2.184-.72-4.52-1.08-7.016-1.08c-4.368 0-7.78.813-10.246 2.447c-2.467 1.635-3.703 3.763-3.703 6.405c0 2.59 1.196 4.709 3.592 6.374c2.397 1.655 5.868 2.488 10.428 2.488c2.345 0 4.66-.35 6.945-1.038c2.275-.7 4.238-1.553 5.878-2.56v12.737c-5.163 3.167-11.152 4.75-17.967 4.75c-5.736-.02-10.629-1.028-14.665-3.043c-4.035-2.015-7.086-4.75-9.119-8.204c-2.033-3.454-3.06-7.34-3.06-11.658s1.057-8.183 3.17-11.586c2.114-3.403 5.214-6.076 9.302-8.02c4.085-1.942 8.967-2.908 14.655-2.908m-52.917-.01c3.945 0 7.559.431 10.852 1.295c3.29.864 6.008 1.964 8.173 3.31v11.299c-2.216-1.347-4.753-2.406-7.65-3.208a33.572 33.572 0 0 0-8.92-1.182c-4.418 0-6.621.77-6.621 2.303c0 .72.342 1.254 1.026 1.614c.684.36 1.942.73 3.764 1.12l7.045 1.296c4.602.812 8.033 2.24 10.287 4.276c2.256 2.036 3.382 5.048 3.382 9.037c0 4.37-1.86 7.834-5.596 10.404c-3.734 2.57-9.029 3.855-15.893 3.855c-4.037-.01-7.96-.514-11.766-1.522c-3.805-1.007-7.238-2.467-10.287-4.39V59.24c2.305 1.82 5.395 3.32 9.27 4.503c3.875 1.172 7.62 1.758 11.243 1.758c1.69 0 2.97-.227 3.835-.679c.866-.452 1.3-.997 1.3-1.624c0-.72-.232-1.316-.706-1.8c-.473-.483-1.39-.884-2.747-1.223l-8.455-1.943c-4.842-1.151-8.275-2.745-10.317-4.79c-2.044-2.036-3.061-4.709-3.061-8.02c0-2.785.886-5.201 2.678-7.268c1.781-2.066 4.318-3.66 7.609-4.78c3.292-1.13 7.136-1.696 11.555-1.696M512 23.833v51.813h-17.263V66.22c-1.46 3.547-3.674 6.25-6.653 8.101c-2.98 1.84-6.664 2.766-11.032 2.766c-3.905 0-7.306-.967-10.217-2.91c-2.908-1.943-5.152-4.605-6.732-7.988c-1.57-3.382-2.367-7.206-2.367-11.483c-.05-4.41.786-8.368 2.507-11.874c1.712-3.506 4.136-6.24 7.257-8.204c3.12-1.963 6.684-2.95 10.68-2.95c8.082 0 13.548 3.524 16.408 10.564l.148.373V23.833zm-126.533 7.833c5.587 0 10.407.956 14.444 2.879c4.036 1.922 7.117 4.554 9.23 7.916c2.115 3.362 3.17 7.217 3.17 11.586c0 4.318-1.055 8.225-3.17 11.73c-2.113 3.506-5.204 6.26-9.27 8.276c-4.067 2.015-8.868 3.022-14.413 3.022c-5.547 0-10.348-.997-14.404-3.012c-4.067-2.015-7.166-4.77-9.301-8.276c-2.133-3.505-3.21-7.412-3.21-11.73c0-4.317 1.066-8.173 3.21-11.555c2.143-3.382 5.224-6.035 9.27-7.957c4.036-1.923 8.858-2.879 14.444-2.879m-132.36 11.802v32.404h-17.21V43.468c5.273 2.323 11.816 2.426 17.21 0m195.128-10.856c2.486 0 4.62.576 6.412 1.727v15.544c-1.791-1.203-4.107-1.799-6.975-1.799c-3.756 0-6.654 1.162-8.668 3.485c-2.022 2.324-3.03 5.942-3.03 10.836v13.241h-17.261V33.548h16.91v13.385c.936-4.894 2.457-8.502 4.55-10.836c2.084-2.323 4.78-3.485 8.062-3.485m-248.79-7.34c6.624 0 12.22 1.059 16.81 3.166c4.58 2.108 8.013 5.048 10.288 8.81c2.273 3.763 3.42 8.07 3.42 12.923c0 4.75-1.187 9.057-3.562 12.912c-2.376 3.866-5.99 6.92-10.85 9.17c-4.861 2.252-10.882 3.383-18.078 3.383h-25.506V25.272zM42.728 41.348c-6.432 0-11.505 5.912-11.505 13.098c0 7.186 5.184 13.087 11.505 13.087c6.432 0 11.515-5.901 11.505-13.087c.11-7.197-5.073-13.098-11.505-13.098m42.516 0c-6.432 0-11.505 5.912-11.505 13.098c0 7.186 5.184 13.087 11.505 13.087c6.432 0 11.505-5.901 11.505-13.087c.11-7.197-5.073-13.098-11.505-13.098m300.214 3.58c-3.01 0-5.366.853-7.087 2.56c-1.71 1.707-2.567 3.989-2.567 6.868c0 2.878.856 5.191 2.567 6.939c1.712 1.748 4.076 2.632 7.087 2.632c2.957-.01 5.294-.884 7.004-2.632c1.713-1.748 2.577-4.06 2.577-6.94c0-2.878-.856-5.17-2.577-6.867c-1.71-1.707-4.047-2.56-7.004-2.56m99.767.216c-2.909 0-5.233.853-6.975 2.56s-2.607 3.917-2.607 6.652c0 2.734.865 4.965 2.607 6.692c1.742 1.727 4.037 2.59 6.905 2.59c2.908-.01 5.243-.883 7.006-2.63c1.762-1.749 2.637-4.02 2.637-6.796c0-2.684-.856-4.873-2.567-6.55c-1.712-1.675-4.057-2.518-7.006-2.518m-287.038-7.063h-8.596v24.756h7.6c4.46 0 7.892-1.141 10.287-3.413c2.396-2.283 3.594-5.387 3.594-9.325c0-3.65-1.068-6.559-3.201-8.738c-2.134-2.18-5.365-3.28-9.684-3.28M244.51 22.24c4.752 0 8.606 3.534 8.606 7.895c0 4.36-3.854 7.896-8.606 7.896c-4.754 0-8.607-3.535-8.607-7.896c0-4.36 3.853-7.895 8.607-7.895"
              />
            </svg>
          </a>
        </div>
      </footer>
      {/*  */}
    </main>
  );
};

export default LandingPage;

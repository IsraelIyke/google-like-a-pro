import { Box, Grid, Paper } from "@mui/material";
import { useState, forwardRef } from "react";
import gifs from "../images/search.gif";
import gray from "../images/gray.gif";
import { MdLightMode, MdHistory } from "react-icons/md";
import { BsToggleOn, BsToggleOff, BsSearch } from "react-icons/bs";
import { TiTimes } from "react-icons/ti";
import { AiFillInfoCircle } from "react-icons/ai";
import Textfield from "./Textfield/textfield";
import "./Textfield/textfield.css";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Google() {
  const [intensity, setIntensity] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [search, setSearch] = useState("");
  const [site, setSite] = useState([]);
  const [word, setWord] = useState([]);
  const [omit, setOmit] = useState([]);
  const [file, setFile] = useState([]);
  const [year, setYear] = useState([]);
  const [title, setTitle] = useState();
  const [synonym, setSynonym] = useState([]);
  const [location, setLocation] = useState([]);
  const [range, setRange] = useState([]);
  const [omitSite, setOmitSite] = useState([]);
  const [before, setBefore] = useState([]);
  const [after, setAfter] = useState([]);
  const [related, setRelated] = useState();
  const [exact, setExact] = useState();
  const [history, setHistory] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const [info3, setInfo3] = useState(false);
  const [info4, setInfo4] = useState(false);
  const [info5, setInfo5] = useState(false);
  const [info6, setInfo6] = useState(false);
  const [info7, setInfo7] = useState(false);
  const [info8, setInfo8] = useState(false);
  const [info9, setInfo9] = useState(false);
  const [info10, setInfo10] = useState(false);
  const [info11, setInfo11] = useState(false);
  const [info12, setInfo12] = useState(false);
  const [info13, setInfo13] = useState(false);
  const [info14, setInfo14] = useState(false);
  const [intensityZeroPercent, setIntensityZeroPercent] = useState(false);
  const [intensityFiftyPercent, setIntensityFiftyPercent] = useState(false);
  const [intensityHundredPercent, setIntensityHundredPercent] = useState(true);
  const info = {
    one: "This specifier/operator is used when you want to search only a particular website. By doing this, No search result from other websites will appear except for the one you added.",
    two: "When you use this specifier/operator, google will only search for articles/posts that contains that phrase in the same order that you searched it.",
    three:
      "this is just like exact phrase except that it includes the word you entered and searches for posts that contains both your main search and the specific word. Search results that does not contain the specific word will not be shown.",
    four: "Unlike the specific word specifier/operator, this specifier makes sure that it omit that word from your search. This means that your search result will only show post that does not contain the omitted word",
    five: "The file type specifier/operator search for files with type or extension you specified. For instance, if you choose to search only doc or mp4 files your search result will contain only post with that file type or extension.",
    six: "You can narrow your search down to a particular year by using this operator/specifier. For instance, if you are looking for posts/articles that were published or in some cases references a particular year, this specifier shows you search result on that year.",
    seven:
      "This is similar to exact phrase specifier except that it search for webpages or articles that contains same title as your search.",
    eight:
      "Simple but nice to have. This specifier/operator searches articles that contains close words to the one you entered.",
    nine: "You can find website related to the one you are search. For instance, if you search google.com with this specifier/operator, it will show results like yahoo.com, bing.com, etc. But not all website will get related websites result from google.",
    ten: "Use this this specifier to search only articles/post from or about a particular continent, country, state, or even city. For instance you can search for 'foods' with the geo location example Nigeria and will get search result about food from only Nigeria.",
    eleven:
      "Use this specifier/operator when your search requires range. You can use it to find results between two years for example 2009 to 2018 or goods/products between two price range example 2$ to 5$. Remember to add two dots (ie ..) between the two numbers.",
    twelve:
      "Unlike the specific website specifier/operator, this specifier makes sure to remove the website you entered from your search result. For instance, if you want to search a movie but don't want search result from netflix, this specifier will exclude it",
    thirteen:
      "This searches for posts/articles that were posted before the year you entered. In some cases, finds pages that referenced years before the year you entered",
    fourteen:
      "This searches for posts/articles that were posted after the year you entered. In some cases, finds pages that referenced years after the year you entered",
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handle = () => {
    setError(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setError(false);
  };

  function handleIntensity() {
    setIntensity((prev) => !prev);
  }
  function handleCloseWindow() {
    setHistory(false);
  }
  function handleCloseInfo() {
    setInfo1(false);
    setInfo2(false);
    setInfo3(false);
    setInfo4(false);
    setInfo5(false);
    setInfo6(false);
    setInfo7(false);
    setInfo8(false);
    setInfo9(false);
    setInfo10(false);
    setInfo11(false);
    setInfo12(false);
    setInfo13(false);
    setInfo14(false);
  }
  function handleInfo1() {
    setInfo1((prev) => !prev);
  }
  function handleInfo2() {
    setInfo2((prev) => !prev);
  }
  function handleInfo3() {
    setInfo3((prev) => !prev);
  }
  function handleInfo4() {
    setInfo4((prev) => !prev);
  }
  function handleInfo5() {
    setInfo5((prev) => !prev);
  }
  function handleInfo6() {
    setInfo6((prev) => !prev);
  }
  function handleInfo7() {
    setInfo7((prev) => !prev);
  }
  function handleInfo8() {
    setInfo8((prev) => !prev);
  }
  function handleInfo9() {
    setInfo9((prev) => !prev);
  }
  function handleInfo10() {
    setInfo10((prev) => !prev);
  }
  function handleInfo11() {
    setInfo11((prev) => !prev);
  }
  function handleInfo12() {
    setInfo12((prev) => !prev);
  }
  function handleInfo13() {
    setInfo13((prev) => !prev);
  }
  function handleInfo14() {
    setInfo14((prev) => !prev);
  }

  function handleEyeCare() {
    setGrayscale((prev) => !prev);
    if (!grayscale) {
      setIntensityHundredPercent(true);
    }
    setIntensityFiftyPercent(false);
    setIntensityZeroPercent(false);
  }

  function handle0() {
    setIntensityZeroPercent(true);
    setIntensityFiftyPercent(false);
    setIntensityHundredPercent(false);
    setGrayscale(false);
  }
  function handle50() {
    setIntensityZeroPercent(false);
    setIntensityFiftyPercent(true);
    setIntensityHundredPercent(false);
    setGrayscale(false);
  }
  function handle100() {
    setIntensityZeroPercent(false);
    setIntensityFiftyPercent(false);
    setIntensityHundredPercent(true);
    setGrayscale(false);
  }
  function handleSubmit() {
    localStorage.setItem("search", search);
    setSearch((prev) => {
      //condition1: all of the search specifiers are false
      if (
        !site &&
        !exact &&
        !word &&
        !omit &&
        !file &&
        !year &&
        !title &&
        !synonym &&
        !related &&
        !location &&
        !range &&
        !omitSite &&
        !before &&
        !after
      ) {
        return prev;
      }
      //condition2: all of the search specifiers are true
      else if (
        site ||
        exact ||
        word ||
        omit ||
        file ||
        year ||
        title ||
        synonym ||
        related ||
        location ||
        range ||
        omitSite ||
        before ||
        after
      ) {
        return `${site.length > 0 ? `site:${site}` : ""}${exact ? " " : ""}${
          exact ? `"${prev}"` : related ? `related:${prev}` : ` ${prev}`
        }${file.length > 0 ? " " : ""}${
          file.length > 0 ? `filetype:${file}` : ""
        }${year.length > 0 ? " " : ""}${
          year.length > 0 ? `inurl:${year}` : ""
        }${synonym.length > 0 ? " " : ""}${
          synonym.length > 0 ? `~${synonym}` : ""
        }${word.length > 0 ? " " : ""}${word.length > 0 ? `"${word}"` : ""}${
          omit.length > 0 ? " " : ""
        }${omit.length > 0 ? `-${omit}` : ""}${range.length > 0 ? " " : ""}${
          range.length > 0 ? `${range}` : ""
        }${location.length > 0 ? " " : ""}${
          location.length > 0 ? `location:${location}` : ""
        }${omitSite.length > 0 ? " " : ""}${
          omitSite.length > 0 ? `-site:${omitSite}` : ""
        }${before.length > 0 ? " " : ""}${
          before.length > 0 ? `BEFORE:${before}` : ""
        }${after.length > 0 ? " " : ""}${
          after.length > 0 ? `AFTER:${after}` : ""
        }${title ? " " : ""}${title ? `allintitle:"${prev}"` : ""}`;
      }
    });
  }
  function handleHistory() {
    setHistory((prev) => !prev);
  }
  function handleHistoryClear() {
    setHistory(false);
    const checkStorage = localStorage.getItem("search");
    if (checkStorage) {
      localStorage.removeItem("search");
      handleClick();
    } else {
      handle();
    }
  }
  function handleClear() {
    setSearch(localStorage.getItem("search"));
  }
  return (
    <div
      className={
        (grayscale && "container-grayscale") ||
        (intensityZeroPercent && "container-dark") ||
        (intensityFiftyPercent && "container-dark50") ||
        (intensityHundredPercent && "container-dark100")
      }
    >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Success! previous search cleared
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          You don't have any stored search
        </Alert>
      </Snackbar>
      <Box flexGrow={1}>
        <Grid container spacing={1} justifyContent="center">
          <div className="container">
            <div className="blur"></div>
            {intensity && (
              <div className="close-window" onClick={handleIntensity}></div>
            )}

            {history && (
              <div className="close-window2" onClick={handleCloseWindow}></div>
            )}
            {(info1 ||
              info2 ||
              info3 ||
              info4 ||
              info5 ||
              info6 ||
              info7 ||
              info8 ||
              info9 ||
              info10 ||
              info11 ||
              info12 ||
              info13 ||
              info14) && (
              <div
                className="close-window-info"
                onClick={handleCloseInfo}
              ></div>
            )}
            {(info1 ||
              info2 ||
              info3 ||
              info4 ||
              info5 ||
              info6 ||
              info7 ||
              info8 ||
              info9 ||
              info10 ||
              info11 ||
              info12 ||
              info13 ||
              info14) && (
              <div className="window-info">
                <TiTimes
                  onClick={handleCloseInfo}
                  style={{ fontSize: "1.5rem", marginLeft: "15rem" }}
                />
                {info1 && (
                  <>
                    <strong>Specific website: </strong>
                    <br />
                    {info.one}
                  </>
                )}
                {info2 && (
                  <>
                    <strong>Exact phrase: </strong>
                    <br />
                    {info.two}
                  </>
                )}
                {info3 && (
                  <>
                    <strong>Specific word: </strong>
                    <br />
                    {info.three}
                  </>
                )}
                {info4 && (
                  <>
                    <strong>Omit specific word: </strong>
                    <br />
                    {info.four}
                  </>
                )}
                {info5 && (
                  <>
                    <strong>File type: </strong>
                    <br />
                    {info.five}
                  </>
                )}
                {info6 && (
                  <>
                    <strong>Ref year: </strong>
                    <br />
                    {info.six}
                  </>
                )}
                {info7 && (
                  <>
                    <strong>Exact article title: </strong>
                    <br />
                    {info.seven}
                  </>
                )}
                {info8 && (
                  <>
                    <strong>Include synonym: </strong>
                    <br />
                    {info.eight}
                  </>
                )}
                {info9 && (
                  <>
                    <strong>Related website</strong>
                    <br />
                    {info.nine}
                  </>
                )}
                {info10 && (
                  <>
                    <strong>Geo location: </strong>
                    <br />
                    {info.ten}
                  </>
                )}
                {info11 && (
                  <>
                    <strong>Range: </strong>
                    <br />
                    {info.eleven}
                  </>
                )}
                {info12 && (
                  <>
                    <strong>Exclude a website: </strong>
                    <br />
                    {info.twelve}
                  </>
                )}
                {info13 && (
                  <>
                    <strong>Before a ref yr: </strong>
                    <br />
                    {info.thirteen}
                  </>
                )}
                {info14 && (
                  <>
                    <strong>After a ref yr: </strong>
                    <br />
                    {info.fourteen}
                  </>
                )}
              </div>
            )}
            <Grid item>
              <nav className="sup-container">
                <ul>
                  <Link to="/google-like-a-pro/guide">
                    <li
                      className={
                        (grayscale && "guide-gray") ||
                        (intensityZeroPercent && "guide") ||
                        (intensityFiftyPercent && "guide50") ||
                        (intensityHundredPercent && "guide100")
                      }
                    >
                      Guide
                    </li>
                  </Link>
                  <li>
                    {intensity && (
                      <div
                        className={
                          (grayscale && "intensity-option-gray") ||
                          (intensityZeroPercent && "intensity-option") ||
                          (intensityFiftyPercent && "intensity-option") ||
                          (intensityHundredPercent && "intensity-option100")
                        }
                      >
                        <li className="percent">
                          <p
                            className={intensityZeroPercent && "active"}
                            onClick={handle0}
                          >
                            dark
                          </p>
                          <p
                            className={intensityFiftyPercent && "active"}
                            onClick={handle50}
                          >
                            gray
                          </p>
                          <p
                            className={intensityHundredPercent && "active"}
                            onClick={handle100}
                          >
                            light
                          </p>
                        </li>

                        <li className="percentage" onClick={handleEyeCare}>
                          <li>grayscale</li>
                          {grayscale ? (
                            <li>
                              <BsToggleOn className="eye-icon" />
                            </li>
                          ) : (
                            <li>
                              <BsToggleOff className="eye-icon" />
                            </li>
                          )}
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <MdLightMode
                      className={
                        (grayscale && "dark-icon-gray") ||
                        (intensityZeroPercent && "dark-icon") ||
                        (intensityFiftyPercent && "dark-icon50") ||
                        (intensityHundredPercent && "dark-icon100")
                      }
                      onClick={handleIntensity}
                    />
                  </li>
                </ul>
              </nav>
            </Grid>
            <Grid item>
              <div className="title">
                <h2
                  className={grayscale ? "motion-gray" : "motion"}
                  data-text="Google"
                >
                  Google
                  <span
                    style={{
                      color: "transparent",
                      backgroundColor: "transparent",
                    }}
                  >
                    .
                  </span>
                </h2>
                <h2
                  className={grayscale ? "motion-gray" : "motion"}
                  data-text="Like"
                >
                  Like
                  <span
                    style={{
                      color: "transparent",
                      backgroundColor: "transparent",
                    }}
                  >
                    .
                  </span>
                </h2>
                <h2
                  className={grayscale ? "motion-gray" : "motion"}
                  data-text="A"
                >
                  A
                  <span
                    style={{
                      color: "transparent",
                      backgroundColor: "transparent",
                    }}
                  >
                    .
                  </span>
                </h2>
                <h2
                  className={grayscale ? "motion-gray" : "motion"}
                  data-text="Pro"
                >
                  Pro
                  <span
                    style={{
                      color: "transparent",
                      backgroundColor: "transparent",
                    }}
                  >
                    .
                  </span>
                </h2>
              </div>
            </Grid>
            <Grid item>
              <h3
                style={
                  intensityZeroPercent
                    ? { zIndex: 2, position: "relative", color: "purple" }
                    : { zIndex: 2, position: "relative" }
                }
              >
                Narrow down your google searches
              </h3>
            </Grid>
            <form
              action="https://google.com/search"
              onSubmit={handleSubmit}
              target="_blank"
            >
              <Grid item>
                <div
                  className={grayscale ? "sub-container-gray" : "sub-container"}
                >
                  <MdHistory
                    className={grayscale ? "history-gray" : "history"}
                    onClick={handleHistory}
                  />
                  {history && (
                    <Paper className="prev" elevation={5}>
                      clear previous search
                      <div onClick={handleHistoryClear}>yes</div>
                    </Paper>
                  )}
                  <input
                    type="text"
                    name="q"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={handleClear}
                    className="input"
                    autoComplete="off"
                  />

                  <button className="search">
                    <BsSearch className="search" />
                  </button>
                </div>
              </Grid>
              <Grid item>
                <div
                  className={
                    (grayscale && "param-gray") ||
                    (intensityZeroPercent && "param") ||
                    (intensityFiftyPercent && "param") ||
                    (intensityHundredPercent && "param100")
                  }
                >
                  Search specifiers
                </div>
              </Grid>
              <Grid item>
                <p
                  className={
                    (grayscale && "para-gray") ||
                    (intensityZeroPercent && "para") ||
                    (intensityFiftyPercent && "para") ||
                    (intensityHundredPercent && "para100")
                  }
                >
                  Use only relevant specifiers. <br />
                  Click the <AiFillInfoCircle /> icon to learn more about a
                  specifier.
                </p>
              </Grid>
              <div className="par">
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo1}
                  />
                  <Textfield
                    type="text"
                    placeholder="specific website"
                    id="site"
                    label="specific website"
                    setState={setSite}
                    value={site}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>

                <Grid item className={grayscale ? "checks-gray" : "checks"}>
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo2}
                  />
                  <label htmlFor="exact">exact phrase</label>
                  <input
                    type="checkbox"
                    checked={exact}
                    onChange={(e) => setExact(e.target.checked)}
                    className="inpu"
                    id="exact"
                  />
                </Grid>
              </div>

              {/* 3,4 */}
              <div className="par">
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo3}
                  />
                  <Textfield
                    type="text"
                    placeholder="specific word"
                    id="word"
                    label="specific word"
                    setState={setWord}
                    value={word}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo4}
                  />
                  <Textfield
                    type="text"
                    placeholder="omit specific word"
                    id="omit"
                    label="omit specific word"
                    setState={setOmit}
                    value={omit}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
              </div>

              {/* 5,6 */}
              <div className="par">
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo5}
                  />
                  <Textfield
                    type="text"
                    placeholder="file type eg pdf"
                    id="file"
                    label="file type eg pdf"
                    setState={setFile}
                    value={file}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo6}
                  />
                  <Textfield
                    type="text"
                    placeholder="ref year eg 2009"
                    id="year"
                    label="ref year eg 2009"
                    setState={setYear}
                    value={year}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
              </div>

              {/* 7,8 */}
              <div className="par">
                <Grid item className={grayscale ? "checks-gray" : "checks"}>
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo7}
                  />
                  <label htmlFor="title">exact article title</label>
                  <input
                    type="checkbox"
                    checked={title}
                    onChange={(e) => setTitle(e.target.checked)}
                    className="inpu"
                    id="title"
                  />
                </Grid>
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo8}
                  />
                  <Textfield
                    type="text"
                    placeholder="include synonym"
                    id="synonym"
                    label="include synonym"
                    setState={setSynonym}
                    value={synonym}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
              </div>

              {/* 9,10 */}
              <div className="par">
                <Grid item className={grayscale ? "checks-gray" : "checks"}>
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo9}
                  />
                  <label htmlFor="related">related website</label>
                  <input
                    type="checkbox"
                    checked={related}
                    onChange={(e) => setRelated(e.target.checked)}
                    className="inpu"
                    id="related"
                  />
                </Grid>
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo10}
                  />
                  <Textfield
                    type="text"
                    placeholder="geo location"
                    id="location"
                    label="geo location"
                    setState={setLocation}
                    value={location}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
              </div>
              {/* 11,12 */}
              <div className="par">
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo11}
                  />
                  <Textfield
                    type="text"
                    placeholder="range eg 2yrs..9yrs"
                    id="range"
                    label="range eg 2yrs..9yrs"
                    setState={setRange}
                    value={range}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo12}
                  />
                  <Textfield
                    type="text"
                    placeholder="exclude specific website"
                    id="omitSite"
                    label="exclude a website"
                    setState={setOmitSite}
                    value={omitSite}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
              </div>

              {/* 13,14 */}
              <div className="par">
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo13}
                  />
                  <Textfield
                    type="text"
                    placeholder="before a ref yr"
                    id="before"
                    label="before a ref yr"
                    setState={setBefore}
                    value={before}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
                <Grid item className="info">
                  <AiFillInfoCircle
                    className="info-icon"
                    onClick={handleInfo14}
                  />
                  <Textfield
                    type="text"
                    placeholder="after a ref yr"
                    id="after"
                    label="after a ref yr"
                    setState={setAfter}
                    value={after}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
              </div>
            </form>
            <Grid item>
              <div
                className={
                  (grayscale && "footer-gray") ||
                  (intensityZeroPercent && "footer") ||
                  (intensityFiftyPercent && "footer") ||
                  (intensityHundredPercent && "footer100")
                }
              >
                <a href="mailto:nwangwujeremy@gmail.com">contact</a>
                <div>all rights reserved to google :)</div>
              </div>
            </Grid>
            <Grid>
              {grayscale ? (
                <img
                  src={gray}
                  alt="bg"
                  className="img"
                  width={500}
                  height={500}
                />
              ) : (
                <img
                  src={gifs}
                  alt="bg"
                  className="img"
                  width={500}
                  height={500}
                />
              )}
            </Grid>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

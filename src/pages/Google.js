import { Box, Grid, Paper } from "@mui/material";
import { useState, forwardRef } from "react";
import gifs from "../images/search.gif";
import gray from "../images/gray.gif";
import { MdLightMode, MdHistory } from "react-icons/md";
import { BsToggleOn, BsToggleOff, BsSearch } from "react-icons/bs";
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
  const [intensityZeroPercent, setIntensityZeroPercent] = useState(true);
  const [intensityFiftyPercent, setIntensityFiftyPercent] = useState(false);
  const [intensityHundredPercent, setIntensityHundredPercent] = useState(false);

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

  function handleEyeCare() {
    setGrayscale((prev) => !prev);
    if (!grayscale) {
      setIntensityZeroPercent(true);
    }
    setIntensityFiftyPercent(false);
    setIntensityHundredPercent(false);
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
          exact ? `"${prev}"` : ` ${prev}`
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
        }${title ? " " : ""}${title ? `allintitle:"${prev}"` : ""}${
          related ? " " : ""
        }${related ? `related:${prev}` : ""}`;
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
        (intensityZeroPercent && "container-dark") ||
        (intensityFiftyPercent && "container-dark50") ||
        (intensityHundredPercent && "container-dark100") ||
        (grayscale && "container-grayscale")
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
                            0%
                          </p>
                          <p
                            className={intensityFiftyPercent && "active"}
                            onClick={handle50}
                          >
                            50%
                          </p>
                          <p
                            className={intensityHundredPercent && "active"}
                            onClick={handle100}
                          >
                            100%
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
                  use only relevant specifiers
                </p>
              </Grid>
              <div className="par">
                <Grid item>
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
                <Grid item>
                  <Textfield
                    type="text"
                    placeholder="include specific word"
                    id="word"
                    label="include specific word"
                    setState={setWord}
                    value={word}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
                <Grid item>
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
                <Grid item>
                  <Textfield
                    type="text"
                    placeholder="exact filetype eg pdf"
                    id="file"
                    label="exact filetype eg pdf"
                    setState={setFile}
                    value={file}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
                <Grid item>
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
                  <label htmlFor="exact">exact article title</label>
                  <input
                    type="checkbox"
                    checked={title}
                    onChange={(e) => setTitle(e.target.checked)}
                    className="inpu"
                    id="title"
                  />
                </Grid>
                <Grid item>
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
                  <label htmlFor="exact">find related website</label>
                  <input
                    type="checkbox"
                    checked={related}
                    onChange={(e) => setRelated(e.target.checked)}
                    className="inpu"
                    id="related"
                  />
                </Grid>
                <Grid item>
                  <Textfield
                    type="text"
                    placeholder="specific geo location"
                    id="location"
                    label="specific geo location"
                    setState={setLocation}
                    value={location}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
              </div>
              {/* 11,12 */}
              <div className="par">
                <Grid item>
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
                <Grid item>
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
                <Grid item>
                  <Textfield
                    type="text"
                    placeholder="doc pre a yr eg 2009"
                    id="before"
                    label="doc pre a yr eg 2009"
                    setState={setBefore}
                    value={before}
                    autoComplete="off"
                    grayscale={grayscale}
                  />
                </Grid>
                <Grid item>
                  <Textfield
                    type="text"
                    placeholder="doc post a yr eg 2011"
                    id="after"
                    label="doc post a yr eg 2011"
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

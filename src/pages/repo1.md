import { Box, Grid } from "@mui/material";
import { useState } from "react";
import gifs from "../images/search.gif";
import gray from "../images/gray.gif";
import { BsSearch } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import Textfield from "./Textfield/textfield";
import "./Textfield/textfield.css";
import { Link } from "react-router-dom";

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

// console.log(search.match(/\s/g).length);
// let count = 0;
// for (let i = 0; i < search.length; i++) {
// if (search[i] === " " && search[i + 1] === " ") {
// let alpha = search.replace(/\s\s/g, " ");
// console.log(alpha);
// return alpha;
// }
// count++;
// if(count === 2) );
// if(count === 2) console.log(search.replace(/\s\s/g, " "));
// if(count === 2) console.log(search.replace(/\s\s/g, " "));
// if(count === 2) console.log(search.replace(/\s\s/g, " "));
// if(count === 2) console.log(search.replace(/\s\s/g, " "));

// console.log(count);
// }
// for (let i = 0; i < search.length; i++) {
// if (alpha[i] === " " && alpha[i + 1] === " " && alpha[i + 2] === " ") {
// let beta = alpha.replace(/\s\s/g, " ");
// console.log(beta);
// return beta;
// }
// }

function handleIntensity() {
setIntensity((prev) => !prev);
}
function handleEyeCare() {
setGrayscale((prev) => !prev);
}
function handleSubmit() {
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
//conditionN: all of the search specifiers are true
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
          exact ? `"${prev}"`: prev }${file ? " " : ""}${file.length > 0 ?`filetype:${file}` : ""}${
year ? " " : ""
}${year.length > 0 ? `inurl:${year}`: ""}${synonym ? " " : ""}${ synonym.length > 0 ?`~${synonym}` : ""
        }${word ? " " : ""}${word.length > 0 ? `"${word}"`: ""}${ omit ? " " : "" }${omit.length > 0 ?`-${omit}` : ""}${range ? " " : ""}${
          range.length > 0 ? `${range}`: "" }${location ? " " : ""}${ location.length > 0 ?`location:${location}` : ""
        }${omitSite ? " " : ""}${
          omitSite.length > 0 ? `-site:${omitSite}`: "" }${before ? " " : ""}${before.length > 0 ?`BEFORE:${before}` : ""}${
after ? " " : ""
}${after.length > 0 ? `AFTER:${after}`: ""}${title ? " " : ""}${ title ?`allintitle:"${prev}"` : ""
        }${related ? " " : ""}${related ? `related:${prev}` : ""}`;
}
});
}

function handleClear() {
setSearch("");
}
return (
<div
className={
(grayscale === false && "container-dark") ||
(grayscale && "container-grayscale")
} >
<Box flexGrow={1}>
<Grid container spacing={1} justifyContent="center">
<div className="container">
<div className="blur"></div>
{intensity && (
<div className="close-window" onClick={handleIntensity}></div>
)}
<Grid item>
<nav className="sup-container">
<ul>
<Link to="/google-like-a-pro/guide">
<li className="guide">Guide</li>
</Link>
<li>
{intensity && (
<div className="intensity-option">
<li className="percent">
<li>0%</li>
<li>50%</li>
<li>100%</li>
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
                      className="dark-icon"
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
                <div className="param">Search specifiers</div>
              </Grid>
              <Grid item>
                <p className="para">use only relevant specifiers</p>
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
                    id="exact"
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
              <div className="footer">all rights reserved :)</div>
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

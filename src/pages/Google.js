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
  const [search, setSearch] = useState();
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
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return prev;
      }
      //condition2: all of the search specifiers are false except for "search by site"
      else if (
        site.length > 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `site:${site} ${prev}`;
      }
      //condition3: all of the search specifiers are false except for "search exact phrase"
      else if (
        site.length === 0 &&
        exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `"${prev}"`;
      }
      //condition4: all of the search specifiers are false except for "include exact word"
      else if (
        site.length === 0 &&
        !exact &&
        word.length > 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `${prev} "${word}"`;
      }
      //condition5: all of the search specifiers are false except for "omit a word"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length > 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `${prev} -${omit}`;
      }
      //condition6: all of the search specifiers are false except for "filetype"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length > 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `filetype:${file} ${prev}`;
      }
      //condition7: all of the search specifiers are false except for "year"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length > 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `inurl:${year} ${prev}`;
      }
      //condition8: all of the search specifiers are false except for "title"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `allintitle:"${prev}"`;
      }
      //condition9: all of the search specifiers are false except for "synonym"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length > 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `${prev} ~${synonym}`;
      }
      //condition10: all of the search specifiers are false except for "related sites"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `related:${prev}`;
      }
      //condition11: all of the search specifiers are false except for "location"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length > 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `location:${location} ${prev}`;
      }
      //condition12: all of the search specifiers are false except for "range"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length > 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `${prev} ${range}`;
      }
      //condition13: all of the search specifiers are false except for "range"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length > 0 &&
        before.length === 0 &&
        after.length === 0
      ) {
        return `-site:${omitSite} ${prev}`;
      }
      //condition13: all of the search specifiers are false except for "range"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length > 0 &&
        after.length === 0
      ) {
        return `BEFORE:${before} ${prev}`;
      }
      //condition13: all of the search specifiers are false except for "range"
      else if (
        site.length === 0 &&
        !exact &&
        word.length === 0 &&
        omit.length === 0 &&
        file.length === 0 &&
        year.length === 0 &&
        !title &&
        synonym.length === 0 &&
        !related &&
        location.length === 0 &&
        range.length === 0 &&
        omitSite.length === 0 &&
        before.length === 0 &&
        after.length > 0
      ) {
        return `AFTER:${after} ${prev}`;
      }
      //conditionN: all of the search specifiers are true
      else if (
        site.length > 0 &&
        exact &&
        word.length > 0 &&
        omit.length > 0 &&
        file.length > 0 &&
        year.length > 0 &&
        title &&
        synonym.length > 0 &&
        related &&
        location.length > 0 &&
        range.length > 0 &&
        omitSite.length > 0 &&
        before.length > 0 &&
        after.length > 0
      ) {
        return `site:${site} filetype:${file} inurl:${year} allintitle:"${prev}" ~${synonym} "${word}" -${omit} ${range} location:${location} -site:${omitSite} related:${prev}`;
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
      }
    >
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
                    id="omit"
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

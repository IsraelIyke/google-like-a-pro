import { Box, Grid } from "@mui/material";
import { useState } from "react";
import gifs from "../images/search.gif";
import gray from "../images/gray.gif";
import { BsSearch } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import Textfield from "./Textfield/textfield";
import "./Textfield/textfield.css";

export default function Google() {
  const [search, setSearch] = useState();
  const [site, setSite] = useState([]);
  const [exact, setExact] = useState();
  const [intensity, setIntensity] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  function handleIntensity() {
    setIntensity((prev) => !prev);
  }
  function handleEyeCare() {
    setGrayscale((prev) => !prev);
  }
  function handleSubmit() {
    setSearch((prev) => {
      if (site.length === 0 && !exact) {
        return prev;
      } else if (site.length > 0 && !exact) {
        return `site:${site} ${prev}`;
      } else if (site.length === 0 && exact) {
        return `"${prev}"`;
      } else if (site.length > 0 && exact) {
        return `site:${site} "${prev}"`;
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
                <div className="sub-container">
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
                    placeholder="exact site"
                    id="site"
                    label="exact site"
                    setState={setSite}
                    value={site}
                    autoComplete="off"
                  />
                </Grid>

                <Grid item className="checks">
                  <div>exact phrase</div>
                  <input
                    type="checkbox"
                    checked={exact}
                    onChange={(e) => setExact(e.target.checked)}
                    className="inpu"
                  />
                </Grid>
              </div>
            </form>

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

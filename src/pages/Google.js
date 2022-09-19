import { Box, Grid } from "@mui/material";
import { useState } from "react";
import gifs from "../images/search.gif";
import { BsSearch } from "react-icons/bs";

export default function Google() {
  const [search, setSearch] = useState();
  const [site, setSite] = useState(null);
  const [exact, setExact] = useState();
  const [checkSite, setCheckSite] = useState();

  if (site !== null) {
    setCheckSite(true);
  }

  function handleSubmit() {
    setSearch((prev) => {
      if (checkSite) {
        return `site:${site} prev`;
      }
    });
  }
  // `${site !== null && `site:${site}`} ${exact ? `"${prev}"` : prev}`
  // return `${checkSite && `site:${site}`} ${exact ? `"${prev}"` : prev}`
  function handleClear() {
    setSearch("");
  }
  return (
    <Box flexGrow={1}>
      <Grid container spacing={1} justifyContent="center">
        <div className="container">
          <div className="blur"></div>
          <Grid item>
            <div className="title">
              <h2 dataText="Google">
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
              <h2 dataText="Like">
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
              <h2 dataText="A">
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
              <h2 dataText="Pro">
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
              <input
                type="text"
                value={site}
                onChange={(e) => setSite(e.target.value)}
                className="inpu"
                autoComplete="on"
              />
            </Grid>
            <Grid item>
              <input
                type="checkbox"
                checked={exact}
                onChange={(e) => setExact(e.target.checked)}
                className="inpu"
              />
            </Grid>
          </form>
          <Grid item>
            <div>Search parameters</div>
          </Grid>

          <Grid>
            <img src={gifs} alt="bg" className="img" width={500} height={500} />
          </Grid>
        </div>
      </Grid>
    </Box>
  );
}

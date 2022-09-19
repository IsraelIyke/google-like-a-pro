import { Box, Grid } from "@mui/material";
import { useState } from "react";
import gifs from "../images/search.gif";

export default function Google() {
const [search, setSearch] = useState();

function handleSubmit() {
setSearch((prev) => `site:nkiri.com ${prev}`);
}
function handleClear() {
setSearch("");
}
return (
<Box flexGrow={1}>
<Grid container spacing={1} justifyContent="center">
<div className="container">
<div className="blur"></div>
<Grid item>
<div className="title">Google Like A Pro</div>
</Grid>
<form
            action="https://google.com/search"
            onSubmit={handleSubmit}
            target="_blank"
          >
<Grid item>
<div>
<input
type="text"
name="q"
value={search}
onChange={(e) => setSearch(e.target.value)}
onFocus={handleClear}
className="input"
/>
</div>
</Grid>
<Grid item>
<div>
<input type="submit" className="input" />
</div>
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

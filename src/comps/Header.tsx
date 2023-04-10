import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  title: string;
  subtitle: string;
}


const Header = ({ title, subtitle }: Props) => {
  return ( 
    <>
      <Grid container rowSpacing={0.5} mb={3}>
        <Grid xs={12}>
          <Typography
            variant="h5"
          >
            {title}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography
            variant="subtitle2"
            color="gray"
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
 
export default Header;
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";

const FilterByService = (props: any) => {
  const { onChange, filters } = props;

  const useStyles = makeStyles<{ color: "red" | "blue" }>()(
    (theme, { color }) => ({
      root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
      },
      range: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row nowrap",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        "&>span": {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
        },
      },
    })
  );
  const [color, setColor] = useState<"red" | "blue">("red");
  const { classes, cx } = useStyles({ color });
  const handleChange = (e: any) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
    console.log(checked);
  };

  console.log(111, filters);

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Dịch Vụ</Typography>
      <ul>
        {[
          { value: "isFreeShip", label: "Giao Hang Mien Phi" },
          { value: "isPromotion", label: "Co Khuyen Mai" },
        ].map((service) => (
          <li key={service?.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters ? filters[service.value] : false)}
                  onChange={handleChange}
                  name={service?.value}
                  color="primary"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FilterByService;

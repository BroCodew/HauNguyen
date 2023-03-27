import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";

const FilterByPrice = (props: any) => {
  const { onChange } = props;
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

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
    const { name, value } = e.target;

    setValues((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Gia</Typography>
      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        />
        <span>-</span>
        <TextField
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        />
      </Box>
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Ap dung
      </Button>
    </Box>
  );
};

export default FilterByPrice;

import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import { isVisible } from "@testing-library/user-event/dist/utils";
import { useMemo, useState } from "react";
import { makeStyles } from "tss-react/mui";

const FilterByViewers = (props: any) => {
  const { filter = {}, onChange } = props;

  const useStyles = makeStyles<{ color: "red" | "blue" }>()(
    (theme, { color }) => ({
      root: {
        display: "flex",
        flexFlow: "row wrap",
        padding: "0",
        alignItems: "center",
        margin: theme.spacing(2, 0),
        listStyleType: "none",
        "&>li": {
          margin: "0",
          padding: theme.spacing(1),
        },
      },
    })
  );
  const FILTER_LIST = [
    {
      id: 1,
      getLabel: (filter: string) => "Van Chuyen Mien Phi",
      isActive: (filter: any) => filter.isFreeShip,
      isVisible: () => true,
      isRemovable: false,
      onRemove: () => {},
      onToggle: (filter: any) => {
        const newFilter = { ...filter };
        if (newFilter.isFreeShip) {
          delete newFilter.isFreeShip;
        } else {
          newFilter.isFreeShip = true;
        }
        return newFilter;
      },
    },
    {
      id: 2,
      getLabel: (filter: string) => "Khuyen mai",
      isActive: (filter: any) => true,
      isVisible: (filter: any) => true,
      isRemovable: (filter: any) => true,
      onRemove: (filter: any) => {},
      onToggle: 1,
    },
    {
      id: 3,
      getLabel: (filter: string) => "Khoang Gia",
      isActive: (filter: any) => true,
      isVisible: (filter: any) => true,
      isRemovable: (filter: any) => true,
      onRemove: (filter: any) => {},
      onToggle: 1,
    },
    {
      id: 4,
      getLabel: (filter: string) => "Danh Muc",
      isActive: (filter: any) => true,
      isVisible: (filter: any) => true,
      isRemovable: (filter: any) => true,
      onRemove: (filter: any) => {},
      onToggle: 1,
    },
  ];

  const [color, setColor] = useState<"red" | "blue">("red");
  const { classes, cx } = useStyles({ color });
  const handleClick = (item: any) => {
    if (item.isRemovable) {
      return null;
    } else {
      if (!onChange) return;
    //   const newFilter = { ...filter };
    //   item.onToggle(newFilter);
    //   onChange(newFilter);
    // }
    const newFilter = item.onToggle(filter)
    onChange(newFilter);
  };}
  const handleDelte = (item: any) => {
    if (item.onRemove) {
      if (!onChange) return;
      // const newFilter = { ...filter };
      // item.onToggle(newFilter);
      // onChange(newFilter);
      const newFilter = item.onRemove(filter)
      onChange(newFilter);
    }
    else{
      return null;
    }
  };

  return (
    <Box component="ul" className={classes.root}>
      {FILTER_LIST.filter((item) => item.isVisible(filter)).map((item) => (
        <li key={item.id}>
          <Chip
            label={item?.getLabel(filter)}
            color={item.isActive(filter) ? "primary" : "default"}
            clickable={!item.isRemovable}
            onClick={() => handleClick(item)}
            onDelete={() => {
              handleDelte(item);
            }}
          />
        </li>
      ))}
    </Box>
  );
};

export default FilterByViewers;

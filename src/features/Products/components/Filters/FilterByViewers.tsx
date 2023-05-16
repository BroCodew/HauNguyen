import { Chip } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
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
      getLabel: () => "Giao Hang Mien Phi",
      isActive: (filter: any) => filter.isFreeShip,
      isVisible: () => true,
      isRemovable: false,
      onRemove: () => {},
      onToggle: (filter: any) => {
        const newFilter = { ...filter };
        if (newFilter?.isFreeShip) {
          delete newFilter.isFreeShip;
        } else {
          newFilter.isFreeShip = true;
        }
        return newFilter;
      },
    },
    {
      id: 2,
      getLabel: () => "Khuyen mai",
      isActive: () => true,
      isVisible: (filter: any) => filter.isPromotion,
      isRemovable: true,
      onRemove: (filter: any) => {
        const newFilter = { ...filter };
        delete newFilter.isPromotion;
        return newFilter;
      },
      onToggle: () => {},
    },
    {
      id: 3,
      getLabel: (filter: any) =>
        `Từ ${filter.salePrice_gte} đến ${filter.salePrice_lte}`,
      isActive: () => true,
      isVisible: (filter: any) =>
        Object.keys(filter).includes("salePrice_lte") &&
        Object.keys(filter).includes("salePrice_gte"),
      onRemove: (filter: any) => {
        const newFilter = { ...filter };
        delete newFilter.salePrice_lte;
        delete newFilter.salePrice_gte;
        return newFilter;
      },
      onToggle: () => {},
      isRemovable: true,
    },
    {
      id: 4,
      getLabel: (filter: string) => "Danh Muc",
      isActive: (filter: any) => true,
      isVisible: (filter: any) => true,
      isRemovable: (filter: any) => true,
      onRemove: (filter: any) => {},
      onToggle: () => {},
    },
  ];
  console.log("dfgdfggffilter", filter);

  const [color, setColor] = useState<"red" | "blue">("red");
  const { classes, cx } = useStyles({ color });
  const handleClick = (item: any) => {
    if (item.isRemovable) {
      return null;
    } else {
      if (!onChange) return;
      const newFilter = item.onToggle(filter);
      onChange(newFilter);
    }
  };
  const handleDelete = (item: any) => {
    if (item.isRemovable) {
      if (!onChange) return;
      const newFilter = item.onRemove(filter);
      onChange(newFilter);
    } else {
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
              handleDelete(item);
            }}
          />
        </li>
      ))}
    </Box>
  );
};

export default FilterByViewers;

import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import { makeStyles } from "tss-react/mui";
import { Link, NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Register from "../../features/Auth/components/Register";
import Login from "../../features/Auth/components/Login";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Menu, MenuItem } from "@mui/material";
import { logOut } from "../../redux/reducer/userLogin";

export default function Header() {
  const dispatch = useDispatch();
  const MODE = {
    LOGIN: "login",
    REGISTER: "register",
  };
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const login = useSelector((state: any) => state.userLogin.current);
  console.log("login", login);
  const isLogined = !!login.id;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openAccount = Boolean(anchorEl);
  const handleClickAccount = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUser = () => {
    setAnchorEl(null);
  };

  const handleLogoutAccount = () => {
    dispatch(logOut());
  };
  const useStyles = makeStyles<{ color: "red" | "blue" }>()(
    (theme, { color }) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        textDecoration: "none",
        color: "white",
      },
      button: {
        color: "#FFF",
        fontSize: "16px",
      },
    })
  );
  const [color, setColor] = useState<"red" | "blue">("red");
  const { classes, cx } = useStyles({ color });
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <CodeIcon className={classes.menuButton} />
            <NavLink to={"/products"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                component="div"
                className={classes.title}
              >
                EZ Shop
              </Typography>
            </NavLink>
            <Link to={"/todoList"}>
              <Button className={classes.button}>Todo</Button>
            </Link>
            <Link to={"/albumList"}>
              <Button className={classes.button}>Album</Button>
            </Link>
            {!isLogined && (
              <Button className={classes.button} onClick={handleClickOpen}>
                Register
              </Button>
            )}
            {isLogined && (
              <div>
                <Button onClick={handleClickAccount}>
                  <AccountCircleIcon style={{ color: "white" }} />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openAccount}
                  onClose={handleCloseUser}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleCloseUser}>My account</MenuItem>
                  <MenuItem onClick={handleLogoutAccount}>Logout</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            {mode === MODE.REGISTER && (
              <Box>
                <Register closeDialog={handleClose} />
                <Button onClick={() => setMode(MODE.LOGIN)}>
                  IF YOU HAVE ACCOUNT. PLEASE LOGIN
                </Button>
              </Box>
            )}

            {mode === MODE.LOGIN && (
              <Box>
                <Login closeDialog={handleClose} />
                <Button onClick={() => setMode(MODE.REGISTER)}>
                  IF YOU DON'T HAVE ACCOUNT. PLEASE REGISTER
                </Button>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}

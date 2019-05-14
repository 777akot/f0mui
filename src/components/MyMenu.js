const MyMenu = [
  {
    label: "Home",
    pathname: "/",
    authorized: true,
  },
  {
    label: "Dashboard",
    pathname: "/dashboard",
    authorized: true,
  },
  {
    label: "Sign in",
    click: "signinbut",
    authorized: false,
  },


];

export default MyMenu;

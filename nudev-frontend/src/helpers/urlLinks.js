import Login from "../components/auth/Login";
import Profile from "../components/resources/Profile";
import About from "../pages/About";
import Landing from "../pages/Landing";
import Resources from "../pages/Resources";
import Team from "../pages/Team";

export const routesList = {
  landing: {
    id: 0,
    title: "Landing",
    path: "/",
    componentName: Landing,
    mainNav: false,
  },
  about: {
    id: 1,
    title: "About",
    path: "/about",
    componentName: About,
    mainNav: true,
  },
  resources: {
    id: 2,
    title: "Resources",
    path: "/resources",
    componentName: Resources,
    mainNav: true,
  },
  team: {
    id: 3,
    title: "Team",
    path: "/team",
    componentName: Team,
    mainNav: true,
  },
  login: {
    id: 4,
    title: "Login",
    path: "/login",
    componentName: Login,
    mainNav: true,
  },
  profile: {
    id: 5,
    title: "Profile",
    path: "/profile",
    componentName: Profile,
    mainNav: false,
  },
};

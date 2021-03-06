import Resource from "../components/resources/Resource";
import About from "../pages/About";
import AuthPage from "../pages/AuthPage";
import Landing from "../pages/Landing";
import ProfilePage from "../pages/ProfilePage";
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
    path: "/auth",
    componentName: AuthPage,
    mainNav: false,
  },
  profile: {
    id: 5,
    title: "Profile",
    path: "/profile",
    componentName: ProfilePage,
    mainNav: true,
  },
  resource: {
    id: 5,
    title: "Resource",
    path: "/resource/:id",
    componentName: Resource,
    mainNav: false,
    relative: true,
  },
};

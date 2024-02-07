import HomePage from "@pages/home.js";
import MonsterPage from "@pages/monster.js";
import Layout from "./components/shared/Layout";

const $root = document.getElementById("root");

const routes = {
  "/": HomePage,
  "/monster/:id": MonsterPage,
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const changeUrl = (requestedUrl) => {
  const matchedPath = Object.keys(routes).find((route) =>
    requestedUrl.match(pathToRegex(route))
  );

  const matchedComponent = routes[matchedPath];

  matchedComponent ? new Layout($root, { children: matchedComponent }) : null;
};

export const navigateTo = (path) => {
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", window.location.origin + path);
    changeUrl(path);
  }
};

export const initialzeRouter = () => {
  window.addEventListener("popstate", () => {
    changeUrl(window.location.pathname);
  });

  window.addEventListener("DOMContentLoaded", () => {
    changeUrl(window.location.pathname);
  });
};

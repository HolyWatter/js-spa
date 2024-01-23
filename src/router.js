import HomePage from "@pages/home.js";

const $root = document.getElementById("root");

const routes = {
  "/": HomePage,
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const changeUrl = (requestedUrl) => {
  const matchedPath = Object.keys(routes).find((route) =>
    requestedUrl.match(pathToRegex(route))
  );

  const matchedComponent = routes[matchedPath];

  matchedComponent ? new matchedComponent($root).render() : null;
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

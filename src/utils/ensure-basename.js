if (!window.location.pathname.includes("/hackeps")) {
  window.history.replaceState("", "", "/hackeps" + window.location.pathname);
}

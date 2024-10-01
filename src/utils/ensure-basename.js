// if (window.location.pathname === "/") {
//   window.history.replaceState("", "", "/hackeps" + window.location.pathname);
// }

if (window.location.pathname !== "/waiting") {
  window.history.replaceState("", "", "/waiting");
}

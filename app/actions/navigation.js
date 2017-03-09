export const NAVIGATION_PUSH = "NAVIGATION_PUSH";
export const NAVIGATION_POP = "NAVIGATION_POP";

export const navigatePage = (payload) => {
  const type = payload.type === "push"
    ? NAVIGATION_PUSH
    : NAVIGATION_POP;

  return {
    type,
    key: payload.key,
    title: payload.title
  };
}

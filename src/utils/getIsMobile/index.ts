export const getIsMobile = () => {
  return window.matchMedia('(max-width: 760px)').matches;
};

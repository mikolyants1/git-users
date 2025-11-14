export const debounce = (func: Function, ms: number) => {
  setTimeout(() => {
    func();
  }, ms);
};

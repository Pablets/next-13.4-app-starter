export function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout: any;
  // eslint-disable-next-line func-names
  return function () {
    // @ts-ignore
    const context = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

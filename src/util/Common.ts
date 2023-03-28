// Debug
const debug = (msg: any, useJson = false, tag = 'TEST//') => {
  console.log(tag, useJson ? JSON.stringify(msg) : msg);
};

// Check Empty
const isEmpty = (obj: any) => {
  return (
    obj === null ||
    obj === undefined ||
    obj === '' ||
    (typeof obj == 'object' && !Object.keys(obj).length)
  );
};

// Check List Size
const checkListSize = <B>(list: Array<B> | B[] | null | undefined) => {
  if (isEmpty(list)) return false;
  return list!.length > 0;
};

export default {
  debug,
  isEmpty,
  checkListSize,
};

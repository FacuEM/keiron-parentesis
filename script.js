// str = (hello (world)) => 1
// str = (h(e))llo (w(or)ld) => 1
// str = (h(e)))l(l(o (w(or)ld))) => 0
// str = (hello ))(((world)) => 0

const pair = (str) => {
  if (!str.includes(")") && !str.includes("(")) {
    return 1;
  }
  const dict = { "(": 0, ")": 0 };

  for (let i = 0; i < str.length; i++) {
    if (dict.hasOwnProperty(str[i])) {
      if (dict[")"] <= dict["("]) {
        dict[str[i]] = dict[str[i]] + 1;
      }
    }
  }
  if (dict["("] === dict[")"]) {
    return 1;
  } else {
    return 0;
  }
};
console.log(pair("hello world"));
console.log(pair("(hello world"));
console.log(pair("(hello (world))"));
console.log(pair("(h(e))llo (w(or)ld)"));
console.log(pair("(h(e)))l(l(o (w(or)ld)))"));
console.log(pair("(hello ))(((world))"));

function solve(a, b) {
  if (a > b) {
    return ">";
  } else if (b > a) {
    return "<";
  } else {
    return "=";
  }
}

console.log(solve(2, 3));
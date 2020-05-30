function convert(x) {
  switch (typeof x) {
    case "number":
      return x + 5;
    case "string":
      return "hello" + x;
    case "object":
      return x.toString();
  }
}

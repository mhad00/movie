function Show(x) {
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default Show;

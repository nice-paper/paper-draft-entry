import importHTML from "import-html-entry";

// TODO
importHTML("http://127.0.0.1:8080/index.html").then((res) => {
  console.log(res.template);
  console.log(res.assetPublicPath);
  window.assetPublicPath = res.assetPublicPath;
  res.execScripts();
});

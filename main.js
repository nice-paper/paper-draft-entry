import importHTML from "import-html-entry";

importHTML(
  "https://paper-draft-site.oss-accelerate.aliyuncs.com/index.html"
).then((res) => {
  console.log(res.template);
  console.log(res.assetPublicPath);
  window.assetPublicPath = res.assetPublicPath;
  res.execScripts();
});

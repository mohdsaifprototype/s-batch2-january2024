let mainScript = document.querySelector("#mainScript");

let bootStrapCss = document.createElement("link");

let bootStrapJs = document.createElement("script");


// Defining Bootstrap CSS CDN using JS
bootStrapCss.setAttribute(
  "href",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
);
bootStrapCss.setAttribute("rel", "stylesheet");
bootStrapCss.setAttribute(
  "integrity",
  "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
);
bootStrapCss.setAttribute("crossorigin", "anonymous");

// Defining Bootstrap JS CDN using JS

bootStrapJs.setAttribute(
  "src",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
);
bootStrapJs.setAttribute(
  "integrity",
  "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
);
bootStrapJs.setAttribute("crossorigin", "anonymous");
bootStrapJs.setAttribute("defer", true);



mainScript.before(bootStrapCss);

mainScript.after(bootStrapJs);

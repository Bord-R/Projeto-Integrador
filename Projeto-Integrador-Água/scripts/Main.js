//caminho dos scripts
const wayScripts = "scripts/";

//tipo dos scripts
const typeFile = ".js";

//onde vai ter os scripts
let scriptsJS = [
    "ToggleDarkAndClare"
];

//adicionando eles ao documento HTML

scriptsJS.forEach(_file => {

    const newScript = document.createElement('script');

    newScript.src = wayScripts + _file + typeFile;
    newScript.async = false;
    document.head.appendChild(newScript);
});
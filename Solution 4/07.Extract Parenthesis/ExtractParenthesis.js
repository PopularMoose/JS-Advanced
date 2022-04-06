function extract(content) {
 let contentEl = document.getElementById(content);

 let pattern = /\(([^(]+\))/g;
 let match = contentEl.textContent.matchAll(pattern);
 let result = [];
for (const matchs of match) {
    result.push(matchs[1]);
}
return result.join('; ');
}
/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["el", "vuestro", "nuestro", "mi"];
  let adjs = ["gran", "mejor", "super", "increible"];
  let nouns = ["amigo", "perro", "plei5", "carro"];
  let extensions = [".com", ".net", ".org", ".ve"];
  let results = "";

  pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
      nouns.forEach(noun => {
        extensions.forEach(extension => {
          console.log(pronoun + adj + noun + extension);
          results = results + "\n" + pronoun + adj + noun + extension;
        });
      });
    });
  });
  let domainGenerator = document.getElementById("results");
  domainGenerator.innerHTML = results;
};

// Para funcionar corretanente, antes de ".jpg" deve estar escrito: "maxresdefault", para que a thumbnail entre com sua resolução maxíma e fique bonitinho ^w^.
const listaYT = [
  "https://yt3.ggpht.com/ytc/AMLnZu9fwc9E-G17B2vMnbYzZBp_NYs4AmCE802y8x08=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu_3V_iTCz3_20NZc0_WypBbS1AK3QsBkJF001k8SQ=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu8zAmF1BDo7p8K9xw_3tr0J8fEdWbbq64ykTRSTpg=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/ytc/AMLnZu8lUVeJ1TiYevFOzZPNQFEQSDHc-TwiYKMcQpxpvA=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/ytc/AMLnZu9XCumF881WgJ5yEIZp7BWuImKNC9T-IwVUEGeXyg=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu_8E2fVaNH2D20xn32ph9axohUCgWaLpXO_tXJ14g=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu9SFJaGUnZnhHBfmnrSQ_5IZObGBhia1VSMVdpTEg=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/ytc/AMLnZu-UQrGbrHx7sH0Ea0SrUlMQ_HYQcwkQh2gL1w3JkQ=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.googleusercontent.com/T8G2AqFptE4RWa3NVoeE1eP8vIQPDf9gBIvfeRm_aUHujzjQFhoZWWcC7c0LlnY76l9Zl6S0TA=s176-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/_zaUyr6nSjroD818AhkDuwBGIy5tr_DKmddob8RkeuK-nmN9CQLXb2ayAeBK2_Ojnb2Cd7uSC5I=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.googleusercontent.com/YtEFxzWdIN8cMOFSNXacDlVZFzE8k_K6Xn_bOc_ehh2q49YGQ-QmwS-fAg_rJeM7GnTldac7=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.googleusercontent.com/ytc/AMLnZu8sKqJsWutKOkODqApDfyKFjQ3eb3hqL89MJt7y=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/m8Yrqf0Y81L4mZ1Cq7rGnJ4NDHe6729rxiFZvWyy9-xd_Z7Osmza7J8NWpN1axMHcCb1oKJNgA=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/ytc/AMLnZu8ecQorMO_sToYiqZJynYBeaz0Xa_HK-Z6UA4aO=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu_2b9piwsef9cub_jjHPcMNw8JNAXNKmf3kQpSB=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu9-n9mDtKOwVMx3_-2zr8H57lHFag5t-0JcJNFPUQ=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu9ZwnwHt4DaY03iQD1mALpJKFPbMBiilsc1KRCV5g=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu_B2N15Iv2b8IYDYcrjkXScMam9LGnVyfadI_Fu1ok=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/z0Ccoolotr1Q4F2EaCIgaR4GWLAR_VCwP25QrTica_e9XV6x8-kuQx_qnqI1mnaOkYl6KkIL=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/84ALFuw4UCyfL1TyoMU77D-I6xngPjn2X0kbx2bMAyoFzWwR-utcrbDn_MuNJcroPcmU9NdGGQ=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/ytc/AMLnZu-rihMwxuXoZ2IjdwvfXegytnGVYquLdSBhRf5-ZOM=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/ytc/AMLnZu-wtZzoT6Qpw-h2Ng_bpT8SvaWca_w-EGKc5D69kQ=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/ytc/AMLnZu-50eV3fK6unoZyi0yLMWnAo-NIRRy1PMTPUen8=s88-c-k-c0x00ffffff-no-rj",

  "https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu9UJxaTaTBMLMbZA1s14YCYhFkZjXGHTU8pD5M5=s88-c-k-c0x00ffffff-no-rj",
  "https://yt3.ggpht.com/ytc/AMLnZu9WFZ1kTBuy0mo3cVlo17QFXNT_55y2W_QMoRWLFw=s88-c-k-c0x00ffffff-no-rj"
];

// As duas imagens são clicáveis e levam aos seus respectivos vídeos, tive problemas adicionando links com 'watch', então recomendo na hora de adicionar trocar watch para 'embed', todas os links adicionados vem para essa array
const listaLink = [
  "https://www.youtube.com/c/FilipeDeschamps",
  "https://www.youtube.com/c/NOVAACR%C3%93POLEBRASIL",
  "https://www.youtube.com/c/Programadorbr",
  "https://www.youtube.com/c/codigofontetv",
  "https://www.youtube.com/c/coisadenerd",
  "https://www.youtube.com/c/cs50",
  "https://www.youtube.com/c/CursoemV%C3%ADdeo",
  "https://www.youtube.com/c/DevmediaBrasil",
  "https://www.youtube.com/c/Alura",
  "https://www.youtube.com/c/Chiefofdesign",
  "https://www.youtube.com/@attekitadev",
  "https://www.youtube.com/@42saopaulo54",
  "https://www.youtube.com/c/DevSoutinho",
  "https://www.youtube.com/c/WagnerAguiar",
  "https://www.youtube.com/c/Programa%C3%A7%C3%A3oDin%C3%A2mica",
  "https://www.youtube.com/c/RocketSeat",
  "https://www.youtube.com/c/UniversoProgramado",
  "https://www.youtube.com/CanalTech",
  "https://www.youtube.com/c/LucasMontano",
  "https://www.youtube.com/c/rafaellaballerini",
  "https://www.youtube.com/c/FabioAkita1990",
  "https://www.youtube.com/c/OProgramadorReal",
  "https://www.youtube.com/c/HashtagPrograma%C3%A7%C3%A3o",
  "https://www.youtube.com/c/Code",
  "https://www.youtube.com/channel/UCcebgzT_qkQOtRyErCYKEkw",
  "https://www.youtube.com/c/Figmadesign"
];
const listaNome = [
  "Filipe Deschamps",
  "Nova Acrópole",
  "Programador BR",
  "Código Fonte TV",
  "Coisa de Nerd",
  "CS50 Harvard",
  "Curso em Vídeo",
  "DevMedia",
  "Alura",
  "Chief of Design",
  "Attekita Dev",
  "42 São Paulo",
  "Mario Souto - Dev Soutinho",
  "Wagner Aguiar",
  "Programação Dinâmica",
  "Rocketseat",
  "Universo Programado",
  "Canaltech",
  "Lucas Montano",
  "Rafaella Ballerini",
  "Fabio Akita",
  "O Programador",
  "Hashtag Programação",
  "Visual Studio Code",
  "BossaBox",
  "Figma"
];

//Código para os YTs pré-estabelecidos
for (var i = 0; i < listaYT.length; i++) {
  document.getElementById(
    "imagem"
  ).innerHTML += `<figure><a href=${listaLink[i]}><img src=${listaYT[i]}></a><figcaption>${listaNome[i]}</figcaption></figure>`;
}
//Código para inserir novos YTs
function Adicionar() {
  //captura o url da imagem "video"
  var imgYT = document.getElementById("img-yt").value;
  var linkYT = document.getElementById("link-yt").value;
  var nomeYT = document.getElementById("nome-yt").value;

  //verfica se o video já estava na lista ou não
  if (imgYT == "" || linkYT == "" || nomeYT == "") {
    alert("Insira o link/nome!");
    return listaYT.pop();
    return listaLink.pop();
  } else if (listaYT.includes(imgYT) || listaLink.includes(linkYT)) {
    alert("image and link are already cataloged!");
  } else {
    //se não então adiciona a lista normalmente
    listarYTNaTela(linkYT, imgYT, nomeYT);
  }
  document.getElementById("img-yt").value = "";
  document.getElementById("link-yt").value = "";
  document.getElementById("nome-yt").value = "";
}

//Código para listar os elementos na página
function listarYTNaTela(linkYT, imgYT, nomeYT) {
  listaRPG.push(imgYT);
  listaLink.push(linkYT);
  listaLink.push(nomeYT);
  var a = (listaYT.length && listaLink.length && listaNome).length;

  for (
    i = 5;
    i <= (listaYT.length && listaLink.length && listaNome).length;
    i++
  ) {
    let elementoYT = `<figure><a href=${linkYT}><img src=${imgYT}></a><figcaption>${nomeYT}</figcaption></figure>`;
    document.getElementById("imagem").innerHTML += elementoYT;
  }
}

//Código para remover os elementos na página
function Remover() {
  if (listaYT.length === 0 || listaLink.length === 0) {
    alert("No new YTs to remove");
  } else {
    document.getElementById("imagem").lastChild.remove();
    listaYT.pop();
    listaLink.pop();
  }
}
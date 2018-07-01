var apiKey = '6f4fa5447bb24a2687edecc4c1df43b4';
var main = document.querySelector('main');
var sourceSelector = document.querySelector('#sourceSelector');
var defaultSource = "national-geographic";

window.addEventListener('load', async function(e){
    updateNews();
    await updateSources();
    sourceSelector.value = defaultSource;
    sourceSelector.addEventListener('change', changeNews);
})

function changeNews(){
    console.log(sourceSelector.value);
    updateNews(sourceSelector.value);
}

async function updateNews(source = defaultSource){
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=a5d2366b77a64988a0760c5907de2488`);
    const json = await res.json();
    main.innerHTML = json.articles.map(creatArticle).join('\n');
}

function creatArticle(article){
    return `
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}" alt="${article.title}">
        <p>${article.description}</p>
      </a>
    </div>
    `;

}

async function updateSources(){
    const res = await fetch(`https://newsapi.org/v2/sources?apiKey=a5d2366b77a64988a0760c5907de2488`);
    const json = await res.json();
    sourceSelector.innerHTML = json.sources.map(createOption).join('\n');
}
function createOption(src){
    return `<option value="${src.id}">${src.name}</options>`;
}
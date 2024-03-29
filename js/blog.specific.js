const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);
console.log(params);

const cors = "https://cors.noroff.dev/";
const url =
"https://haiderhashem.one/project-exam-1/wp-json/wp/v2/posts/"+ id;

const corsUrl = cors + url;

console.log(corsUrl);

const productContainer = document.querySelector(".api-blog");

function error(message = "error") {
  return `<div class"error">${message}</div>`;
}

console.log(corsUrl);

async function apiBlogs() {
  try {
    const response = await fetch(corsUrl);
    const results = await response.json();
    document.title = results.title.rendered;


    productContainer.innerHTML += `
        <div class="details">
        <div><h2>${results.title.rendered}</h2></div>
        <div><img src="${results.jetpack_featured_media_url}" alt="Picture of ${results.title.rendered}"></img></div>
        <div>${results.excerpt.rendered}</div>
      </div>`;
  } catch (error) {
    console.log(error);
  }
}

apiBlogs();


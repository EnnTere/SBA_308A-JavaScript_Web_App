///////// Module Import & Exports /////////
export { populatePage };


///////// Render Anime API data on page /////////

// Create DocumentFragment & loop over API data
// Clone HTMLTemplate & populate w/ data for each entry
// Append HTMLTemplate entries to DocumentFragment
// Clear container's data & append DocumentFragment to container
function populatePage(animeData) {
  const container = document.querySelector('.anime-container');
  const template = document.querySelector('#anime-template');
  const fragment = document.createDocumentFragment();

  animeData.records.forEach(anime => {
    const clone = template.content.cloneNode(true);

    clone.querySelector('.anime-title').textContent = anime.title;
    clone.querySelector('.anime-synopsis').textContent = anime.synopsis;

    const img = clone.querySelector('.anime-img')
    img.src = anime.img_url;
    img.alt = `Art for ${anime.title}`;

    fragment.appendChild(clone)
  });
  container.innerHTML = "";
  container.appendChild(fragment);
};
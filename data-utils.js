// Exports

export { fetchData };


///////// DOM Elements /////////


  // const img = document.querySelector('img');
  // const title = document.querySelector('h2');
  // const about = document.querySelector('p');


///////// API data /////////

const url = 'https://biggest-anime-collection.p.rapidapi.com/rapidapi/anime/anime_pagination.php?page_no=1';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5e4518fb55msh5d3673903f5a9e4p1c0e89jsnbb1fc42cca8e',
		'x-rapidapi-host': 'biggest-anime-collection.p.rapidapi.com',
	},
  cache: 'no-cache',
};


//////////////////////////////////////////////
//obj > records [] > obj containing all k:var
//animeDataObj.records[0].img_url
//////////////////////////////////////////////


// Retrieves data from API & checks for errors
async function fetchData() {
  try {  
    const response = await fetch(url, options);
    if (!response.ok) throw new Error ("Not a valid response")
    const animeDataObj = await response.json();

    populatePage(animeDataObj);

    } catch (error) {
      console.warn(error.message);
    }
};


// Render Anime API data on page
//// Create DocumentFragment & loop over API data
//// Clone HTMLTemplate & populate w/ data for each entry
//// Append HTMLTemplate entries to DocumentFragment
//// Clear container's data & append DocumentFragment to container
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




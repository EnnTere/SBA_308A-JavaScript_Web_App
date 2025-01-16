///////// Module Import & Exports /////////
export { fetchData };
// import { pagination } from "./page-util.js";
import { populatePage } from "./render-utils.js";


// INCOMPLETE: Had not 100% worked out the best directions for the imports & exports, & what would avoid any sort of unnecessary recursion



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


///////// Nesting for Reference ///////////////
//obj > records [] > obj containing all k:var
//animeDataObj.records[0].img_url
//////////////////////////////////////////////

///////// Fetches data from API /////////
// Checks for errors with response
// INCOMPLETE: Checks for missing values not implemented
async function fetchData() {
  try {  
    const response = await fetch(url, options);
    if (!response.ok) throw new Error ("Not a valid response")
    const animeDataObj = await response.json();

    populatePage(animeDataObj);
    // INCOMPLETE: pagination(animeDataObj);

    } catch (error) {
      console.warn(error.message);
    }
};




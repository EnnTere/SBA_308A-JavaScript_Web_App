

///////// API data /////////

const url = 'https://biggest-anime-collection.p.rapidapi.com/rapidapi/anime/anime_pagination.php?page_no=1';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5e4518fb55msh5d3673903f5a9e4p1c0e89jsnbb1fc42cca8e',
		'x-rapidapi-host': 'biggest-anime-collection.p.rapidapi.com',
	}
};






// Retrieves data from API & checks for errors
export async function getData() {
  try {  
    const response = await fetch(url, options);
    console.log(response);
    if (!response.ok) throw new Error ("Not a valid response")
    const animeDataObj = await response.json();
    console.log(animeDataObj);
    } catch (error) {
      console.warn(error.message);
    }


};









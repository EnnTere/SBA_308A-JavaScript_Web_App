///////// Module Import & Exports /////////
export { populatePage, displayButtons  };

//pagination




///////// Render Anime API data on page /////////

// DOM Elements - HTML Template
const fragment = document.createDocumentFragment();


// Create DocumentFragment & loop over API data
// Clone HTMLTemplate & populate w/ data for each entry
// Append HTMLTemplate entries to DocumentFragment
// Clear container's data & append DocumentFragment to container
function populatePage(animeData) {
  const animeContainer = document.querySelector('.anime-container');
  const animeTemplate = document.getElementById('#anime-template');
  // const fragment = document.createDocumentFragment();

  //Retrieves records and creates 10 entries
  animeData.records.forEach(anime => {
    const clone = animeTemplate.content.cloneNode(true);

    clone.querySelector('.anime-title').textContent = anime.title;
    clone.querySelector('.anime-synopsis').textContent = anime.synopsis;

    const img = clone.querySelector('.anime-img')
    img.src = anime.img_url;
    img.alt = `Art for ${anime.title}`;

    fragment.appendChild(clone)
  });
  animeContainer.innerHTML = "";
  animeContainer.appendChild(fragment);
};


function displayButtons (animeData) {
  // DOM Elements
  const btnTemplate = document.getElementById('page-buttons');
  const btnContainer = document.querySelector('.pages-nav');
  const navBtns1 = document.getElementById('first-btn');
  // const navBtns2 = document.getElementById('second-btn');
  // const navBtns3 = document.getElementById('third-btn');
  const lastBtn = document.getElementById('last-btn');

  // API Data Variables
  let currentPage = animeData.page_no;
  const totalRecords = animeData.total_records;
  const recordsPerPage = animeData.records_on_page;

  // Creating Navigation Buttons
  const clone = btnTemplate.cloneNode(true);

  for (let i = 0; i < 3; i++) {
    const clonedBtn = clone.navBtns1.textContent = currentPage + i;

  fragment.appendChild(clone);
  };
  // Clears buttons
  pageNav.innerHTML = "";
  btnContainer.appendChild(fragment);
};



  // Clears buttons
  // pageNav.innerHTML = "";

  // firstBtn.textContent = currentPage;
  // secondBtn.textContent = currentPage + 1;
  // thirdBtn.textContent = currentPage + 2;
  // lastBtn.textContent = totalPages;



///////Data Format for Reference
// total_records: '19311',
// records_on_page: 10,
// next_records_available: 'yes',
// page_no: 1, (Query Param)




  // Event listener on page buttons
// pagesNav.addEventListener('click', (e) => {
//   const isButton = e.target.nodeName === 'BUTTON';
//   if (!isButton) {
//     return;
//   }
//   console.dir(e.target.id);
// });


  // // Load more interaction
// loadBtn.addEventListener('click', () => {
//   page++
//   pagination();
// });






// const pagination = async (animeData) => {
//   const pages = animeData.page_no;
//   const itemsPerPage = animeData.records_on_page;
//   const loadBtn = document.getElementById('load-more')

//   const skip = (pages - 1) * itemsPerPage;
//   const paginatedURL = 'https://biggest-anime-collection.p.rapidapi.com/rapidapi/anime/anime_pagination.php?page_no=${pages}&skip${skip}';

//   const animeData.map()






// }

// // Load more interaction
// loadBtn.addEventListener('click', () => {
//   page++
//   pagination();
// });

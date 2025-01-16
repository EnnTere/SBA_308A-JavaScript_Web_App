///////// Module Exports /////////
//export { pagination };



///////Data Format for Reference
// total_records: '19311',
// records_on_page: 10,
// next_records_available: 'yes',
// page_no: 1, (Query Param)



///////// Pagination /////////
// INCOMPLETE: Original plan was see if I could use a similar approach as the populatePage function. But some unforeseen circumstances ended up significantly impacting the amount of time I had for this project. Obviously not everything below is necessary or even working towards the same thing. It's leftover code from thinking through things while rushing, not something I was expecting to work as written.
// 
// Plan:  buttons 1 - 5 & a button that's = totalPages
// Ex. [1] [2] [3] ... [1931]

// function pagination(animeData) {

//   // Page & record data
//   let currentPage = animeData.page_no;
//   const totalRecords = animeData.total_records;
//   const recordsPerPage = animeData.records_on_page;

//   // Divide total records to calculate number of pages
//   const totalPages = totalRecords / recordsPerPage;

//   const pageNav = document.querySelector('.pages-nav');
//   const firstBtn = document.querySelector('#first-btn');
//   const secondBtn = document.querySelector('#second-btn');
//   const thirdBtn = document.querySelector('#third-btn');
//   const lastBtn = document.querySelector('#last-btn');

//   // Clears buttons
//   pageNav.innerHTML = "";
//   // Last button displays total # of pages
//   firstBtn.innerHTML = currentPage;
//   secondBtn.innerHTML = currentPage + 1;
//   thirdBtn.innerHTML = currentPage + 2;
//   lastBtn.innerHTML = totalPages;


//   if (currentPage > 1 && next_records_available) {
//     // const firstBtn = document.createElement('button');
//     // const secondBtn = document.createElement('button');
//     // const nextBtn = document.createElement('button');
//     // nextBtn.textContent = currentPage+1;
//     // button.append(nextBtn)
//     const prevButton = document.createElement('button');
//     prevButton.textContent = 'Previous';
//     prevButton.onclick = () => fetchAnimeData(currentPage - 1);
//     paginationContainer.appendChild(prevButton);
//   }


//   // Event listener on page buttons
//   pagesNav.addEventListener('click', (e) => {
//     const isButton = e.target.nodeName === 'BUTTON';
//     if (!isButton) {
//       return;
//     }
//     console.dir(e.target.id);
//   })}

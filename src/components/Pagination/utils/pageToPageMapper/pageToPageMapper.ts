const delta = 2; // número de páginas antes e depois da página atual a serem exibidas

/*
  * @param {number} currentPage - current page number
  * @param {number} totalPages - total number of pages
  * @returns {number[]} - array of page numbers
  * @description - this function returns an array of page numbers to be displayed
  * in the pagination component
  * @example - if the current page is 5 and the total number of pages is 10, the
  * function will return [3, 4, 5, 6, 7]
  * @example - if the current page is 1 and the total number of pages is 10, the
  * function will return [1, 2, 3, 4, 5]
  * @example - if the current page is 10 and the total number of pages is 10, the
  * function will return [6, 7, 8, 9, 10]
  * @example - if the current page is 1 and the total number of pages is 5, the
  * function will return [1, 2, 3, 4, 5]
  * @example - if the current page is 5 and the total number of pages is 5, the
  * function will return [1, 2, 3, 4, 5]
  * @example - if the current page is 10 and the total number of pages is 5, the
  * function will return [6, 7, 8, 9, 10]
  * @example - if the current page is 1 and the total number of pages is 3, the
  * function will return [1, 2, 3]
  * @example - if the current page is 2 and the total number of pages is 3, the 
  * function will return [1, 2, 3]
  * @example - if the current page is 10 and the total number of pages is 5, the
  * function will return []
  * */

function pageToPageMapper(currentPage: number, totalPages: number) {
  const paginationArray: number[] = [];

  // Verifica se o número de páginas é válido
  if (totalPages < 1 || currentPage < 1 || currentPage > totalPages) {
    return paginationArray;
  }

  // define o número de páginas antes e depois da página atual
  let left = currentPage - delta;
  let right = left + delta * 2;

  // Verifica se o número de páginas antes da página atual é menor que 1
  if (left < 1) {
    right += 1 - left;
    left += 1 - left;
  }

  // Verifica se o número de páginas depois da página atual é maior que o número total de páginas
  if (right > totalPages) {
    left -= right - totalPages;
    right -= right - totalPages;
  }

  // Verifica se o número de páginas antes da página atual é menor que 1
  if (left < 1) {
    left = 1;
  }

  // adiciona os números das páginas na array
  for (let i = left; i <= right; i += 1) {
    paginationArray.push(i);
  }

  return paginationArray;
}

export default pageToPageMapper;
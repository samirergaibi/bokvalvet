

const API = {
  url: "https://www.googleapis.com/books/v1/"
}

export function searchForBook(searchTerm, startIndex = 0, maxResults = 10){
  return fetch(`${API.url}volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`)
    .then(resp => resp.json())
    .catch(err => new Error(err));
}

export function getBook(id){
  return fetch(`${API.url}volumes/${id}`)
    .then(resp => resp.json())
    .catch(err => new Error(err));
}


const API = {
  url: "https://www.googleapis.com/books/v1/"
}

export function searchForBook(searchTerm){
  return fetch(`${API.url}volumes?q=${searchTerm}`)
    .then(resp => resp.json())
    .catch(err => new Error(err));
}
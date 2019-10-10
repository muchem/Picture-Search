let results = document.getElementById('results');
let data = "";
let responce;
let Url = "https://pixabay.com/api/";
let ApiKey = "?key=13875463-5946a46e49401d6e5a6de2d2b";
let searchTxt;
document.getElementById("search-bnt").disabled = true;
const checkValue = () => {
    if (document.getElementById('searchBar').value !== "") {
        document.getElementById("search-bnt").disabled = false;
    }
}
const getImages = async () => {
    searchTxt = document.getElementById('searchBar').value;
    const api = `${Url}${ApiKey}&q=${searchTxt}&image_type=photo`;
    const responce = await fetch(api);
    const data = await responce.json();
    console.log(data);
    searchTxt = "";
}

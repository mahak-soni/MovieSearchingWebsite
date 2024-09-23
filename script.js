const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";// init call
const movieBox = document.querySelector(".box")
const getMovies = async (url) => {
    const response = await fetch(url)
    const data = await response.json();
    // console.log(data);
    showMovies(data);
}
getMovies(APIURL);

const showMovies = (data) => {
    movieBox.innerHTML="";
    data.results.forEach(
        (result)=>{
            const imagePath=result.poster_path ===null? myImage.jpeg :IMGPATH + result.poster_path;
            const movies = document.createElement("div")
            movies.classList.add("movies");
            movies.innerHTML = `
            <img src="${imagePath}" alt="Movie Image not found" srcset="">
                <div class="overlay" >
                    <div class="title">
                        <h2>${result.original_title}</h2>
                        <span>${result.vote_average}</span>
                    </div>
                    <h3>Overview:</h3>
                    <p>${result.overview}</p>
                </div>
            `;
            movieBox.appendChild(movies)
        }
    )
}
const searchBox= document.querySelector("#inputSearch");
searchBox.addEventListener(
    "keyup",
    function(event){
        if(event.target.value!=""){
            getMovies(SEARCHAPI+ event.target.value)
        }
        else{
            getMovies(APIURL);
        }
    }
)
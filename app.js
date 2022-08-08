const searchInput = document.querySelector('.search-input')
const btnSearch = document.querySelector('.search-bar')
const result = document.querySelector('.result')

let getMovie = ()=>{
    let input = searchInput.value
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=560679cd'
    if (input.length <=0){
        result.innerHTML = `<h3 class="msg">Please Enter a movie name </h3>`
    }
    else{
        fetch(url)
        .then((resp)=>{
            resp.json()
        })
        .then((data)=>{
            console.log(data)
            // result.innerHTML=`
            // <div class="infor">
            //     <div class="img">
            //         <img src=${data.Poster} alt="" class="img-film">
            //     </div>
            //     <div class="infor-film">
            //         <h2 class="name"> ${data.Title}</h2>
            //         <i class='bx bx-star'>${data.imdbRating}</i>
                    
            //         <div class="information-film">
            //             <p class="infor-film-int">${data.Rated} </p>
            //             <p class="infor-film-int">${data.Year} </p>
            //             <p class="infor-film-int">${data.Runtime} </p>
            //         </div>
            //         <div class="type-film">
            //             <button class="btn-type-film">
            //                 ${data.Genre.split(",").join("<button></button>")}
            //             </button>
                        
            //         </div>
            //     </div>
            // </div>
            // <div class="plot">
            //     <h3>Plot:</h3>
            //     <p>${data.Plot}</p>
            // </div>
            // <div class="cast">
            //     <h3>Cast:</h3>
            //     <p>${data.Actors}</p>
            // </div>
            // `
        })
    }
}
btnSearch.addEventListener('click',getMovie)
import React, {useState} from 'react';
import './App.css';

import Search from './Components/Search';
import AllPictures from './Components/AllPictures';
import Pagination from './Components/Pagination';

import axios from 'axios';

const App = () => {

  // Création d'un objet state avec des propriétés vides :
  const [state, setState] = useState({
    search: '',
    results: [],
    select: {},
    currentPage: (1),
    picturesPerPage: (10),
    totalHits: '',
  })

  // Clé API de Pixabay
  const API_KEY = "https://pixabay.com/api/?key=" + process.env.REACT_APP_API_KEY

  

  // le champs input : 
  const searchInput = (e) => {
    let searchPicture = e.target.value;
    // on récupère l'ancienne valeur et on l'a change avec la nouveau valeur qu'on récupère avec e.target.value :
    setState(prevState => {
      return {...prevState, search : searchPicture}
    });
    // console.log(state.search);
  }
  
  // la fonction rechercher avec le button :
  /*
  const searchButton = async () => {
    const response = await fetch(API_KEY + "&q=" + state.search + picturePerPage);
    const data = await response.json();
    setState(prevState => {
      return{...prevState, results : data.hits}
    })
  }
  */

  const nbrTotalOfPicture = process.env.REACT_APP_PICTURES_NUMBER;

  const searchButton = () => {
   // Un array data.data.hits pour récupèrer les images depuis cette API (on peut mettre le paramètre data de la méthode then entre accolade pour acceder à la deuxième dimension du array et puis seulement affecter data.hits à la variable resultPictures)
    axios(API_KEY + "&q=" + state.search + nbrTotalOfPicture ).then((data) => {
      let resultPictures = data.data.hits;
      let totalHitsOfPictures = data.data.totalHits;
      console.log(totalHitsOfPictures);
      console.log(resultPictures);

      // on récupère les informations de data.hits qu'on stocke dans une variable et puis on l'affecte à la propriété results de l'objet state qui est un tableau vide par défaut. 
      setState(prevState => {
        return {...prevState, results : resultPictures, totalHits : totalHitsOfPictures}
      })
    })
  }

  const searchEnter = (event) => {
    if (event.key === 'Enter') {
      axios(API_KEY + "&q=" + state.search + nbrTotalOfPicture ).then(({data}) => {
        let resultPicturesWithEnter = data.hits;
        let totalHitsOfPictures = data.totalHits;
        // console.log(resultPicturesWithEnter);
        // console.log(totalHitsOfPictures);

        setState(prevState => {
          return {...prevState, results : resultPicturesWithEnter, totalHits: totalHitsOfPictures}
        })
      })
    }
  }

  // Pagination : 
  const indexOfLastPicture = state.currentPage * state.picturesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - state.picturesPerPage;
  const currentPictures = state.results.slice(indexOfFirstPicture, indexOfLastPicture);

  // Changer de page : 
  //  pageNumbers vient de pagination.js 
  const paginate = (pageNumbers) => {
    setState(prevState => {
      return{...prevState, currentPage : pageNumbers}
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Picture React App with pagination using Pixabay's API </h1>
        <Search searchInput={searchInput} searchButton={searchButton} searchEnter={searchEnter} />
      </header>

      <main>

        {  (state.totalHits !== 0 ) ?
          <div className="allPictures">
            {currentPictures.map(value =>(
              (<AllPictures key={value.id} pictures={value}/>) 
              
            ))}
          </div>
        : (<p className="errorPictures">Picture not available</p>) } 

        <Pagination 
          totalPictures={state.results.length} 
          picturesPerPage={state.picturesPerPage} 
          paginate={paginate} 
        />
      </main>
    </div>
  );
}

export default App;

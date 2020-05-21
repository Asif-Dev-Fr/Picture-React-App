import React, {useState} from 'react';
import './App.css';

import Search from './Components/Search';

import axios from 'axios';

const App = () => {

  // Création d'un objet state avec des propriétés vides :
  const [state, setState] = useState({
    search: '',
    results: [],
    select: {}
  })

  // Clé API de Pixabay
  const API_KEY = "https://pixabay.com/api/?key=16656881-200d737a6acb845b986ac46c7";

  

  // le champs input : 
  const searchInput = (e) => {
    let searchPicture = e.target.value;
    // on récupère l'ancienne valeur et on l'a change avec la nouveau valeur qu'on récupère avec e.target.value :
    setState(prevState => {
      return {...prevState, search : searchPicture}
    });
    console.log(state.search);
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

  const picturePerPage = "&per_page=30";

  const searchButton = (e) => {
   // Un array data.data.hits pour récupèrer les images depuis cette API (on peut mettre le paramètre data de la méthode then entre accolade pour acceder à la deuxième dimension du array et puis seulement affecter data.hits à la variable resultPictures)
    axios(API_KEY + "&q=" + state.search + picturePerPage ).then((data) => {
      let resultPictures = data.data.hits;
      console.log(data);
      console.log(resultPictures);

      // on récupère les informations de data.hits qu'on stocke dans une variable et puis on l'affecte à la propriété results de l'objet state qui est un tableau vide par défaut. 
      setState(prevState => {
        return {...prevState, results : resultPictures}
      })
    })
  }

  const searchEnter = (event) => {
    if (event.key === 'Enter') {
      axios(API_KEY + "&q=" + state.search + picturePerPage ).then(({data}) => {
        let resultPicturesWithEnter = data.hits;
        console.log(resultPicturesWithEnter);

        setState(prevState => {
          return {...prevState, results : resultPicturesWithEnter}
        })
      })
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Picture React App using Pixabay</h1>
        <Search searchInput={searchInput} searchButton={searchButton} searchEnter={searchEnter} />
      </header>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './Component/Ui/Header';
import CharacterGrid from './Component/Characters/CharacterGrid';
import Search from './Component/Ui/Search';

const App =()=> {

  const [items, setItems] = useState ([])
  const [isLoading, setIsLoading] = useState (true)


  useEffect( () =>{
    const fetchItems = async () => {
      const result = await axios ('https://www.breakingbadapi.com/api/characters?')

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
     
    }
    fetchItems()
  }, [])

  return (
    <div className="App">
      
      <Header />
      <Search />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;

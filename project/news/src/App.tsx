import { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';




export interface Iprops{
  category: string;
}

const App = () => {
  const [category, setCategory] =  useState<Iprops>();
  const onSelect = useCallback((category: Iprops): void => setCategory(category), []) 

  return(
    <>
      <Categories category ={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  )
};
export default App;

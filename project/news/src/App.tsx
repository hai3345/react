import { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';




//asdfsdf
const App = () => {
  const [ category, setCategory ] = useState<any[]>([]);
  const onSelect = useCallback(category => setCategory(category),[]);  
  return(
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  )
};
export default App;

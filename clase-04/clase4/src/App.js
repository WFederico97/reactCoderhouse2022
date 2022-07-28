import './App.css';

import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from './components/Box/Box';

function App() {


  console.log('app antesd el render')
  return (
    <Box>
          <Cards />
    </Box>

  );
}

export default App;

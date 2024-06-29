
import './App.css';
import Navbar from './components/Navbar';
import HomePageBanner from './components/HomePageBanner';
import CategoryWiseDisplay from './components/CategoryWiseDisplay';
import CustomisedDiet from './components/CustomisedDiet';
import Profile from './components/Profile';
import DetailsForm from './components/DetailsForm';

function App() {
  return (
    <>
      <Navbar/>
      <HomePageBanner/>
      <CategoryWiseDisplay/>
      <CustomisedDiet/>
      <Profile/>
      <DetailsForm/>
    </>
  );
}

export default App;

import NavBar from './components/NavBar';
import ProjectGrid from './components/ProjectGrid';
import SplitScreen from './components/SplitScreen';
import Footer from './components/Footer';

const App = () => {
  return (
  	<>
      <NavBar/>
      <SplitScreen/>
      <div className="bg-neutral-50 dark:bg-black py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-300 shadow-lg"></div>
        <ProjectGrid/>
      </div>
      <Footer/>
    </>
  );
};

export default App;

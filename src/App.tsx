import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Unique} from "./layout/section/unique/Unique";
import {About} from "./layout/section/about/About";
import {Artists} from "./layout/section/artists/Artists";
import {Subscribe} from "./layout/section/subscribe/Subscribe";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Unique/>
            <About/>
            <Artists/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;

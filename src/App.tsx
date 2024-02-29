import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/Main";
import {Unique} from "./layout/section/Unique";
import {About} from "./layout/section/About";
import {Artists} from "./layout/section/Artists";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Unique/>
            <About/>
            <Artists/>
        </div>
    );
}

export default App;

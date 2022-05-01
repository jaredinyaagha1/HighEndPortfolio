import Home from './Home/index.js';
import About from './About/index.js';
import Portfolio from './Portfolio/index.js';
// import Services from './Services/index.js';
import Contact from './Contact/index.js';

function View() {
    return (
        <div className="View">
            <Home />
            <About />
            <Portfolio />
            {/* <Services /> */}
            <Contact />
        </div>
    )
}

export default View;
import './index.css';
import Home from '../Home/index.js';
import About from '../About/index.js';
import Portfolio from '../Portfolio/index.js';
import Services from '../Services/index.js';
import Contact from '../Contact/index.js';
import Resume from '../Resume/index.js';


function Layout(props) {
    return (
        <div className="Layout">
            <Home />
            <About />
            <Portfolio />
            <Services />
            <Contact />
            <Resume />
        </div>
    )
}

export default Layout;
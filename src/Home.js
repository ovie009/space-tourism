import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main className="home">
            <section className="home-section">
                <div className="home-container">
                    <div className="home-text-wrapper">
                        <span className='subheading'>so, you want to travel to</span>
                        <h1 className="home-heading">
                            space
                        </h1>
                        <p className='home-paragraph'>
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className="explore-wrapper">
                        <Link className="explore" to="/destination/">
                            explore
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Home;
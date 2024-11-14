import Navbar from "../../components/navigation/Navbar";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="bg-gradient-to-tr from-blue-200 to-pink-200 h-screen">
            <Navbar />
            <div className="hero w-screen mt-80  flex flex-col justify-center items-center">
                <h1 className="text-4xl  leading-10 font-semibold">Simplifying Token Creation for the Digital Era</h1>
                <p className="  mt-6 text-lg"> Effortless Token Creation for Seamless Digital Management</p>

                <div className="buttons flex flex-row gap-4 justify-evenly mt-8">
                <button className="px-8 py-2 border border-solid rounded-2xl bg-white">
                <Link to="/login">Explore</Link>
                    
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Home;
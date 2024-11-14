import { Link } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Avatar from './../../assets/images/woman.png'
function AdminDashboard() {
    return (
        <>
            <Navbar />

            <div className="w-screen px-16 flex flex-col items-center ">
                <div className="w-96 h-auto mt-40 flex flex-row items-center justify-center gap-8 py-4  bg-teal-400 rounded-lg" >
                    <img className="w-24 " src={Avatar} alt="" />
                    <div>
                        <p className="capital text-sm">Welcome back,</p>
                        <h1 className="uppercase text-3xl font-semibold">Mitali M.</h1>
                    </div>
                </div>

                <div className="flex flex-col mt-12 gap-4">

                    <div className="w-96 flex flex-row items-center gap-8  p-4 justify-between  rounded-lg border border-gray-500">
                        <h1>Manage Tokens</h1>
                        <button className="px-8 py-2 border border-solid rounded-2xl bg-black text-white">
                        <Link to="/tokens">Link</Link>

                    
                    </button>
                    </div>
                   
                    <div className="w-96 flex flex-row items-center gap-8  p-4 justify-between  rounded-lg border border-gray-500">
                        <h1>Manage Users</h1>
                        <button className="px-8 py-2 border border-solid rounded-2xl bg-black text-white">
                        Link
                    
                    </button>
                    </div>


                </div>
            </div>


        </>
    );
}

export default AdminDashboard;
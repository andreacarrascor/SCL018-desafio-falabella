import { Link } from "react-router-dom";

const Profile = () => {
    return ( 
        <section className="profile flex flex-col justify-center items-center shadow-am h-563 w-939 mt-5 ml-5 mr-20">
            <h1 className="text-fp">Comienza a crear el perfil de tu persona favorita</h1>
            <Link to="/basicInformation">
                <button className="h-10 w-295 m-4 text-sl bg-og rounded-3xl">Crear Nuevo Perfil</button>
            </Link>
        </section>
    );
}

export default Profile;
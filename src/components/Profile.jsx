import { Link } from "react-router-dom";

const Profile = () => {
    return ( 
        <section className="profile flex flex-col justify-center items-center border border-black h-563 w-full mt-5 ml-5 mr-20">
            <h1>Comienza a crear el perfil de tu persona favorita</h1>
            <Link to="/basicInformation">Crear nuevo perfil</Link>
        </section>
    );
}

export default Profile;
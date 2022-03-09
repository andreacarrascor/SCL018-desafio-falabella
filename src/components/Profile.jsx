import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section className="profile flex flex-col justify-center items-center border border-black h-563 w-full mt-5 ml-5 mr-20">
      <h1>Comienza a crear el perfil de tu persona favorita</h1>
      <Link to="/basicInformation">
        <button
          className="h-10 px-5 m-2 
            text-slate-50 bg-og rounded-lg "
        >
          Crear Nuevo Perfil
        </button>
      </Link>
    </section>
  );
};

export default Profile;

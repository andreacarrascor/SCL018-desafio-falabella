import { useEffect, useState } from "react";
import db from "../FirebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import DeleteButton from "./secondary_components/DeleteButton";

const ProfileList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        onSnapshot(
            query(collection(db, "Users"), orderBy("date", "asc")),
            (snapshot) => {
                const profiles = snapshot.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                setUsers(profiles);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return users.length > 0 ? (
        <article className="flex flex-col w-939 h-439 ">
            <h1 className="text text-2xl ml-8 mb-7 text-bd">Mis personas favoritas</h1>
            <h2 className="text text-xl ml-8 mb-3 text-bd">
                Revisa los eventos que tienen:
            </h2>
            <div className="flex flex-row w-873 items-center mb-2 mx-auto">
                <input
                    type="checkbox"
                    name="controlled"
                    className="ml ml-3 mr-3 w-5 h-5 rounded-xs"
                ></input>
                <label className="text text-sm text-rg">Seleccionar todo</label>
            </div>
            {users.map((item) => (
                <section className="flex flex-row border border-bc rounded-xs w-873 h-20  mx-auto items-center mb-2">
                    <input
                        type="checkbox"
                        name="controlled"
                        className="ml ml-3 mr-3 w-5 h-5 rounded-xs"
                    ></input>
                    <div
                        key={item.id}
                        className="flex flex-row justify-between items-center w-810"
                    >
                        <div>
                            <p className="tex text-sm font-bold text-bd">{item.name}</p>
                            <p className="tex text-sm text-gd">{item.events}</p>
                        </div>
                        <DeleteButton
                            id={item.id} />
                    </div>
                </section>
            ))}
        </article>
    ) : (
        <h1 className="text-fp">
            Comienza a crear el perfil de tu persona favorita
        </h1>
    );
};

export default ProfileList;

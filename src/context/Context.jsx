import React, {useState} from 'react';
import {collection, addDoc } from "firebase/firestore";
import db from "../FirebaseConfig"

//Creamos contexto global
const Context = React.createContext();

//Componente proveedor de las propiedades 
const Provider = ({children}) => {

    //Estado global para capturar el nombre de la persona favorita
    const [favoritePerson, setFavoritePerson] = useState("");

    //Función para guardar el nuevo perfil en la base de datos
    const newProfile = async () =>{
        try{
            await addDoc(collection(db, "Users"),
            {
                name: favoritePerson,

            });
        } catch(error){
            throw new Error("Error al guardar el nuevo perfil");
        }
    }


    const props = {
        favoritePerson,
        setFavoritePerson,
        newProfile
    };

    return <Context.Provider value={props}>{children}</Context.Provider>
}
 
export {Context, Provider};
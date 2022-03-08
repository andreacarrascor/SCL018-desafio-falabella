import React from 'react';

//Creamos contexto global
const Context = React.createContext();

//Componente proveedor de las propiedades 
const Provider = ({children}) => {



    return <Context.Provider value={"hola"}>{children}</Context.Provider>
}
 
export {Context, Provider};
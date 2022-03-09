//import personal_info from '../img/aside_icons/personal_info.png'

const AsideMenu = () => {
    return (
        <nav className="aside shadow-am flex flex-col justify-between rounded h-563 w-321 ml-20 mt-5 mb-28">
            <button className="shadow-am w-321 h-14 font-semibold">
                {/* <img src={personal_info} width="13" height="16" alt="geofinder" /> */}
                Mis datos personales
            </button>
            <button className="shadow-am w-321 h-14">Mis compras</button>
            <button className="shadow-am w-321 h-14">Mis direcciones</button>
            <button className="shadow-am w-321 h-14">Mis medios de pago</button>
            <button className="shadow-am w-321 h-14 font-semibold">Mis personas favoritas</button>
            <button className="shadow-am w-321 h-14">Mi CMR</button>
            <button className="shadow-am w-321 h-14">Mis Gift card</button>
            <button className="shadow-am w-321 h-14">Cambiar mi contraseña</button>
            <button className="shadow-am w-321 h-14">Cerrar sesión</button>
        </nav>
    );
}

export default AsideMenu;
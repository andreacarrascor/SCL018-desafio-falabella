import bg_logo from '../../img/bg_logo.png'
import logo_f from '../../img/logo_f.png'
import logo_searcher from '../../img/logo_searcher.png'

const HeaderPrimary = () => {
    return (
        <header className="flex items-center header h-70 xl bg-header">
            <figure className='absolute'>
                <img src={bg_logo} width="243" height="70" alt="background logo" />
            </figure>
            <figure className='absolute top-5 left-8'>
                <img src={logo_f} width="191" height="30" alt="logo f.com" />
            </figure>
            <div className='flex flex-row border border-black'>
                <input
                    type='search'
                    className='rounded-sr w-608 h-46 my-3 ml-419 mr-413'
                    placeholder='¿Qué buscas?'
                />
                <button className='bg-search '>
                    <img src={logo_searcher} width="23.75" height="23" alt="logo searcher" />
                </button>
            </div>
        </header>
    );
}

export default HeaderPrimary;
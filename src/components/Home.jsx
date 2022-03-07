import MyFavoritePeople from "./MyFavoritePeople";
import Profile from "./Profile";

const Home = () => {
    return ( 
        <>
        <header className="border border-black h-16 xl:w-full"></header>
        <nav className="border border-black h-12 xl:w-full"></nav>
        <section className="border border-black h-24 mx-20 mt-6"></section>
        <main className="flex flex-row">
            <MyFavoritePeople/>
            <Profile/>
        </main>
        

        </>
    );
}

export default Home;
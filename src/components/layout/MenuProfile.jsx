import profile_icon from '../../img/profile_icon.png'
import profile_info from '../../img/profile_info.png'
import Vector from '../../img/Vector.png';

const MenuProfile = () => {
    return ( 
        <section className="welcome shadow-mp flex items-center h-24 ml-20 mr-20 mt-23">
            <div className='ml-16 mr-5'>
                <img src={profile_icon} width="59" height="59" alt="client icon" />
            </div>
            <div>
                <img src={profile_info} width="231" height="57" alt="client info" />
            </div>
        </section>
    );
}
 
export default MenuProfile;
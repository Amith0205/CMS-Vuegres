import Navibar from '../Navibar/navibar';
import {Outlet} from 'react-router-dom'

function Layout() { 
    return (
        <div>
            <Navibar/>
            <Outlet/>
        </div>
    );
}
export default Layout;

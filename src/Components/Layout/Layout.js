import Navibar from '../Navibar/navibar';
// import Footer from '../Footer/footer.js'
import { Outlet } from 'react-router-dom'

function Layout() {
    // club header and navbar
    return (
        <div>
            {/* <Header /> */}
            <Navibar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}
export default Layout;
import Navbar from "./Navbar";

const Layout = ({href, children}) => {
    return ( 
        <div>
            <Navbar />
            { children }
        </div>
     );
}
 
export default Layout;
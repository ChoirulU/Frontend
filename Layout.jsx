import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return ( 
        <>
            <Navbar />
            <Sidebar>
                {children}
                <h1> HELLO GUYS </h1>
            </Sidebar>
        </>
     );
}

export default Layout;
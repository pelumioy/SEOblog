import Header from "./Header";

function Layout({children}) {
    return (
        <div>
            <Header />
             {children}
            <p>Footer</p>
            
        </div>
    );
}

export default Layout;
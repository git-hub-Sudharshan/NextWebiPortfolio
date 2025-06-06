import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';



const MainLayout = () => (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);

export default MainLayout;

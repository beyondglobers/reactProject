import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
// import Nav from '../nav';

const Layout = ({ children }) => {

    return (

        <React.Fragment>

            <div class="justify-content-center">
                <div>
                    <Header />
                </div>
                {/* <div>
                    <Nav />
                </div> */}
                <div >
                    <main>{children}</main>
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        </React.Fragment>
    );

};

export default Layout;
import React from 'react';
import './Header.css'
import WhiteNav from '../../CommonComponent/WhiteNav/WhiteNav';
import { useHistory } from 'react-router';
const Header = () => {
    const history = useHistory()
    const handleClasses = ()=> {
        history.push('ourClasses')
    }
    return (
        <>
       <main className="main-bg">
           <div className="sub-header">
           <div className="justify-items-center text-white">
            <div className="container">
            <WhiteNav/>
            </div>
            <div className="container row top-margin margin-auto">
                <div className="col-md-6 col-sm-6 col-6">
                    <p className="h1 text-left">THE BEST FITNESS <br/>STDIO IN TOWN</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, in! Necessitatibus, cumque excepturi ullam vero veniam odio animi recusandae nobis quas sunt ut esse quo earum dolorem quam iusto quasi!
                    </p>
                    <br/><br/>
                    <button className="btn-gym btn-warning" onClick={handleClasses}>JOIN US</button>
                    {/* <button className="btn btn-warning">JOIN US</button> */}
                </div>
                <div className="col-md-6 col-sm-6 col-6">
                    
                </div>
            </div>
        </div>
           </div>
           <br/><br/><br/><br/><br/><br/>
       </main>

       </>
    );
};

export default Header;
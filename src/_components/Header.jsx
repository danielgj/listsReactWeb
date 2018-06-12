import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    
    render() {
        
        const displayHeader = this.props.displayHeader;
        
        if(displayHeader) {
            return (
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                      <a className="navbar-brand" href="/">Shopping List</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item active">
                            <Link to="/" className="nav-link">Listas</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/login" className="nav-link">Logout</Link>
                          </li>                      
                        </ul>
                      </div>                          
                    </nav>                
                                    
                </header>
                
                                
            )    
        } else {
            return(<div></div>);
        }
        
    }
}
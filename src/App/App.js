import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { Header, PrivateRoute } from '../_components';
import { Lists } from '../Lists';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    this.state = { isOpen: false };
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
        const { alert } = this.props;
        
        const displayHeader = history.location.pathname !== '/login' && history.location.pathname !== '/register';
        
        return (
            
            <Router history={history}>
              
              <div>
                
                <Header displayHeader={displayHeader}/>

                <div className="container">
                   <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            {alert.message &&
                                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                            }
                        </div>
                    </div>
                    <div>                         
                        <PrivateRoute exact path="/" component={Lists} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />                    
                    </div>                                                            
                    
                </div>
            
              </div>
              
            </Router>
            
            
                        
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
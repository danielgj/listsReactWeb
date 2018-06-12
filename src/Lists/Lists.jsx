import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { listActions, alertActions } from '../_actions';

import { ListItem } from '../_components';


class Lists extends React.Component {
    
    constructor(props) {
        
        super(props);

        this.state = {
            name: '',
            description: '',
            submitted: false        
        }
        
        const { dispatch } = this.props;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    componentDidMount() {
        this.props.dispatch(alertActions.clear());
        this.props.dispatch(listActions.getAll());
    }
    
    /*
    componentDidUpdate() {
        const { lists } = this.props;
        
        if(lists.tokenExpired) {
            this.props.dispatch(listActions.navigateToLogin());    
        }        
    }
    */

    

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        
        e.preventDefault();

        this.setState({ submitted: true });
        const { name, description } = this.state;
        const { dispatch } = this.props;
        
        if (name && description) {
            dispatch(listActions.createList(name, description));
        }
        
    }
    
    render() {
        const { creating, user, lists } = this.props;
        const { name, description, submitted } = this.state;
        
        
        return (
            
            <div>
                <div className="row">

                    <div className="col-md-8 col-md-offset-2">
                        <h2>¡Hola {user.username}!</h2>
                        <br/>
                        {lists.loading && <em>Cargando listas...</em>}
                        {lists.error && <span className="text-danger">{lists.error.message}</span>}                    
                    </div>

                </div>
                
                {lists.lists && lists.lists.length !== 0  &&
                <div className="row">            
                    {lists.lists.map((item, index) =>
                        <ListItem item={item} key={item._id}/>
                    )}
                </div>
                        
                }
                {lists.lists && lists.lists.length === 0 &&
                        <p>
                            No tienes ninguna lista
                        </p>
                }
                
                {!lists.error && !lists.tokenExpired &&
                
                <div className="row">
                   <br/>
                    
                    <div className="col-md-6">
                        <h3>Nueva Lista</h3>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                                <label htmlFor="name">Nombre</label>
                                <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                                {submitted && !name &&
                                    <div className="help-block">El nombre de la lista es obligatorio</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !description ? ' has-error' : '')}>
                                <label htmlFor="description">Descripción</label>
                                <input type="description" className="form-control" name="description" value={description} onChange={this.handleChange} />
                                {submitted && !description &&
                                    <div className="help-block">La descripción de la lista es obligatoria</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Crear</button>
                                {creating &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </div>
                        </form>
                    </div>
                </div>
                }
                
            </div>
            
        );
        
    }
}

function mapStateToProps(state) {
    const { creating, users, lists } = state;
    const { user } = users;
    return {
        creating,
        user,
        lists
    };
}

const connectedListsPage = connect(mapStateToProps)(Lists);
export { connectedListsPage as Lists };
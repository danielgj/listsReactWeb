import React from 'react';

import trashIcon from '../img/trash.png';


export class ListItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.deleteList = this.deleteList.bind(this);
    }
    
    deleteList(id) {
        alert('Borro la lista ' + this.props.item._id);
    }
    
    render() {
        
        const list = this.props.item;
        
        return(
            <div className="col-md-6">
               <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                        {list.name}
                        <img src={trashIcon} onClick={this.deleteList} className="actionIcon" alt="Eliminar"/>      
                    </h5>
                    
                    <p className="card-text font-italic">{list.description}</p>
                    
                    
                    {list.items && list.items.length !== 0  &&
                          
                        
                        <div className="inbox">         
                            {list.items.map((item, index) =>
                                <div className="item" key={item._id}>
                                    <input type="checkbox" /> 
                                    <p className="itemDescr">{item.description}</p>
                                </div>
                            )}
                        </div>
                        
                    }
                    {list.items && list.items.length === 0 &&
                        <p>
                            Sin elementos
                        </p>
                    }
                  </div>
                </div>                
            </div>    
        
        )
    }
}
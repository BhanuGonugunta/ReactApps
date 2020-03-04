import React,{Component} from 'react';
class Data extends Component
{
    render()
    {
        return( 
            <div>
                <h2>{this.props.role}:{this.props.name}</h2>
            </div>  
        )
    }
}

export default Data;
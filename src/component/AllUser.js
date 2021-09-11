import React, { Component } from 'react';
import data from './data.json'
import User2 from './User2';

class AllUser extends Component {
    render() {
        
        return (
            
                data.map((value, key) => (
                    <User2 key={key} id={value.id} name={value.name} phone={value.phone} position={value.position}></User2>
                ))
            
        );
    }
}

export default AllUser;
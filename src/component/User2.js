import React, { Component } from 'react';

class User2 extends Component {
    render() {
        return (
                <tr>
                            <td>{this.props.id}</td>
                            <td>{this.props.name}</td>
                            <td>{this.props.phone}</td>
                            <td>{this.props.position}</td>
                            <td>
                            <div className="btn-group">
                                <button type="button" className="btn btn-warning">Sửa</button>
                                <button type="button" className="btn btn-info">Xoá</button>
                            </div>
                            </td>
                        </tr>
        );
    }
}

export default User2;
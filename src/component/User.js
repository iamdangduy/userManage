import React, { Component } from 'react';
import AllUser from './AllUser';

class User extends Component {
    render() {
        return (
            <div className="row">
                <table className="table table-striped table-inverse">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên </th>
                        <th>Điện thoại</th>
                        <th>Quyền </th>
                        <th>Thao tác </th>
                    </tr>
                    </thead>
                    <tbody>
                        <AllUser></AllUser>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default User;
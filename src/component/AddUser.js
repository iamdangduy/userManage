import React, { Component } from 'react';

class AddUser extends Component {
    
    displayButton = () => {
        if(this.props.globalState === true) {
            return (
                <div className="card text-center">
                    <button type="button" className="btn btn-outline-info" onClick={() => this.props.ketNoi()}>Đóng lại</button>
                    <div className="card-header mt-3">
                        Thêm mới User
                    </div>
                    <div className="card-body">
                        <input type="text" className="form-control" placeholder="Tên User" />
                        <input type="text" className="form-control mt-3" placeholder="Điện thoại" />
                        <div className="input-group mb-3 mt-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Quyền</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option value={1}>Admin</option>
                            <option value={2}>User</option>
                            <option value={3}>Mod</option>
                        </select>
                            </div>
                        </div>
                    <button type="button" className="btn btn-outline-secondary">Thêm User</button>
                </div>
            ) 
        }
        else {
            return (
                <button type="button" className="btn btn-outline-dark" onClick={() => this.props.ketNoi()}>Thêm mới User</button>
            )
        }
    }

    // changeButtonAdd = () => {
    //     this.setState({trangThai : false});
    // }

    // changeButtonRemove = () => {
    //     this.setState({trangThai : true});
    // }

    render() {
        return (
            <div className="card text-center">
                {this.displayButton()}
            </div>
        );
    }
}

export default AddUser;
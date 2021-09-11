import React, { Component } from 'react';

class SearchForm extends Component {

    buttonSearch = () => {
        console.log('dữ liệu cha nhận được là: ' + this.props.inforSearch);
    }

    render() {

        return (
            <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                            <div className="btn-group">
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="nhập để tìm kiếm" onChange={this.props.getSearch}/>
                                </div>
                                <button type="button" className="btn btn-dark" onClick={() => this.buttonSearch()}>Search</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <hr/>
                    </div>
                </div>
        );
    }
}

export default SearchForm;
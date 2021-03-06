import React, { Component } from 'react';

class SearchBar extends Component {
    
    state = {term: ''}

     onFormSubmit=(e)=>{
        e.preventDefault();

        console.log(this.state.term);

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" 
                            value={this.state.term} 
                            onChange={(e)=> this.setState({term: e.target.value.toLocaleUpperCase()})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
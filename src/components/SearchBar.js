import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = { term: '' };

    onFormSubmit = (event) => {
        // Prevents form from submitting by itself
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    // onInputClick() {
    //     console.log('Input was clicked');
    // }
    render() {
    return (
      <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
                <label>Image Search</label>
                <input type="text" value={this.state.term} onChange={(e) => this.setState({ term : e.target.value })}/>
            </div>
          </form>
      </div>
    )
  }
}

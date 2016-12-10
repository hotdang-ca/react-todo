var React = require('react');

var TodoSearch = React.createClass({

    getDefaultProps: function() {
        return {
            onSearch: function() {}
        }
    },

    propTypes: {
        onSearch: React.PropTypes.func.isRequired,

    },
    
    onSearchChanged: function() {
        var { showCompleted, searchField } = this.refs;
        
        var isShowCompletedChecked = showCompleted.checked;
        var searchText = searchField.value;

        this.props.onSearch(isShowCompletedChecked, searchText);
    },

    render: function() {
        return (
            <div>
                <div>
                    <input type="search" ref="searchField" placeholder="Search" onChange={this.onSearchChanged}/>
                </div>
                <div>
                <label>
                    <input type="checkbox" ref="showCompleted" onChange={this.onSearchChanged} />
                    Show Completed Todos
                </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;
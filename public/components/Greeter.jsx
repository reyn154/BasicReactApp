var React = require('react');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'Hey there!'
        };
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    handleNewName: function(updates) {
        this.setState({
            name: updates.name,
            message: updates.message
        });
    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
				<h1>Hello {name}!</h1>
				<p>{message}!</p>
				<GreeterForm onNewName={this.handleNewName}/>
			</div>
        );
    }
});

module.exports = Greeter;

var React = require('react');

var GreeterForm = React.createClass({
    onButtonClick: function(e) {
        e.preventDefault();
        var updates = {};
        updates.name = this.refs.name.value;
        updates.message = this.refs.message.value;

        this.props.onNewName(updates);
    },
    render: function() {
        return (
            <form onSubmit={this.onButtonClick}>
				<input type="text" ref="name"/>
				<textarea ref="message"></textarea>
				<button>Submit</button>
			</form>
        );
    }
});

module.exports = GreeterForm;

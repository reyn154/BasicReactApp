var GreeterForm = React.createClass({
    onButtonClick: function(e) {
        e.preventDefault();
        var name = this.refs.name.value;

        this.props.onNewName(name);
    },
    render: function() {
        return (
            <form onSubmit={this.onButtonClick}>
				<input type="text" ref="name"/>
				<button>Set Name</button>
			</form>
        );
    }
});

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React'
        };
    },
    getInitialState: function() {
        return {
            name: this.props.name
        }
    },
    handleNewName: function(name) {
        this.setState({
            name: name
        });
    },
    render: function() {
        var name = this.state.name;

        return (
            <div>
				<h1>Hello {name}!</h1>

				<GreeterForm onNewName={this.handleNewName}/>
			</div>
        );
    }
});


ReactDOM.render(
    <Greeter name="Beebo"/>,
    document.getElementById('app')
);
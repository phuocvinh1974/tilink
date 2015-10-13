var AppDemo = React.createClass({
	render: function  () {
		return(

			<div>
				<A msg='hello' /> 
				<B />
			</div>
		);
	}
});

var A = React.createClass({
	
	onClick: function (e) {
		e.target.style.backgroundColor = '#ffff00'
		e.target.innerHTML = 'day la components A'
	},
	render: function () {
		return (

			<div id = 'A' onClick = {this.onClick} >A components</div>
		);
	}
});

var B = React.createClass({
	render: function () {
		return (

			<div>
				<D />
			</div>
		);
	}
});

var C = React.createClass({

	onClick: function (e) {
		e.target.innerHTML = 'day la components C'
		e.target.style.backgroundColor = '#ff00ff'
	},
	render: function () {
		return (

			<div onClick={this.onClick}>C components</div>

		);
	}
});
var PlanFinderControlBox = React.createClass({
	render: function () {
		return (
			<div>
				<div><input type="text" placeholder="TÊN SHIPMENT" /></div>
				<div>OR</div>
				<div><input type="text" placeholder="TỪ NGÀY" /></div>
				<div><input type="text" placeholder="ĐẾN NGÀY" /></div>
				<button onClick={this.onClick}>SEARCH</button>
			</div>
		);
	}
});
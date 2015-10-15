var PlanFinderControlBox = React.createClass({

	
		
	render: function () {
		return (
			<div>
				<div><input type="text" value={this.value} placeholder="TÊN SHIPMENT" /></div>
				<div>OR</div>
				<div><input type="text" value={this.value} placeholder="TỪ NGÀY" /></div>
				<div><input type="text" value={this.value} placeholder="ĐẾN NGÀY" /></div>
				<button onClick={this.onClick}>SEARCH</button>
			</div>
		);
	}
});
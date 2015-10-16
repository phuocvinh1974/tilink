var PlanFinderControlBox = React.createClass({

	
		
	render: function () {
		return (
			<div>
				<div style={{marginTop:2}}><input type="text" value={this.value} placeholder="TÊN SHIPMENT" /></div>
				<div style={{marginTop:2}}>OR</div>
				<div style={{marginTop:2}}><input type="text" value={this.value} placeholder="TỪ NGÀY" /></div>
				<div style={{marginTop:2}}><input type="text" value={this.value} placeholder="ĐẾN NGÀY" /></div>
				<button onClick={this.onClick} style={{marginTop:2}}>SEARCH</button>
			</div>
		);
	}
});
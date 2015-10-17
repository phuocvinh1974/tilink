var PlanQuickAddControlBox = React.createClass({
	render: function () {
		return (
			<div style={{marginTop:24}}>
				<div style={{marginTop:2}}>ADD NEW PLAN</div>
				<div style={{marginTop:2}}><input type="text" placeholder="TÊN SHIPMENT" /></div>
				<div style={{marginTop:2}}><input type="text" placeholder="NGÀY KHAI HQ" /></div>
				<div style={{marginTop:2}}><input type="text" placeholder="NGÀY RỜI CTY" /></div>
				<div style={{marginTop:2}}><input type="text" placeholder="XUẤT QUA" /></div>
				<div style={{marginTop:2}}><input type="text" placeholder="NƠI ĐẾN" /></div>
				<button onClick={this.onClick} style={{marginTop:2}}>ADD</button>
			</div>
		);
	}
});
var PlanQuickAddControlBox = React.createClass({
	render: function () {
		return (
			<div>
				<div>ADD NEW PLAN</div>
				<div><input type="text" placeholder="TÊN SHIPMENT" /></div>
				<div><input type="text" placeholder="NGÀY KHAI HQ" /></div>
				<div><input type="text" placeholder="NGÀY RỜI CTY" /></div>
				<div><input type="text" placeholder="ĐI QUA" /></div>
				<div><input type="text" placeholder="NƠI ĐẾN" /></div>
				<button onClick={this.onClick}>ADD</button>
			</div>
		);
	}
});
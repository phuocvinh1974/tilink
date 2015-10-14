var Sidebar = React.createClass({
	render: function () {
		return (
			<div>
				<div>KẾ HOẠCH XUẤT HÀNG</div>
				<PlanFinderControlBox />
				<PlanQuickAddControlBox />
			</div>
		);
	}
});
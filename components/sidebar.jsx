var Sidebar = React.createClass({

	
	render: function () {
		return (
			<div className="sidebar">
				<PlanFinderControlBox />
				<PlanQuickAddControlBox />
			</div>
		);
	}
});
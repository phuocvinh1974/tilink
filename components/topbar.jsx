var TopBar = React.createClass({
	render: function () {
		return (
				<div className="flex flex-H-space-between flex-V-center topBar" style={{fontSize:'18pt !important',color:'#FFF',backgroundColor:'#3a5795'}}>
					<TopBarLeft />
					<TopBarRight />
				</div>
		);
	}
});
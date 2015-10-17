var TopBarRight = React.createClass({
	render: function () {
		return (
			<div className="flex" style={{fontSize:'15pt !important',color:'#FFF',backgroundColor:'#3a5795'}}>
				<div><a href="index.php" className="topBar-right">HOME</a></div>
				<div className="topBar-right">MENU</div>
				<div><a href="index.php" className="topBar-right">LOGOUT</a></div>
			</div>
		);
	}
});
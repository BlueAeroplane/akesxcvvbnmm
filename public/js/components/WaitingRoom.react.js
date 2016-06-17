var React = require('react');

var WaitingRoom = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Please wait</div>
        <div className="panel-body">
          <p>The next available person will be matched with you.</p>
          <p>If you are sad and want to talk to your self open up another tab.</p>
        </div>
      </div>
    )
  }

});

module.exports = WaitingRoom;

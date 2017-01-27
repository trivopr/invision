import React from 'react';
import ReactDOM, {render} from 'react-dom';

class ControlDisplay extends React.Component {
    handleViewGrid(e) {
        e.preventDefault();
        this.props.handleShowGrid();
    }

    handleViewBlock(e) {
        e.preventDefault();
        this.props.handleShowBlock();
    }


	render() {
		return (
            <div className="alphabet-filter__show">
                <ul>
                    <li onClick={this.handleViewGrid.bind(this)}><span className="glyphicon glyphicon-th-large"></span></li>
                    <li onClick={this.handleViewBlock.bind(this)}><span className="glyphicon glyphicon-list"></span></li>
                </ul>
            </div>			
		);
	}
}

export default ControlDisplay;
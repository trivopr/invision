import React from 'react';
import ReactDOM, {render} from 'react-dom';


class GridView extends React.Component {

	render() {

		let isOpenActive = {
			display: this.props.singleItem.isOpening ? 'is-opening' : ''
		}

		return (
		    <div className="grid-result-item">
		        <div className="grid-result-item__logo">
		            <img src={this.props.singleItem.logo} alt="" />
		        </div>
		        <div className="block-list">
		            <ul>
                        <li className = {isOpenActive.display}>
                            <span className="glyphicon glyphicon-time"></span>{this.props.singleItem.opening}
                        </li>
		                <li>
		                    <span className="glyphicon glyphicon-flash"></span>{this.props.singleItem.description1}
		                </li>
		                <li>
		                    <span className="glyphicon glyphicon-tag"></span>{this.props.singleItem.description2}
		                </li>
		                <li>
		                    <span className="glyphicon glyphicon-fire"></span>{this.props.singleItem.description3}
		                </li>		                		                
		                <li>
		                    <span className="glyphicon glyphicon-flash"></span>{this.props.singleItem.description4}
		                </li>		                
		            </ul>
		        </div>
		    </div>
		)
	}
}

export default GridView;
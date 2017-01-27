import React from 'react';
import ReactDOM, {render} from 'react-dom';

class TableView extends React.Component {
	render() {

    	let isOpenActive = {
    		display: this.props.singleItem.isOpening ? 'is-opening' : ''
    	}

		return (
                <tr className="result-item">
                    <td className="result-item__logo">
                        <img src={this.props.singleItem.logo} alt="" />
                    </td>
                    <td className="result-item__name">{this.props.singleItem.companyName}</td>
                    <td className="result-item__detail">
                        <div className="block-list">
                            <ul>
                                <li>
                                    <span className="glyphicon glyphicon-tag"></span>{this.props.singleItem.description1}
                                </li>
                                <li>
                                    <span className="glyphicon glyphicon-fire"></span>{this.props.singleItem.description2}
                                </li>
                                <li>
                                    <span className="glyphicon glyphicon-tag"></span>{this.props.singleItem.description3}
                                </li>
                                <li>
                                    <span className="glyphicon glyphicon-fire"></span>{this.props.singleItem.description4}
                                </li>
                            </ul>
                        </div>                                    
                    </td>
                    <td className="result-item__open">
                        <div className="block-list">
                            <ul>
                                <li className= {isOpenActive.display}>
                                    <span className="glyphicon glyphicon-time"></span>{this.props.singleItem.opening}
                                </li>
                            </ul>
                        </div>
                    </td>
                    <td className="result-item__btn">
                        <span className="button-normal">
                            Store detail
                            <span className="glyphicon glyphicon-menu-right"></span>
                        </span>
                    </td>
                </tr> 
		)
	}
}

export default TableView;
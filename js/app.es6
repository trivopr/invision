import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {bootstrap} from 'bootstrap-sass';
import _ from 'lodash';
import TableView from './tableView';
import GridView from './gridView';
import ControlDisplay from './ControlDisplay';

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('../css/app.scss');

class MainSearchResult extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: 'Invision',
			isGrid: true,
			isBlock: true,
			listResultItems: [],
		}

		this.controlGridView = this.controlGridView.bind(this);
		this.controlBlockView = this.controlBlockView.bind(this);
	}	

	componentDidMount() {
		this.request = $.get('data.json', function(result) {
			var tmpApt = result;
			this.setState({
				listResultItems: tmpApt
			});
		}.bind(this));
	}

	controlGridView () {
		this.setState({
			isGrid: true,
			isBlock: false			
		});
	}

	controlBlockView() {
		this.setState({
			isGrid: false,
			isBlock: true			
		});
	}

	render() {

		let listResult = this.state.listResultItems;

		let listResultBlock =  listResult.map((item, index) => {
				return (
						<TableView 	key={index}
									singleItem= {item} />
						);
		});	

		let listResultGrid =  listResult.map((item, index) => {
				return (
						<GridView 	key={index}
									singleItem= {item} />
						);
		});	

		let gridActive = {
			display: this.state.isGrid ? 'block' : 'none'
		};

		let blockActive = {
			display: this.state.isBlock ? 'block' : 'none'
		};		

		return (
		    <section className="wrapper">
		        <div className="wrapper--tab-content">           
		            <div className="container-fluid">
		                <div className="alphabet-filter">
		                    <div className="alphabet-filter__text">
		                        <span className="character">A</span>
		                        <span className="character">B</span>
		                        <span className="character">C</span>
		                        <span className="character">D</span>
		                        <span className="character">E</span>
		                        <span className="character">F</span>
		                        <span className="character">G</span>
		                        <span className="character">H</span>
		                        <span className="character">I</span>
		                        <span className="character">J</span>
		                        <span className="character">K</span>
		                        <span className="character">L</span>
		                        <span className="character">M</span>
		                        <span className="character">N</span>
		                        <span className="character">O</span>
		                        <span className="character">P</span>
		                        <span className="character">Q</span>
		                        <span className="character">R</span>
		                        <span className="character">S</span>
		                        <span className="character">T</span>
		                        <span className="character">U</span>
		                        <span className="character">V</span>
		                        <span className="character">W</span>
		                        <span className="character">X</span>
		                        <span className="character">Y</span>
		                        <span className="character">Z</span>
		                    </div>

		                    <ControlDisplay 
		                    	handleShowGrid = {this.controlGridView} 
		                    	handleShowBlock = {this.controlBlockView} />
		                </div>


		                <div className="result-list">

				            <div className="show-block table-responsive" style={blockActive}>
				                <table className="table">
				                    <tbody>
                                		{listResultBlock}
				                    </tbody>
				                </table>
				            </div>

				            <div className="show-grid" style={gridActive}>
								<div className="wrapper-grid">                   
									{listResultGrid}
								</div>
							</div>					
		                </div>

		                <div className="load-more">
		                    <p><span className="glyphicon glyphicon-option-horizontal"></span></p>
		                    <div className="circle-loadmore">
		                        Show More
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		)
	}
}

render(<MainSearchResult />, document.getElementById('root'));

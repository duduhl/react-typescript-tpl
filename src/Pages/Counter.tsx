import * as React from 'react';
import { connect } from "react-redux";
import * as actions from '../actions/index';
import { Store } from "../types";

interface IProps {
	num: number;
	add: any;
	subtract: any;
	addAsync: any;
}

interface IState {
	num: number;
}

class CounterComponent extends React.Component<IProps> {
	render() {
		let { num, add, subtract, addAsync } = this.props
		return (
			<div>
				<p>{num}</p>
				<button onClick={() => {
					add();
				}}>+</button>
				<button onClick={() => {
					subtract();
				}}>-</button>
				<button onClick={() => {
					addAsync();
				}}>addAsync</button>
			</div>
		)
	}
}

let mapStateToProps = function (state: Store) {
	return state
}

export default connect(mapStateToProps, {
	...actions,
})(CounterComponent);
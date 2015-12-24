import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import {Link} from 'react-router';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <main>
        <h1 className={styles.text}>Welcome {title}!</h1>
        <button onClick={e => actions.changeTitle(prompt())}>
          Update Title
        </button>

        <dev>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/parent">parent</Link></li>
            <li><Link to="/parent/child">child</Link></li>
            <li><Link to="/parent/child/1">child 1</Link></li>
            <li><Link to="/parent/child/2">child 2</Link></li>
            <li><Link to="/parent/child/3">child 3</Link></li>
          </ul>
        </dev>

        {this.props.children}
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)

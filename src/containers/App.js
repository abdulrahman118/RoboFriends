import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CradList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchField.toLowerCase()));


        return isPending ?
            <h1>Loading. . .</h1> :
            (
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    <SearchBox onSearchChange={onSearchChange} />
                    <Scroll >
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React,{Component} from 'react';
import CardList from '../components/CradList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component{
    constructor() {
        super();
        this.state = {
            robots : [],
            searchField : ''
        };        
    }

    componentDidMount(){        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState(state => state.robots = json));
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
    }

    render(){        

       const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => 
            robot.name.toLowerCase().includes(searchField.toLowerCase()));
            

        return !robots.length ? 
        <h1>Loading. . .</h1> :
        (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Scroll >
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }

}

export default App;
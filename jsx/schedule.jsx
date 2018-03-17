import React from 'react';
import {render} from 'react-dom';

function searchColumns(row, target){
    for (let key in row) {
        if (key !== 'gid') {
            let index = row[key].toString().trim().toLowerCase().indexOf(target.trim().toLowerCase());
            if (index > -1) {
                return true;
            }
        }
    }
    return false;
}

class TableRow extends React.Component{
    render () {
        return (
            <tr>
                <td>{this.props.game.wk}</td>
                <td>{this.props.game.date.split(' ')[0]}</td>
                <td>{this.props.game.day}</td>
                <td>{this.props.game.date.split(' ')[1]}</td>
                <td>{this.props.game.h}</td>
                <td>{this.props.game.v}</td>
                <td>{this.props.game.stad}</td>
                <td>{this.props.game.surf}</td>
            </tr>
        )
    }
}

class NFLTable extends React.Component{
    render () {
        let games = [];
        this.props.schedule.map((game) => {
            if (this.props.searchText.trim()){
                let showColumn = searchColumns(game, this.props.searchText);
                if (showColumn){
                    games.push(<TableRow game={game} key={game.gid}/>)
                }
            } else {
                games.push(<TableRow game={game} key={game.gid}/>)
            }
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Week</th>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Home</th>
                    <th>Away</th>
                    <th>Stadium</th>
                    <th>Surface</th>
                </tr>
                </thead>
                <tbody>{games}</tbody>
            </table>
        )
    }
}

class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleTextInput = this.handleTextInput.bind(this);
    }
    handleTextInput() {
        this.props.handleTextInput(this.searchTextInput.value);
    }
    render () {
        return (
            <form>
                <input type="text"
                         placeholder="Search..."
                         value={this.props.searchText}
                         ref={(input) => this.searchTextInput = input}
                         onChange={this.handleTextInput}/>
            </form>
        )
    }
}

class Root extends React.Component{
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            searchText: ''
        }
    }
    handleSearch (input) {
        if (input.trim()){
            this.setState({
                searchText: input
            });
        }
    }
    render () {
        return (
            <div>
                <Search handleTextInput={this.handleSearch}/>
                <NFLTable schedule={this.props.data} searchText={this.state.searchText}/>
            </div>
        )
    }
}

render(<Root data={data}/>, document.getElementById('root'));
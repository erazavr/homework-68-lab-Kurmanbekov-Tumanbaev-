import React, {Component} from 'react';
import './App.css'
import AddForm from "./component/AddForm/AddForm";
import WatchList from "./component/WatchList/WatchList";
import {connect} from "react-redux";
import {add, fetchTodo, remove, todoDelete, todoPost} from "./component/store/actions";
class App extends Component {
    state = {
        task: '',
    };
    changeName = event => {
        this.setState({task: event.target.value})
    };
    componentDidMount() {
        this.props.fetchTodo()
    }
    addPost = (e) => {
        e.preventDefault();
        this.props.todoPost({task: this.state.task})
        this.setState({task: ''})
    };
    deletePost = (id) => {
        this.props.todoDelete(id)
    };
    render() {
        return (

            <div className='App'>
              <AddForm
                  onChange={this.changeName}
                  name={this.state.task}
                  onClick={this.addPost}
              />
                {this.props.tasks &&
                Object.keys(this.props.tasks).map(task => (
                    <WatchList
                        key={task}
                        name={this.props.tasks[task].task}
                        remove={()=>this.deletePost(task)}
                    />
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        task: state.task,
        id: state.id,
        tasks: state.tasks,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        add: ()=> dispatch(add()),
        remove: () => dispatch(remove()),
        fetchTodo: () => dispatch(fetchTodo()),
        todoPost: (data) => dispatch(todoPost(data)),
        todoDelete: (id) => dispatch(todoDelete(id))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
import React, { createContext, Component } from 'react';
import uid from 'uid'

const { Consumer, Provider } = createContext({
  dragId: null,
  tasks: [],
  boards: [],
  set() {},
  remove() {},
  findBoard() {},
  changeBoard() {},
  dragStart() {},
  update() {}
});

export class TaskProvider extends Component {
  state = {
    tasks: [],
    dragId: null,
    boards: ["Todo", "In Progress", "Done"]
  };

  findBoard = (index) => this.state.tasks.filter((item) => ( item.index === index ))

  changeBoard = (id, index) => this.setState(prevState =>({
    tasks: prevState.tasks.map((item) => (
      ( item.id === id  && Math.max(item.index, index) - Math.min(item.index, index) <= 1)  ? {...item, index} : item)
    ),
    dragId: null
  }) )

  set = (value, index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat([ {
        name: value || `task${ this.state.tasks.length + 1 }`,
        id: uid(),
        index,
        move: false,
        position: 0
      } ]) }))
  }

  dragStart = (id) => this.setState({dragId: id})

  update = ({ id, value, index }) => {
    this.setState((prevState) =>
      ({ tasks: prevState.tasks.map( item => ( item.id === 'id' ? {name: value, id } : item))}))
  }

  remove = (id) => {
    this.setState((prevState) => ({ tasks: prevState.tasks.filter(item => item.id !== id) }))
  }
  render() {
    return (
      <Provider value={{
          ...this.state,
          remove: this.remove,
          update: this.update,
          set: this.set,
          changeBoard: this.changeBoard,
          dragStart: this.dragStart,
          findBoard: this.findBoard
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const TaskConsumer = Consumer;

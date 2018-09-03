import React, { createContext, Component } from 'react';
import uid from 'uid'

const { Consumer, Provider } = createContext({
  tasks: [],
  set() {},
  remove() {},
  update() {}
});

export class TaskProvider extends Component {
  state = {
    tasks: []
  };

  set = (value) => {
    this.setState((prevState) => ({ tasks: prevState.tasks.concat([ {name: value || `task${ this.state.tasks.length + 1 }`, id: uid()} ]) }))
  }
  update = (id, value) => {
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
          set: this.set
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const TaskConsumer = Consumer;

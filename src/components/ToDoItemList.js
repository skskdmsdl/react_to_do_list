import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
      }  
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const toDoList = todos.map(
            ({id, text, checked}) => (
            <ToDoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
            )
        );
  
        return (
        <div>
            {toDoList}    
        </div>
        );
    }
}

export default ToDoItemList;

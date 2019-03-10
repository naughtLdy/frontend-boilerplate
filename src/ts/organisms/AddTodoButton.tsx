import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo, TodoAction } from '../actions';
import State from '../states';
import Form from '../molecules/InputForm';

export interface AddTodoButtonProps {
  onSubmit: (s: string) => void;
}

interface AddTodoButtonState {
  input: string;
}

class AddButton extends React.Component<
  AddTodoButtonProps,
  AddTodoButtonState
> {
  constructor(props: AddTodoButtonProps) {
    super(props);
    this.state = {
      input: ''
    };
  }

  onFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // if not, call @@INIT/redux
    e.preventDefault();
    if (!this.state.input.trim()) {
      return;
    }

    this.props.onSubmit(this.state.input);
    this.setState({
      input: ''
    });
  };

  onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      input: e.currentTarget.value
    });
  };

  render() {
    return (
      <Form
        input={this.state.input}
        onFormSubmit={this.onFormSubmit}
        onInputChange={this.onInputChange}
      />
    );
  }
}

function mapStateToProps(state: State): {} {
  return {};
}

function mapDispatchToProps(
  dispatch: Dispatch<TodoAction>
): AddTodoButtonProps {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    }
  };
}

export default connect<{}, AddTodoButtonProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);

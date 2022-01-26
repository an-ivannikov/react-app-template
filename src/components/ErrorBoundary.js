import { Component } from 'react';
import { hot } from 'react-hot-loader';
import ErrorComponent from './ErrorComponent';



class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <ErrorComponent />;
    }

    return this.props.children;
  }
}

export default hot(module)(ErrorBoundary);

import * as React from 'react';

interface AppProps {
}

interface AppState {
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        Hello World!!
      </div>
    );
  }
}

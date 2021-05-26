import React from "react";

export default class testComponent extends React.Component {
  render() {
    if (this.props.displayed) {
      return (
        <React.Fragment>
          <p>Test Component: Do no you see me now?</p>
        </React.Fragment>
      );
    } else {
      return <div />;
    }
  }
}

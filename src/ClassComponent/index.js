import React from "react";

export default class ClassComponent extends React.Component {

 /**
  * The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
 */
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      time: new Date(),
    };
  }

  // The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
  // This is the natural place to set the state object based on the initial props.
  static getDerivedStateFromProps(props, state) {
    return {favoriteColor: props.favcol };
  }

  /*
  The componentDidMount() method is called after the component is rendered.
  This is where you run statements that requires that the component is already placed in the DOM.
  */
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  shouldComponentUpdate(prevState, newState){

    //console.log("p",prevState,"n", newState);
    return true;

  }

  /*
  In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

    If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
  */
  getSnapshotBeforeUpdate(prevProps, prevState) {

  }
  
  componentDidUpdate() {

  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { time, favoriteColor } = this.state;

    return (
      <>
        <div>My Favorite color {favoriteColor}</div>
        <div>
          <span>{time.getHours()}</span>:<span>{time.getMinutes()}</span>:
          <span>{time.getSeconds()}</span>
        </div>
      </>
    );
  }
}

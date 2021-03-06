class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count
    }
   }
   
   componentDidMount() {
     const stringCount = localStorage.getItem('count');
     const count = parseInt(stringCount, 10);
 
     if (!isNaN(count)) {
       this.setState(() => ({ count }));
     }
   }
   componentDidUpdate(prevProps, prevState) {
     if (prevState.count !== this.state.count) {
       localStorage.setItem('count', this.state.count);
     }
   }

  handleAddOne() {
    console.log('handleAddOne');

    let count = this.state.count;

    this.setState(
      {
        count: count + 1
      }
    );
  }

  handleMinusOne() {
    console.log('handleMinusOne');

    this.setState( (prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  handleReset() {
    console.log('handleReset');

    this.setState( () => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: </h1> { this.state.count }
        <button onClick={ this.handleAddOne.bind(this) }>+1</button>
        <button onClick={ this.handleMinusOne.bind(this)  }>-1</button>
        <button onClick={ this.handleReset.bind(this)  }>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));

{ /*
let count = 0;

const addOne = () => {
  console.log('addOne');
  count++;
  renderCounterApp();
};

const minusOne = () => {
  console.log('minusOne');
  count--;
  renderCounterApp();
};

const reset = () => {
  console.log('reset');
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateThree, appRoot);
}

renderCounterApp();
*/ }
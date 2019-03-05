
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }

    return (
      <ul>
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceries}</li>
      </ul>
    )
  }
};

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(groceries =>
      <GroceryListItem groceries={groceries}/>
      )}
  </ul>
)

var App = () => (
  <div>
    <h1>Groceries</h1>
    <GroceryList groceries={['apple', 'pear', 'pineapple']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

/*var iGotClicked = (event) => {
    console.log('Yo Dont Touch Me');
    <li onClick={iGotClicked}>{props.groceries[0]}</li>
        <li>{props.groceries[1]}</li>
        <li>{props.groceries[2]}</li>

  var App = () => (
  <div>
    <h1>Groceries</h1>
    <GroceryList groceries={['apple', 'pear', 'pineapple']}/>
  </div>
);

    */
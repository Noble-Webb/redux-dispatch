// declare our state to equal an object {count: 0}.
let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

// define our reducer and our new function dispatch.
function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

// to render this on the page we can write a render function that changes our HTML:
function render(){
  document.body.textContent = state.count
}

// When called, the changeState reducer also takes in state, which has been declared up above.
function dispatch(action){
  state = changeState(state, action)
  // return state 

  // ensure that the render function runs every time that our dispatch function is called
  render()
}

// call the dispatch function and pass through our action, {type: 'INCREASE_COUNT'}.
// dispatch({type: 'INCREASE_COUNT'})
  // => {count: 1}

dispatch(action)
dispatch(action)
dispatch(action)
dispatch(action)

render()

// suggested solution
// let state = {count: 0};

// function changeState(state, action){
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       default:
//         return state;
//     }
//   }

// function render(){
//     document.body.textContent = state.count
// }

// function dispatch(action){
//   state = changeState(state, action)
//   render()
// }

// render()
import React, { useReducer } from 'react';

const MyContext = React.createContext();

const initialState = {
      show: false,
}

const myReducer = (state = initialState, action) => {
      switch (action.type) {
            case "show/1":
                  return { ...state, show: true };
            case "show/0":
                  return { ...state, show: false };
            default:
                  return state;
      }
}

const initialState2 = {
      count: 0
}

const myReducer2 = (state = initialState2, action) => {
      switch (action.type) {
            case "increment":
                  return { ...state, count: state.count + 1 };
            case "decrement":
                  return { ...state, count: state.count - 1 };
            default:
                  return state;
      }
}

const rootReducer = combileReducers(myReducer, myReducer2);

export function MyComponent() {
      const [state, dispatch] = useReducer(rootReducer, {
            ...initialState,
            ...initialState2
      });
      const value = { state, dispatch };

      const showAction = { type: "show/1" };
      const hideAction = { type: "show/0" };

      const incAction = { type: "increment" };
      const decAction = { type: "decrement" };

      return (
            <MyContext.Provider value={value}>
                  <MyContext.Consumer>
                        {
                              ({ state, dispatch }) => (
                                    <div>
                                          {state.show ? <h1>Shown</h1> : <h1>Hidden</h1>}
                                          <button onClick={() => dispatch(state.show ? hideAction : showAction)}>
                                                Toggle
                                          </button>

                                          <h1>Count:{state.count}</h1>
                                          <button onClick={() => dispatch(incAction)}>
                                                Increase
                                          </button>
                                          <button onClick={() => dispatch(decAction)}>
                                                Decrease
                                          </button>
                                    </div>
                              )
                        }
                  </MyContext.Consumer>
            </MyContext.Provider>
      );
}

function combileReducers(...reducers) {
      return (state, action) =>
            reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);
}
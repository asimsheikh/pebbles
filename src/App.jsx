import React, { useState, useReducer, useEffect } from "react";
import './index.css'

const Pebble = ({ id, cx, cy, r, description, clicked, dispatch }) => {
  return (
    <circle cx={cx} cy={cy} r={r} fill={clicked ? "lightgrey" : "white"}
      strokeWidth="1" stroke={description ? "red" : "lightgrey"}
      onClick={() => { dispatch({ type: "CLICKED_PEBBLE", payload: { id: id, clicked: !clicked } });
      }} />
  );
};

const PebbleData = ({ id, description, dispatch }) => {
  const [text, setText] = useState(description);

  return (
    <>
      <h1 className="text-2xl text-gray-600 py-3 px-2">Pebble #{id}</h1>
      <textarea
        className="block w-full text-gray-800 p-2 bg -gray-100 border-x-2 resize-none rounded-lg text-sm"
        placeholder={"Work on Pebble...."}
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex">
        <button
          className="bg-blue-400 my-2 w-1/2 p-2 text-lg text-white rounded-lg mr-2 "
          onClick={() => dispatch({ type: "UPDATE_PEBBLE", payload: { id: id, description: text } }) }
        >
          Update
        </button>
        <button className="bg-gray-300 my-2 w-1/2 p-2 text-lg text-gray-600 rounded-lg">
          Discard
        </button>
      </div>
    </>
  );
};

const PebblesAllocation = ({ allocations }) => {
  return (
    <div className="mt-8 text-2xl text-gray-600 font-bold">
      <p>Pebble Allocations</p>
      <div className="mt-2 text-xl font-normal">
        {[...allocations].map((key) => {
          return key[0] === "" 
                ? ( <p></p>) 
                : ( <p> {key[1]} {key[0]} </p>) })}
      </div>
    </div>
  );
};

const PebbleCounter = ({ state }) => {
  return (
    <div className="w-full m-4">
      <p className="text-4xl text-gray-600 font-bold">Pebble Counter</p>
      <p className="">
        <span className="text-4xl text-gray-400">{state.pebblesCompleted}</span>
        <span className="text-2xl text-gray-400"> / </span>
        <span className="text-4xl text-gray-600">96</span>
      </p>
    </div>
  );
};

const initialState = {
  pebbles: [
    { id: 1, x: 100, y: 100, r: 20, description: "", col: 1, clicked: false },
    { id: 2, x: 100, y: 150, r: 20, description: "", col: 1, clicked: false },
    { id: 3, x: 100, y: 200, r: 20, description: "", col: 1, clicked: false },
    { id: 4, x: 100, y: 250, r: 20, description: "", col: 1, clicked: false },
    { id: 5, x: 150, y: 100, r: 20, description: "", col: 2, clicked: false },
    { id: 6, x: 150, y: 150, r: 20, description: "", col: 2, clicked: false },
    { id: 7, x: 150, y: 200, r: 20, description: "", col: 2, clicked: false },
    { id: 8, x: 150, y: 250, r: 20, description: "", col: 2, clicked: false },
    { id: 9, x: 200, y: 100, r: 20, description: "", col: 3, clicked: false },
    { id: 10, x: 200, y: 150, r: 20, description: "", col: 3, clicked: false },
    { id: 11, x: 200, y: 200, r: 20, description: "", col: 3, clicked: false },
    { id: 12, x: 200, y: 250, r: 20, description: "", col: 3, clicked: false },
    { id: 13, x: 250, y: 100, r: 20, description: "", col: 4, clicked: false },
    { id: 14, x: 250, y: 150, r: 20, description: "", col: 4, clicked: false },
    { id: 15, x: 250, y: 200, r: 20, description: "", col: 4, clicked: false },
    { id: 16, x: 250, y: 250, r: 20, description: "", col: 4, clicked: false },
    { id: 17, x: 300, y: 100, r: 20, description: "", col: 5, clicked: false },
    { id: 18, x: 300, y: 150, r: 20, description: "", col: 5, clicked: false },
    { id: 19, x: 300, y: 200, r: 20, description: "", col: 5, clicked: false },
    { id: 20, x: 300, y: 250, r: 20, description: "", col: 5, clicked: false },
    { id: 21, x: 350, y: 100, r: 20, description: "", col: 6, clicked: false },
    { id: 22, x: 350, y: 150, r: 20, description: "", col: 6, clicked: false },
    { id: 23, x: 350, y: 200, r: 20, description: "", col: 6, clicked: false },
    { id: 24, x: 350, y: 250, r: 20, description: "", col: 6, clicked: false },
    { id: 25, x: 400, y: 100, r: 20, description: "", col: 7, clicked: false },
    { id: 26, x: 400, y: 150, r: 20, description: "", col: 7, clicked: false },
    { id: 27, x: 400, y: 200, r: 20, description: "", col: 7, clicked: false },
    { id: 28, x: 400, y: 250, r: 20, description: "", col: 7, clicked: false },
    { id: 29, x: 450, y: 100, r: 20, description: "", col: 8, clicked: false },
    { id: 30, x: 450, y: 150, r: 20, description: "", col: 8, clicked: false },
    { id: 31, x: 450, y: 200, r: 20, description: "", col: 8, clicked: false },
    { id: 32, x: 450, y: 250, r: 20, description: "", col: 8, clicked: false },
    { id: 33, x: 500, y: 100, r: 20, description: "", col: 9, clicked: false },
    { id: 34, x: 500, y: 150, r: 20, description: "", col: 9, clicked: false },
    { id: 35, x: 500, y: 200, r: 20, description: "", col: 9, clicked: false },
    { id: 36, x: 500, y: 250, r: 20, description: "", col: 9, clicked: false },
    { id: 37, x: 550, y: 100, r: 20, description: "", col: 10, clicked: false },
    { id: 38, x: 550, y: 150, r: 20, description: "", col: 10, clicked: false },
    { id: 39, x: 550, y: 200, r: 20, description: "", col: 10, clicked: false },
    { id: 40, x: 550, y: 250, r: 20, description: "", col: 10, clicked: false },
    { id: 41, x: 600, y: 100, r: 20, description: "", col: 11, clicked: false },
    { id: 42, x: 600, y: 150, r: 20, description: "", col: 11, clicked: false },
    { id: 43, x: 600, y: 200, r: 20, description: "", col: 11, clicked: false },
    { id: 44, x: 600, y: 250, r: 20, description: "", col: 11, clicked: false },
    { id: 45, x: 650, y: 100, r: 20, description: "", col: 12, clicked: false },
    { id: 46, x: 650, y: 150, r: 20, description: "", col: 12, clicked: false },
    { id: 47, x: 650, y: 200, r: 20, description: "", col: 12, clicked: false },
    { id: 48, x: 650, y: 250, r: 20, description: "", col: 12, clicked: false },
    { id: 49, x: 700, y: 100, r: 20, description: "", col: 13, clicked: false },
    { id: 50, x: 700, y: 150, r: 20, description: "", col: 13, clicked: false },
    { id: 51, x: 700, y: 200, r: 20, description: "", col: 13, clicked: false },
    { id: 52, x: 700, y: 250, r: 20, description: "", col: 13, clicked: false },
    { id: 53, x: 750, y: 100, r: 20, description: "", col: 14, clicked: false },
    { id: 54, x: 750, y: 150, r: 20, description: "", col: 14, clicked: false },
    { id: 55, x: 750, y: 200, r: 20, description: "", col: 14, clicked: false },
    { id: 56, x: 750, y: 250, r: 20, description: "", col: 14, clicked: false },
    { id: 57, x: 800, y: 100, r: 20, description: "", col: 15, clicked: false },
    { id: 58, x: 800, y: 150, r: 20, description: "", col: 15, clicked: false },
    { id: 59, x: 800, y: 200, r: 20, description: "", col: 15, clicked: false },
    { id: 60, x: 800, y: 250, r: 20, description: "", col: 15, clicked: false },
    { id: 61, x: 850, y: 100, r: 20, description: "", col: 16, clicked: false },
    { id: 62, x: 850, y: 150, r: 20, description: "", col: 16, clicked: false },
    { id: 63, x: 850, y: 200, r: 20, description: "", col: 16, clicked: false },
    { id: 64, x: 850, y: 250, r: 20, description: "", col: 16, clicked: false },
    { id: 65, x: 900, y: 100, r: 20, description: "", col: 17, clicked: false },
    { id: 66, x: 900, y: 150, r: 20, description: "", col: 17, clicked: false },
    { id: 67, x: 900, y: 200, r: 20, description: "", col: 17, clicked: false },
    { id: 68, x: 900, y: 250, r: 20, description: "", col: 17, clicked: false },
    { id: 69, x: 950, y: 100, r: 20, description: "", col: 18, clicked: false },
    { id: 70, x: 950, y: 150, r: 20, description: "", col: 18, clicked: false },
    { id: 71, x: 950, y: 200, r: 20, description: "", col: 18, clicked: false },
    { id: 72, x: 950, y: 250, r: 20, description: "", col: 18, clicked: false },
    { id: 73, x: 1000, y: 100, r: 20, description: "", col: 19, clicked: false },
    { id: 74, x: 1000, y: 150, r: 20, description: "", col: 19, clicked: false },
    { id: 75, x: 1000, y: 200, r: 20, description: "", col: 19, clicked: false },
    { id: 76, x: 1000, y: 250, r: 20, description: "", col: 19, clicked: false },
    { id: 77, x: 1050, y: 100, r: 20, description: "", col: 20, clicked: false },
    { id: 78, x: 1050, y: 150, r: 20, description: "", col: 20, clicked: false },
    { id: 79, x: 1050, y: 200, r: 20, description: "", col: 20, clicked: false },
    { id: 80, x: 1050, y: 250, r: 20, description: "", col: 20, clicked: false },
    { id: 81, x: 1100, y: 100, r: 20, description: "", col: 21, clicked: false },
    { id: 82, x: 1100, y: 150, r: 20, description: "", col: 21, clicked: false },
    { id: 83, x: 1100, y: 200, r: 20, description: "", col: 21, clicked: false },
    { id: 84, x: 1100, y: 250, r: 20, description: "", col: 21, clicked: false },
    { id: 85, x: 1150, y: 100, r: 20, description: "", col: 22, clicked: false },
    { id: 86, x: 1150, y: 150, r: 20, description: "", col: 22, clicked: false },
    { id: 87, x: 1150, y: 200, r: 20, description: "", col: 22, clicked: false },
    { id: 88, x: 1150, y: 250, r: 20, description: "", col: 22, clicked: false },
    { id: 89, x: 1200, y: 100, r: 20, description: "", col: 23, clicked: false },
    { id: 90, x: 1200, y: 150, r: 20, description: "", col: 23, clicked: false },
    { id: 91, x: 1200, y: 200, r: 20, description: "", col: 23, clicked: false },
    { id: 92, x: 1200, y: 250, r: 20, description: "", col: 23, clicked: false },
    { id: 93, x: 1250, y: 100, r: 20, description: "", col: 24, clicked: false },
    { id: 94, x: 1250, y: 150, r: 20, description: "", col: 24, clicked: false },
    { id: 95, x: 1250, y: 200, r: 20, description: "", col: 24, clicked: false },
    { id: 96, x: 1250, y: 250, r: 20, description: "", col: 24, clicked: false }
  ],
  currentPebble: {},
  pebblesCompleted: 0,
  pebblesTarget: 0,
  allocations: new Map()
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PEBBLE":
      const newState = {
        ...state,
        pebbles: state.pebbles.map((pebble) =>
          pebble.id === action.payload.id
            ? { ...pebble, description: action.payload.description }
            : pebble
        )
      };

      var newAllocations = new Map();
      newState.pebbles.forEach((p) =>
        newAllocations.has(p.description)
          ? newAllocations.set( p.description, newAllocations.get(p.description) + 1)
          : newAllocations.set(p.description, 1)
      );

      return { ...newState, allocations: newAllocations };

    case "CLICKED_PEBBLE":
      const newPebbles = state.pebbles.map((pebble) =>
        pebble.id === action.payload.id
          ? { ...pebble, clicked: action.payload.clicked }
          : pebble
      );
      const newPebblesCompleted = newPebbles.filter((p) => p.clicked).length;
      const newCurrentPebble = newPebbles.filter(
        (pebble) => pebble.id === action.payload.id)[0];
      return { ...state, pebbles: newPebbles, pebblesCompleted: newPebblesCompleted,
        currentPebble: newCurrentPebble
      };

    case "GET_PEBBLES_COMPLETED":
      const countPebblesCompleted = state.pebbles.filter((p) => p.clicked).length;
      return { ...state, pebblesCompleted: countPebblesCompleted };

    case "ALLOCATIONS":
      var newAllocations = new Map();
      state.pebbles.forEach((p) =>
        newAllocations.has(p.description)
          ? newAllocations.set( p.description, newAllocations.get(p.description) + 1)
          : newAllocations.set(p.description, 1)
      );
      return { ...state, allocations: newAllocations };

    case "LOAD_STATE":
      if (action.payload) {
        const loadedState = action.payload;
        const allocationsToMap = new Map([...loadedState.allocations]);
        return { ...loadedState, allocations: allocationsToMap };
      } else { return state; }

    case "RESET_STATE":
      return initialState;

    case "LOAD_FROM_DATASTORE":
      console.log('In load from datastore')
      let storeState = JSON.parse(action.payload.data.state)
      return storeState 

    case "SAVE_TO_DATASTORE":
      console.log("SAVE_TO_DATASTORE");
      return state;

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadData = async () => {
    let headers = { method: "POST",
      headers: { Accept: "*/*", "Content-Type": "application/json" },
      body: JSON.stringify({ "type": "GET_PEBBLES",
                             "payload": { "userid": 1, "search_date": "2022-09-07"}}) };

    const response = await fetch( "https://vercel-sqlalchemy.vercel.app/api", headers);
    const content = await response;
    const data = await content.json()
    return data
  };

  useEffect(() => {
    dispatch({ type: "LOAD_STATE", payload: JSON.parse(window.localStorage.getItem("state")) });
    dispatch({ type: "GET_PEBBLES_COMPLETED" });
  }, []);

  return (
    <>
      <div className="text-2xl flex flex-row">
        <div className="w-3/4">
          <svg
            viewBox="0 0 1400 700"
            style={{ width: "100%", backgroundColor: "#fafafa" }}
          >
            {state.pebbles.map(({ id, r, x, y, description, clicked }) => {
              return id % 4 === 0 
              ? ( <>
                  <Pebble key={id} id={id} r={r} cx={x} cy={y} description={description}
                    clicked={clicked} dispatch={dispatch} />
                  <text fill="lightgrey" x={x - 10} y={y + 50}>
                    {id / 4 > 12 ? id / 4 - 12 : id / 4}
                  </text>
                </>) 
              : ( <> {" "} <Pebble key={id} id={id} r={r} cx={x} cy={y}
                    description={description}
                    clicked={clicked}
                    dispatch={dispatch} />
                </>
              );
            })}
          </svg>
        </div>
        <div className="w-1/4 p-2">
          <PebbleData
            key={state.currentPebble.id}
            id={state.currentPebble.id}
            description={state.currentPebble.description}
            debug={state.currentPebble}
            dispatch={dispatch}
          />
          <PebblesAllocation allocations={state.allocations} />
        </div>
      </div>
      <PebbleCounter state={state} />
      <div className="w-2/3 m-4">
        <button
          className="bg-blue-400 my-2 w-1/3 p-2 text-lg text-white rounded-lg mr-2 "
          onClick={() => {
            const jsonState = { ...state, allocations: [...state.allocations] };
            window.localStorage.setItem("state", JSON.stringify(jsonState));
          }}
        >
          Save
        </button>
        <button
          className="bg-blue-400 my-2 w-1/3 p-2 text-lg text-white rounded-lg mr-2 "
          onClick={() => {
            dispatch({ type: "RESET_STATE" });
          }}
        >
          Reset
        </button>

        <button
          className="bg-blue-400 my-2 w-1/3 p-2 text-lg text-white rounded-lg mr-2 "
          onClick={async () => { 
            let data = await loadData()
            dispatch({ type: "LOAD_FROM_DATASTORE", payload: { data: data}})
          }}
        >
          Load Store
        </button>

        <button
          className="bg-blue-400 my-2 w-1/3 p-2 text-lg text-white rounded-lg mr-2 "
          onClick={() => {
            dispatch({ type: "SAVE_TO_DATASTORE" });
          }}
        >
          Save Store
        </button>
      </div>
    </>
  );
}

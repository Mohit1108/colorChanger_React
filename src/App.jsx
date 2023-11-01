import { useState } from "react";

function App() {
  const [color, setColor] = useState("wheat");
  const handleColorChange = (e) => {
    setColor(e.target.value);
    document.body.style.backgroundColor = e.target.value;
  };

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
          <div className="flex flex-wrap bg-white justify-center gap-3 shadow-lg px-5 py-2 rounded-3xl">
            Current Color: {color}
          </div>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap bg-white justify-center gap-3 shadow-lg px-2 py-2 rounded-3xl">
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor("Indigo")}
              className="outline-none px-4 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Indigo" }}
            >
              Indigo
            </button>
            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 text-dark shadow-lg rounded-full"
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => setColor("Orange")}
              className="outline-none px-4 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Orange" }}
            >
              Orange
            </button>

            <button
              onClick={() => setColor("Red")}
              className="outline-none px-4 text-white shadow-lg rounded-full"
              style={{ backgroundColor: "Red" }}
            >
              Red
            </button>

            <div className="flex items-center justify-center">
              <label htmlFor="color-picker" className="block mr-2">
                Select color:
              </label>

              <input
                type="color"
                id="color-picker"
                onChange={handleColorChange}
                value={color}
                className="w-12 h-12"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

const heading = React.createElement("h1", {id:"heading", xyz:"ABC"}, "Hello world from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading2 = React.createElement("div", {id:"Parent"}, [
  React.createElement("div", {id:"Child"}, [
   React.createElement("h1", {}, "Hello 1"),
   React.createElement("h2", {}, "Hello 2")
]),
  React.createElement("div", {id:"Child 2"}, [
   React.createElement("h1", {}, "Hello 1"),
   React.createElement("h2", {}, "Hello 2"),
]),
]);
root.render(heading2);

console.log(heading);
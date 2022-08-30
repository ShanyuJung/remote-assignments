const { useState, useEffect } = React;

function MyApp() {
  const [list, setList] = useState([]);

  useEffect(() => {
    function ajax(src, callback) {
      // your code here

      axios
        .get(src)
        .then((res) => {
          callback(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function render(data) {
      // your code here
      setList((arr) => [...arr, ...data]);
    }

    ajax(
      "https://appworks-school.github.io/Remote-Assignment-Data/products",
      function (response) {
        render(response);
      }
    ); // you should get product information in JSON format and render data in the page
  }, []);

  return (
    <>
      <h1>Assignment 2: Callback Function and Advanced HTML DOM</h1>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.name}>
              <h3>{item.name}</h3>
              <h4>{item.description}</h4>
              <h4>Price: {item.price} </h4>
            </li>
          );
        })}
      </ul>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

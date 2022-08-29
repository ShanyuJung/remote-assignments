function MyApp() {
  function delayedResult(n1, n2, delayTime, callback) {
    // your code here
    const result = n1 + n2;
    setTimeout(function () {
      return callback(result);
    }, Number(delayTime));
  }

  delayedResult(4, 5, 3000, function (result) {
    console.log(result);
  }); // 9 (4+5) will be shown in the console after 3 seconds

  delayedResult(-5, 10, 2000, function (result) {
    window.alert(result);
  }); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

  return (
    <>
      <h1>Assignment 1: Callback Function</h1>
      <h2>(4+5) will be shown in the console after 3 seconds</h2>
      <h2>(-5+10) will be shown in an alert dialog after 2 seconds</h2>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

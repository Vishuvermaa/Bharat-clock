import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/ClockTime";
function App() {
  return (
    <center className="Container">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;

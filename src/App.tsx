import "./App.css";
import CountDownTimer from "./components/CountdownTimer";
import TopBar from "./components/TopBar";

function App() {
  const target = new Date("11/7/2025, 06:45:00 AM");
  return (
    <div className="w-full h-screen text-white">
      <TopBar></TopBar>
      <div className="bg-[#191716] w-full h-screen text-white flex justify-center items-center">
        <CountDownTimer
          targetDate={target}
          title="MC"
          description="Until morning coffee mmmmhmmmm!"
        />
      </div>
    </div>
  );
}

export default App;

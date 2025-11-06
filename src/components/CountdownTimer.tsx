import { useState, useEffect, useCallback} from "react";

interface CountDownTimerProps {
  targetDate: Date;
  title?: string;
  description?: string;
}

const CountDownTimer = ({
  targetDate,
  title = "TITLE",
  description = "Until ...",
}: CountDownTimerProps) => {

  const getTimeRemaining = useCallback(() => {
    const currentDate = new Date();
    const diff = targetDate.getTime() - currentDate.getTime();
    if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, getTimeRemaining]);

  return (
    <div className="p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center0">
      <h1>{title}</h1>
      <div className="pt-5 flex flex-col justify-between">
        <p className="text-6xl font-mono font-bold mb-2">
          {String(timeLeft.days).padStart(2, "0")}:
          {String(timeLeft.hours).padStart(2, "0")}:
          {String(timeLeft.minutes).padStart(2, "0")}:
          {String(timeLeft.seconds).padStart(2, "0")}
        </p>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default CountDownTimer;

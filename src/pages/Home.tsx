import LogModal from "@/components/LogModal.tsx/LogModal";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface WorkLog {
  startTime: Date;
  endTime: Date | null;
  duration: number;
  project: string;
  pauseReason?: string;
}

export default function Home() {
  const [timeRemaining, setTimeRemaining] = useState(8 * 60 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [workLogs, setWorkLogs] = useState<WorkLog[]>([]);
  const [currentProject, setCurrentProject] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleStartClick = (project: string) => {
    if (project) {
      setCurrentProject(project);
      setIsTimerRunning(true);
      setWorkLogs([
        ...workLogs,
        {
          startTime: new Date(),
          endTime: null,
          duration: 0,
          project: project,
        },
      ]);
    }
  };

  const handleTimerClick = (pauseReason: string) => {
    
    setIsTimerRunning(false);
    const updatedLogs = [...workLogs];
    const currentLog = updatedLogs[updatedLogs.length - 1];
    if (currentLog) {
      currentLog.endTime = new Date();
      currentLog.duration =
        (currentLog.endTime.getTime() - currentLog.startTime.getTime()) / 1000;
      currentLog.pauseReason = pauseReason || undefined;
    }
    setWorkLogs(updatedLogs);
  };

  const calculateTotalTime = () => {
    return workLogs.reduce((total, log) => total + (log.duration || 0), 0);
  };

  return (
    <div className="w-full max-w-4xl px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
          <LogModal
            onClick={isTimerRunning ? handleTimerClick : handleStartClick}
          >
            <Button
              size="lg"
              className="w-48 h-48 rounded-full text-4xl font-bold"
            >
              {isTimerRunning ? formatTime(timeRemaining) : "Start"}
            </Button>
          </LogModal>
          <div className="mt-6 text-2xl font-medium text-primary-foreground">
            {isTimerRunning
              ? `Working on: ${currentProject}`
              : "Click to Start Timer"}
          </div>
        </div>
        <div className="bg-card dark:bg-[#2b2b2b] rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-card-foreground">
              Today's Work Log
            </h2>
            <div className="text-sm font-medium text-muted-foreground">
              Total: {formatTime(calculateTotalTime())}
            </div>
          </div>
          <div className="space-y-4">
            {workLogs.map((log, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-card-foreground">
                    {log.startTime.toLocaleTimeString()} -{" "}
                    {log.endTime ? log.endTime.toLocaleTimeString() : "Ongoing"}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatTime(log.duration)}
                  </div>
                </div>
                <div className="text-sm font-medium text-primary-foreground">
                  {log.project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hAJ1U2ok5fy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import LogModal from "@/components/LogModal.tsx/LogModal";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
    const [timeRemaining, setTimeRemaining] = useState(8 * 60 * 60)
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    useEffect(() => {
      let interval: string | number | NodeJS.Timeout | undefined
      if (isTimerRunning) {
        interval = setInterval(() => {
          setTimeRemaining((prevTime) => prevTime - 1)
        }, 1000)
      }
      return () => clearInterval(interval)
    }, [isTimerRunning])
    const formatTime = (seconds: number) => {
      const hours = Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60)
      const remainingSeconds = seconds % 60
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`
    }
    const handleStartClick = () => {
      setIsTimerRunning(true)
    }
    const handleTimerClick = () => {
      setIsTimerRunning(false)
    }
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background dark:bg-[#1e1e1e]">
        <div className="w-full max-w-4xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
                <LogModal onClick={isTimerRunning ? handleTimerClick : handleStartClick}>

              <Button
                size="lg"
                className="w-48 h-48 rounded-full text-4xl font-bold"
                >
                {isTimerRunning ? formatTime(timeRemaining) : "Start"}
              </Button>
                  </LogModal>
              <div className="mt-6 text-2xl font-medium text-primary-foreground">
                {isTimerRunning ? "Click to Stop Timer" : "Clocked In"}
              </div>
            </div>
            <div className="bg-card dark:bg-[#2b2b2b] rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-card-foreground">Today's Work Log</h2>
                <div className="text-sm font-medium text-muted-foreground">Total: {formatTime(timeRemaining)}</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-card-foreground">9:00 AM - 12:00 PM</div>
                    <div className="text-sm text-muted-foreground">3h 0m</div>
                  </div>
                  <div className="text-sm font-medium text-primary-foreground">Project A</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-card-foreground">1:00 PM - 4:15 PM</div>
                    <div className="text-sm text-muted-foreground">3h 15m</div>
                  </div>
                  <div className="text-sm font-medium text-primary-foreground">Project B</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-card-foreground">4:30 PM - 5:00 PM</div>
                    <div className="text-sm text-muted-foreground">0h 30m</div>
                  </div>
                  <div className="text-sm font-medium text-primary-foreground">Project C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

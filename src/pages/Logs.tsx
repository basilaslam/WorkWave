/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uFsuanceqLz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { SVGProps, useEffect, useState } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { JSX } from "react/jsx-runtime"

export default function LogsDashboard() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [report, setReport] = useState([
    {
      id: 1,
      project: "Project A",
      task: "Research",
      timeSpent: "4h 30m",
      date: "2023-06-01",
    },
    {
      id: 2,
      project: "Project B",
      task: "Design",
      timeSpent: "2h 15m",
      date: "2023-06-02",
    },
    {
      id: 3,
      project: "Project A",
      task: "Development",
      timeSpent: "6h 45m",
      date: "2023-06-03",
    },
    {
      id: 4,
      project: "Project C",
      task: "Testing",
      timeSpent: "3h 00m",
      date: "2023-06-04",
    },
    {
      id: 5,
      project: "Project B",
      task: "Documentation",
      timeSpent: "1h 30m",
      date: "2023-06-05",
    },
  ])

  // need to read the screen width and if the width is smaller than 720px then don't show the table instead show a message that this page is not available on small screen
  //use usestate and useEffect to get the screen width
const [isSmaller, setIsSmaller] = useState(false);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsSmaller(true);
    } else {
      setIsSmaller(false);
    }
  };   

  window.addEventListener('resize', handleResize);
  handleResize();
}, []);

  const handleGenerateReport = () => {}
  const handleExportCSV = () => {}
  const handleExportPDF = () => {}
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-16 mt-16 md:mx-auto overflow-auto">
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${isSmaller ? "mx-auto" : ""}`}>Work Tracker Report</h1>
       {!isSmaller && <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate.toLocaleDateString()}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4">
            <Calendar mode="single" selected={startDate} onSelect={(day) => setStartDate(day!)} />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate.toLocaleDateString()}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4">
            <Calendar mode="single" selected={endDate} onSelect={(day) => setEndDate(day!)} />
            </PopoverContent>
          </Popover>
          <Button onClick={handleGenerateReport}>Generate Report</Button>
        </div>}
      </div>
      <div className="overflow-auto border rounded-lg">
       {!isSmaller && <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Time Spent</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {report.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.project}</TableCell>
                <TableCell>{item.task}</TableCell>
                <TableCell>{item.timeSpent}</TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>}
      </div>
      {
          isSmaller &&
          <div className="text-sm text-muted-foreground mx-auto">
            This page is not available on small screens
          </div>
        }
      <div className="flex justify-end gap-2">
        {!isSmaller && 
        <>
        <Button variant="outline" onClick={handleExportCSV}>
          Export to CSV
        </Button>
        <Button variant="outline" onClick={handleExportPDF}>
          Export to PDF
        </Button>
        </>
        }
      </div>
    </div>
  )
}

function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}
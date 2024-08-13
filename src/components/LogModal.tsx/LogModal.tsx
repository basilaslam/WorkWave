
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function LogModal({children, onClick}:{children: React.ReactNode, onClick: (param: string) => void}) {

  const [data, setData] = useState("")
  const handleClick = () => {
    if(!data) return
    onClick(data)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">Add Work Log Reason</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="reason" className="text-foreground">
              Reason
            </Label>
            <Textarea
              id="reason"
              onChange={(e) => setData(e.target.value)}
              value={data}
              placeholder="Enter the reason for your work log"
              className="min-h-[100px] text-foreground"
            />
            <div className="flex justify-end text-sm text-muted-foreground">
              <span id="character-count" className="text-muted-foreground">
                0
              </span>
              /200 characters
            </div>
          </div>
        </div>
        <DialogFooter>
        <DialogClose asChild>
          <Button onClick={handleClick} type="submit" className="text-foreground">
            Confirm
          </Button>
        </DialogClose>
          <div>
            <DialogClose asChild>
            <Button variant="outline" className="text-foreground">
              Cancel
            </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
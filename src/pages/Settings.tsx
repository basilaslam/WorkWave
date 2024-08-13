
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function Settings() {
  return (
    <div className="w-full max-w-3xl mx-16 py-8 md:py-12 mt-32 h-[calc(100vh-64px)] mb-5 overflow-auto lg:mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Avatar className="w-12 h-12">
          <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-muted-foreground">john@example.com</p>
        </div>
      </div>
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Task Notifications</p>
                <p className="text-muted-foreground text-sm">Get notified when a new task is assigned to you.</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Deadline Reminders</p>
                <p className="text-muted-foreground text-sm">Receive reminders before task deadlines.</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Project Updates</p>
                <p className="text-muted-foreground text-sm">Get notified about project status changes.</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Theme</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-muted-foreground text-sm">Switch to a dark color scheme.</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Accent Color</p>
                <p className="text-muted-foreground text-sm">Choose a custom accent color.</p>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select accent color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="pink">Pink</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Data Backup</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Automatic Backups</p>
                <p className="text-muted-foreground text-sm">Automatically backup your data daily.</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Backup Location</p>
                <p className="text-muted-foreground text-sm">Choose where to store your backups.</p>
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select backup location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local Drive</SelectItem>
                  <SelectItem value="cloud">Cloud Storage</SelectItem>
                  <SelectItem value="external">External Drive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
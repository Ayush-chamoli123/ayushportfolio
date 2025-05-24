
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

interface AIChatSettingsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (email: string) => void;
}

const AIChatSettings = ({ open, onOpenChange, onSave }: AIChatSettingsProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Load saved email from localStorage or use the default
    const savedEmail = localStorage.getItem("chat-forward-email") || "ayushchamoli731@gmail.com";
    setEmail(savedEmail);
  }, []);

  const handleSave = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to receive messages.",
        variant: "destructive",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    onSave(email);
    localStorage.setItem("chat-forward-email", email);
    
    toast({
      title: "Settings Saved",
      description: "Chat messages will be forwarded to your email address.",
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat Settings</DialogTitle>
          <DialogDescription>
            Configure where chat messages from visitors should be sent.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right text-sm font-medium col-span-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              className="col-span-3"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-span-4 text-xs text-muted-foreground mt-2 bg-muted p-2 rounded">
            <p className="font-semibold mb-1">⚠️ EmailJS Setup Required:</p>
            <p>To receive emails, you need to:</p>
            <ol className="list-decimal pl-4 space-y-1">
              <li>Create an account at emailjs.com</li>
              <li>Set up an Email Service</li>
              <li>Create an email template with variables: to_email, from_name, message, reply_to</li>
              <li>Update the serviceId, templateId, and publicKey in src/utils/chatUtils.ts</li>
            </ol>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>Save Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AIChatSettings;

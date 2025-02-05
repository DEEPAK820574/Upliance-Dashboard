import React, { useEffect, useState } from "react";
import { Bold, Italic, Underline, List } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import type { UserData } from "../type";

const RichTextEditor: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
  };

  return (
    <Card className="p-6 shadow-2xl">
      <div className="mb-4 flex gap-2">
        <Toggle onClick={() => handleFormat("bold")}>
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle onClick={() => handleFormat("italic")}>
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle onClick={() => handleFormat("underline")}>
          <Underline className="h-4 w-4" />
        </Toggle>
        <Toggle onClick={() => handleFormat("insertUnorderedList")}>
          <List className="h-4 w-4" />
        </Toggle>
      </div>

      <div
        className="min-h-[200px] rounded-md border p-4"
        contentEditable
        onInput={(e) => setContent(e.currentTarget.textContent || "")}
        dangerouslySetInnerHTML={{
          __html: userData
            ? `Id:${userData.id}<br/>Name: ${userData.name}<br/>Email: ${userData.email}<br/>Address: ${userData.address}<br/>Phone: ${userData.phone}`
            : "No user data available",
        }}
      />
    </Card>
  );
};

export default RichTextEditor;

"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { PanelLeftClose, PanelRightClose } from "lucide-react";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useCreatorSidebar(
    (state) => state
  );
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <>
      {collapsed && (
        <div className="w-full hidden lg:flex items-center justify-center pt-4 mb-4 ">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
              <PanelRightClose className="h-6 w-6" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full justify-between">
          <p className="font-semibold text-primary">Dashboard</p>
          <Hint label={label} side="right" asChild>
            <Button onClick={onCollapse} variant="ghost" className="h-auto p-2">
              <PanelLeftClose className="h-6 w-6" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export default Toggle;

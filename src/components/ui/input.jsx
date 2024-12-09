import { cn } from "@/lib/utils";

export function Input({ type, className, ...props }) {
  return (
    <div>
      <input className={cn("custom-input")} type={type} {...props} />
    </div>
  );
}

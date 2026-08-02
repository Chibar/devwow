import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

import { cn } from "@/lib/cn";
import type { ContactIcon as ContactIconName } from "@/lib/types";

const icons = {
  phone: Phone,
  mail: Mail,
  telegram: Send,
  address: MapPin,
  clock: Clock,
} as const;

/** Иконка канала связи в градиентной плашке. */
export function ContactIcon({
  name,
  className,
  iconClassName,
}: {
  name: ContactIconName;
  className?: string;
  iconClassName?: string;
}) {
  const Icon = icons[name];

  return (
    <span
      className={cn(
        "brand-gradient flex size-10 shrink-0 items-center justify-center rounded-[14px]",
        className,
      )}
    >
      <Icon className={cn("size-[18px] text-white", iconClassName)} />
    </span>
  );
}

"use client";

import { usePopupForm } from "@/context/PopupFormContext";

export default function PopupButton({
  text = "Book Appointment",
  className = "",
  children,
}) {
  const { setOpen } = usePopupForm();

  return (
    <button
      onClick={() => setOpen(true)}
      className={className}
    >
      {children || text}
    </button>
  );
}
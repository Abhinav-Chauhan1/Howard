import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outlined" | "white" | "ghost";
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "gold",
  children,
  className = "",
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles: Record<string, string> = {
    gold: "bg-[var(--accent)] text-white hover:brightness-90 active:brightness-75",
    outlined:
      "border border-white text-white hover:bg-white hover:text-[var(--deep)] active:opacity-80",
    white: "bg-white text-[var(--deep)] hover:bg-[var(--muted)] active:opacity-80",
    ghost: "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white active:opacity-80",
  };

  const classes = `${base} ${styles[variant]} ${className}`;
  const fontStyle = { fontFamily: "var(--font-heading)" };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          style={fontStyle}
          data-cursor
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={fontStyle} data-cursor>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={fontStyle}
      disabled={disabled}
      data-cursor
    >
      {children}
    </button>
  );
}

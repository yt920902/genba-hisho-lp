const lineUrl = "https://lin.ee/RlNqL2M";

type CtaButtonProps = {
  className?: string;
  variant?: "primary" | "line";
};

export function CtaButton({ className = "", variant = "primary" }: CtaButtonProps) {
  const colorClass =
    variant === "line"
      ? "bg-brand-line text-white hover:bg-[#05b84f] focus-visible:outline-brand-line"
      : "bg-brand-orange text-white hover:bg-orange-600 focus-visible:outline-brand-orange";

  return (
    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-6 py-3 text-center text-base font-bold shadow-soft transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${colorClass} ${className}`}
      aria-label="LINE公式アカウントで無料相談する"
    >
      LINEで相談をはじめる
    </a>
  );
}

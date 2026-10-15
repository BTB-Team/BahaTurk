
export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3">
      <h3 className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-accent">
        {children}
      </h3>
      <span className="h-px flex-1 bg-accent" aria-hidden="true" />
    </div>
  );
}

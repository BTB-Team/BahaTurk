
export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-2">
      <h3 className="whitespace-nowrap text-base font-semibold uppercase text-accent md:text-xl">
        {children}
      </h3>
      <span className="h-[2px] flex-1 translate-y-1.5 bg-accent" aria-hidden="true" />
    </div>
  );
}
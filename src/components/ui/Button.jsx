export default function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    secondary: "bg-brand-gold text-brand-dark hover:opacity-90",
    outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  };

  return (
    <button
      className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

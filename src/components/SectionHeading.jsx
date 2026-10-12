export default function SectionHeading({ title, children }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-ink/70">{children}</p>}
    </div>
  );
}

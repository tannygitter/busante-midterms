// Generated cover art for projects without a real image yet.
export default function Cover({ palette, variant, title }) {
  const [bg, a, b] = palette;
  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" role="img" aria-label={`Cover art for ${title}`} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill={bg} />
      {variant === "circles" && (
        <>
          <circle cx="130" cy="130" r="95" fill={a} />
          <circle cx="250" cy="110" r="70" fill={b} opacity="0.9" />
          <circle cx="320" cy="190" r="40" fill={a} stroke={bg} strokeWidth="6" />
        </>
      )}
      {variant === "stripes" && (
        <>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={-40 + i * 80} y="-20" width="38" height="300" fill={i % 2 ? a : b} transform="rotate(20 200 120)" />
          ))}
        </>
      )}
      {variant === "arcs" && (
        <>
          <path d="M0 240 A200 200 0 0 1 200 40 L200 240 Z" fill={a} />
          <path d="M200 240 A120 120 0 0 1 320 120 L320 240 Z" fill={b} />
          <circle cx="330" cy="60" r="34" fill={a} />
        </>
      )}
      {variant === "grid" && (
        <>
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3, 4].map((c) => (
              <rect key={`${r}-${c}`} x={30 + c * 72} y={20 + r * 52} width="60" height="40" rx="8" fill={(r + c) % 3 === 0 ? a : b} opacity={(r + c) % 2 ? 0.55 : 1} />
            ))
          )}
        </>
      )}
    </svg>
  );
}

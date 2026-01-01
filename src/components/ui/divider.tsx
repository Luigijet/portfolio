export default function Divider() {
  return (
    <div className="w-full my-8">
      <div
        className="mx-auto"
        aria-hidden="true"
        style={{
          height: "1px",
          width: "100%",
          background: "linear-gradient(90deg, transparent, hsl(var(--border)), transparent)",
          opacity: 0.8,
        }}
      />
    </div>
  );
}

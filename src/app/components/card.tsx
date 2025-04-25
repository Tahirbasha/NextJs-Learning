export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ height: "100px", border: "1px solid blue" }}>
      {children}
    </div>
  );
}

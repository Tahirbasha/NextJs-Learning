export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  user
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  user: React.ReactNode;
}) {
  return (
    <>
      {children}
      {notifications}
      {revenue}
      {user}
    </>
  );
}

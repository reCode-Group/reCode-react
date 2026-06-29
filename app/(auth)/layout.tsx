import PageIllustration from "@/components/page-illustration";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative isolate flex grow flex-col">
      <PageIllustration multiple />

      {children}
    </main>
  );
}

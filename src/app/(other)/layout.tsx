import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}

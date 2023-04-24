import Footer from "src/components/Footer";
import Header from "src/components/Header";

export default function Layout({ children }: any) {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

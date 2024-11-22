import "./globals.css";
import "./reset.css";
import Header from "@/components/Header/header";


export const metadata = {
  title: "Atividade Header - João Vinícius",
  description: "Atividade utilizada como método avaliativo na disciplina de Front-End II no IFRO Campus Vilhena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

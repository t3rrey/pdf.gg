import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import * as PDFJS from "pdfjs-dist";

export default function Home() {
  PDFJS.getDocument("../assets/dummy.pdf");
  return (
    <div className="flex">
      <Header />
    </div>
  );
}

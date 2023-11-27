import { useEffect, useState } from "react";
import Link from "next/link";

import axios from "axios";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Songs from "@/components/Songs/Songs";

const Main = () => (
  <>
    <Header />
    <div>LANDING PAGE</div>
    <Link href="/songs">Songs</Link>
    <Footer />
  </>
);

export default Main;

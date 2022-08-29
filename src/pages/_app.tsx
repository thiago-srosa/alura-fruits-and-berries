import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";

import type { AppProps } from "next/app";
import { CustomNavbar } from "src/components/Navbar";

const MyApp = ({ Component }: AppProps) => {
  return (
    <>
      <CustomNavbar />
      <main>
        <Component />
      </main>
    </>
  );
};

export default MyApp;

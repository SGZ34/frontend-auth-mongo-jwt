import { Navbar } from "../components";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <section className="content ">
        <div className="container-fluid">{children}</div>
      </section>
    </>
  );
};

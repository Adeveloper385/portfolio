import type { NextPage } from "next";

import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <div style={{ outline: "none" }} tabIndex={-1}>
      <div id="root">
        <Layout>
          <h1></h1>
        </Layout>
      </div>
    </div>
  );
};

export default Home;

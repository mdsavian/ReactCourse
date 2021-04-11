import Layout from "./hoc/Layout/Layout";
import BurguerBuilder from "./container/BurguerBuilder/BurguerBuilder";

function App() {
  return (
    <div >
      <Layout>
        <BurguerBuilder/>
      </Layout>
    </div>
  );
}

export default App;

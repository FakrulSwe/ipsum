import AmChart from "./components/AmChart/AmChart";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Massa from "./components/Massa/Massa";
import Table1 from "./components/Table/Table1";
import Table2 from "./components/Table2/Table2";
import Touch from "./components/Touch/Touch";
import TrakingSheet from "./components/TrakingSheet/TrakingSheet";
import TryOut from "./components/TryOut/TryOut";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Table1></Table1>
      <TryOut></TryOut>
      <Card></Card>
      <TrakingSheet></TrakingSheet>
      <AmChart></AmChart>
      <Touch></Touch>
      <Table2></Table2>
      <Massa></Massa>
      <Footer></Footer>
    </div>
  );
}

export default App;

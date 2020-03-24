import Link from "next/link";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";
import Prices from "../components/Prices";


const Index = (props) => (
  <Layout>
    <div>
      <h1>welcome to the front page</h1>
      {/* {props.bpi.time} */}
      <Prices bpi ={props.bpi} />
      
    </div>
  </Layout>
);


// this is now depricated and replaced by getStaticProps
Index.getInitialProps = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();
  
  return {
    bpi: data.bpi
    
  };
  
};

export default Index;

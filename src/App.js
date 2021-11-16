import React, {useState} from "react";
import { useBlockchain } from "./session/BlockchainProvider";
import Loader from '../img/loader.gif';
import { SetName } from "./actions/AsyncActions";

function App() {

  const [name, setName] = useState("");

  const [isTransactionInProcess, setTransactionInProcess] = useState(false);

  const [isTransactionSuccessful, setTransactionSuccessful] = useState(false);

  const [transactionError, setTransactionError] = useState("");

  const [{Name, contract, accounts}, dispatch] = useBlockchain();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name != "") {
      try {
        setTransactionInProcess(true);

        const newTransaction = {
          name: name
        };

        await SetName(contract, accounts, newTransaction, dispatch);

        setTransactionInProcess(false);

        setTransactionSuccessful(true);

      } catch (error) {
        console.log(error);

        setTransactionInProcess(false);

        setTransactionSuccessful(false);

        setTransactionError(error.message);
      }
    } else {
      alert('You cannot set empty name');
    }

    return (
        <div style={{
          background: "linear-gradient(to bottom right, #456 , #000)",
          transition: "0.8s all",
          boxShadow: " 0px 3px 6px rgba(0,0,0,0.6)",
          height: '100vh'
        }}>
          <center>
            <br/><br/>
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto" style={{padding: '5%', textAlign: 'center'}}>
                  <br/><br/><br/>
                  <form>
                    <h6 style={{color: 'white'}}>Contract Deployed on BSC Testnet</h6>
                    <p style={{color: 'white'}}> Name: {Name}</p>

                    <div className="col-md-12">
                      <div className="input-group form-group">
                        <div class="input-group-prepend"></div>
                        <input type=" text" className=" form-control" placeholder=" Enter Name" style={{height: '50px'}}
                               onChange={(e) => setName(e.target.value)}/>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="input-group form-group">
                        <button type="submit" id="txt" style={{
                          width: '620px',
                          height: '50px',
                          borderRadius: '1rem',
                          padding: '1.5%',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          color: 'white',
                          backgroundColor: 'rgb(93, 174, 206)'
                        }} onClick={handleSubmit}>
                          SET NAME
                          {isTransactionInProcess && <img width="40px" src={Loader} alt="Loading..."/>}
                          {isTransactionSuccessful == true ? <div style={{color: "green"}}></div> : null}
                          {!isTransactionSuccessful && <div style={{color: "red"}}>{transactionError}</div>}
                        </button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </center>
        </div>
    );
  }
}

export default App;
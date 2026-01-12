
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import States from "./components/States";
import OrderContainer from "./components/OrderContainer";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

const loadOrders =() => fetch("/orders.json").then((res) => res.json());

const App = () => {
  const ordersPromise = loadOrders();
  return <div>
            <header className="w-11/12 mx-auto py-3">
           <Navbar></Navbar>
            </header>
            <section>
             <Heading>
                   Kitchen Room
             </Heading>
            </section>
            {/* card section */}
                   <section>
                      <Suspense fallback={"Loading"}>
                          <OrderContainer promise={ordersPromise}></OrderContainer>
                      </Suspense>
                   </section>

                   <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                              />
  </div>
   
 
};

export default App;
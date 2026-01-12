import React, { use, useState } from 'react';
import States from './States';
import OrderCard from './cards/OrderCard';
import CookingCard from './cards/CookingCard';
import ReadyCard from './cards/ReadyCard';
import { toast } from 'react-toastify';


const OrderContainer = ({promise}) => {
    0
    const data = use(promise);
    // console.log(orders);
    const[orders,setOrders] = useState(data);

    const [cookingItems, setCookingItems] = useState([]);
    const [readyItems, setReadyItems] = useState([]);

               const handleOrder = (order) => {
                    // console.log(order);
                    // toast("Order called")
                                        //age check koro cooking e order ache kina
                        const isExist = cookingItems.find((item) => item.id == order.id);

                        if(isExist){
                            // alert("Allready Cooking!!");
                            toast.error("order allready on Processing")
                            return;
                        }
                    
                         //Cooking Item er vitore click koraa order k dhukabo.
                    const newCookingItems =[...cookingItems,order];
                    setCookingItems(newCookingItems);
                    };
                    console.log(cookingItems);
  // teadyItems fild for javascipt   
                const  handleCooking =(order) =>{               
                    //1. readyItems er vitore order k dhukao
                    order.cookedAt = new Date().toLocaleTimeString();
                    const newReadyItems = [...readyItems, order];
                    setReadyItems(newReadyItems);

                    //2. cooking items er vitor theke order ta k remove korbe
                    const remaining = cookingItems.filter((item) => item.id !== order.id);
                    setCookingItems(remaining);

                      //3. orders theke order remove kore hobe.
                 const remainingOrders = orders.filter((item) => item.id !== order.id);
                 setOrders(remainingOrders);
                };
                 
    return (
        <div>
                        <States  
                            cookingTotal={cookingItems.length}
                            orderTotal={orders.length}
                            readyTotal={readyItems.length}
                        
                        ></States>


            {/* CARD Section  */}
            <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7">
                <h2 className="font-bold text-4xl">Current Order</h2>

                <div className="">
                    {orders.map((item) =>(
                        <OrderCard handleOrder={handleOrder}
                        key={item.id} order={item}></OrderCard>
                    ))}
                </div>
            </div>
   {/*Cooking now  */}
              <div className="lg:col-span-5 space-y-5">
                       <h2 className="font-bold text-4xl">Cooking Now</h2>
                       <div className="shadow p-10 space-y-10">
                        {cookingItems.map((order) =>(
                            // <h2>{order.order_title}</h2>
                            <CookingCard handleCooking={handleCooking} key={order.id} order={order}></CookingCard>
                        ))}
                       </div>
{/* order Ready */}
                       <h2 className="font-bold text-4xl">Order Ready</h2>
                       <div className="shadow p-10 space-y-5">
                        {readyItems.map((order) => (
                           <ReadyCard key={order.id} order={order}></ReadyCard>
                        ))}

                       </div>
              </div>
            </section>
        </div>
    );
};

export default OrderContainer;
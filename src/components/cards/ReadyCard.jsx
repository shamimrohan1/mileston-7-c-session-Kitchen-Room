import React from 'react';

const ReadyCard = ({order}) => {
    return (
        <div className="shadow p-5 border rounded-xl border-amber-400"> 
             <h2 className="text-2xl font-bold">{order.order_title}</h2>
             <p>Table No.{order.table_no}</p>
             <p>water Id.{order.waiterId}</p>
             <p>water Id.{order.cookedAt}</p>
             
        </div>
    );
};

export default ReadyCard;
// import React from "react";
// import product from "../assets/imgs/Ellipse 2858.svg";
// import product2 from "../assets/imgs/Ellipse 2858 (1).svg";
// import product3 from "../assets/imgs/Ellipse 2858 (2).svg";
// import product4 from "../assets/imgs/Ellipse 2858 (3).svg";
// import arrow from "../assets/imgs/arrow-right.svg";
// import circle from "../assets/imgs/info-circle.svg";

// export const AddJobs = () => {
//   const data = [
//     {
//       id: 1,
//       productImg: product,
//       productName: "iPhone 15 Pro Max 526 GB",
//       companyName: "Mooi Gadgets",
//       amount: "₦200,000.00",
//       orderId: "VD5477956P",
//       status: "completed",
//     },
//     {
//       id: 2,
//       productImg: product2,
//       productName: "2000 Watt Hair Dryers..",
//       companyName: "Mooi Gadgets",
//       amount: "₦86,000.00",
//       orderId: "VD5477956P",
//       status: "pending",
//     },
//     {
//       id: 3,
//       productImg: product4,
//       productName: "Mainstays 12-Inche..",
//       companyName: "Mooi Gadgets",
//       amount: "₦200,000.00",
//       orderId: "VD5477956P",
//       status: "cancelled",
//     },
//     {
//       id: 4,
//       productImg: product,
//       productName: "iPhone 15 Pro Max 526 GB",
//       companyName: "Mooi Gadgets",
//       amount: "₦86,000.00",
//       orderId: "VD5477956P",
//       status: "cancelled",
//     },
//     {
//       id: 5,
//       productImg: product3,
//       productName: "Generic 2pcs Easy 360°..",
//       companyName: "Mooi Gadgets",
//       amount: "₦18,000.00",
//       orderId: "VD5477956P",
//       status: "completed",
//     },
//     {
//       id: 6,
//       productImg: product4,
//       productName: "iPhone 15 Pro Max 526 GB",
//       companyName: "Mooi Gadgets",
//       amount: "₦86,000.00",
//       orderId: "VD5477956P",
//       status: "pending",
//     },
//     {
//       id: 7,
//       productImg: product2,
//       productName: "iPhone 15 Pro Max 526 GB",
//       companyName: "Mooi Gadgets",
//       amount: "₦86,000.00",
//       orderId: "VD5477956P",
//       status: "cancelled",
//     },
//   ];
//   const bgFilter = (value) => {
//     if (value === "completed") {
//       return "w-[107px] h-[28px] rounded-[100px]  bg-[#EFFFF6] border-[#83F3B2] border-[1px] text-[#449E6A] text-[400] text-center ";
//     } else if (value === "pending") {
//       return "w-[107px] h-[28px] rounded-[100px]  bg-[#F0F0F0] border-[#F0F0F0] border-[1px] text-[#232323] text-[400] text-center";
//     } else if (value === "cancelled") {
//       return "w-[107px] h-[28px] rounded-[100px]  bg-[#FFE8E8] text-[#EF5959] border-[1px] border-[#FFBBBB] text-[400] text-center";
//     }
//   };
//   return (
//     // <>
//     //   <div className="flex justify-center items-center h-screen w-full  ">
//     //     <div className="  w-[789px] rounded-[20px] border-[1px] p-4">
//     //       <div className="flex justify-between pb-14 pt-6 px-4">
//     //         <p className="text-[500][16px] text-[#5C5959]">Orders</p>
//     //         <div className="flex items-center gap-2">
//     //           {" "}
//     //           <p className="text-[12px] text-[#5C5959] text-[500]">View more</p>
//     //           <div>
//     //             <img src={arrow} alt="" />
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <table className="w-full">
//     //         <thead className="text-left h-[44px] text-[#9B9697] text-[14px] font-[400] border-[#F0F0F0] border-b-[1px]">
//     //           <tr>
//     //             <th> Name</th>
//     //             <th>Amount</th>
//     //             <th>OrderID</th>
//     //             <th>Status</th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {data.map((data) => (
//     //             <tr
//     //               key={data.id}
//     //               className="h-[70px] border-[#F0F0F0] border-b-[1px]"
//     //             >
//     //               <td>
//     //                 <div className="flex gap-2 items-center">
//     //                   <div>
//     //                     <img src={data.productImg} alt="" />
//     //                   </div>
//     //                   <div>
//     //                     <p className="text-[#232323] font-[500] text-[14px]">
//     //                       {data.productName}
//     //                     </p>
//     //                     <p className="text-[#9B9697] font-[500] text-[14px]">
//     //                       {data.companyName}
//     //                     </p>
//     //                   </div>
//     //                 </div>
//     //               </td>
//     //               <td>
//     //                 <div>
//     //                   <p className="text-[#232323] font-[500] text-[14px]">
//     //                     {data.amount}
//     //                   </p>
//     //                   {data.status === "cancelled" ? (
//     //                     <div className="flex gap-2 items-center">
//     //                       <img src={circle} alt="" />
//     //                       <p className="text-[#E51837] text-[14px] font-[400]">
//     //                         Action Required
//     //                       </p>
//     //                     </div>
//     //                   ) : null}
//     //                 </div>
//     //               </td>
//     //               <td>
//     //                 <p className="text-[#232323] text-[14px] font-[400]">
//     //                   {data.orderId}
//     //                 </p>{" "}
//     //               </td>
//     //               <td>
//     //                 {" "}
//     //                 <p className={`${bgFilter(data.status)}`}>{data.status}</p>
//     //               </td>
//     //             </tr>
//     //           ))}
//     //         </tbody>
//     //       </table>
//     //     </div>
//     //   </div>
//     // </>
//     <h1 className="flex justify-center items-center">under construction</h1>
//   );
// };

import { Topbar } from "../components/Topbar"
import { Navigate, useNavigate } from "react-router-dom"
import { Heading } from "../components/Heading";



export const Firstpage = () =>{
const navigate = useNavigate();
 
 return  <div className="bg-white-500 h-screen ">
 
      <div className="bg-white">
       <Topbar onClick1={async()=>{
        navigate("/signup")}}
       onClick2={()=>{navigate("/signin")}}
       labeel ={"Signup"} label = {"Signin"} />
    </div>
    <div className="pt-3">
      <div className="w-[95%] h-[600px] m-auto bg-cover bg-center
       rounded-xl flex justify-center flex-col items-start lg:px-6 px-1 gap-7 z-20
       bg-[url('./assets/images/Wallet.jpg')]">
        <div className="max-w-xl text-slate-900">
          <div class=" gap-3 bg-white bg-opacity-80 border border-gray-300 rounded-xl overflow-hidden items-center justify-start p-4">

        <Heading label={" Welcome to FlowPay – Your Trusted Digital Wallet"} />

             <div className="py-4 text-lg">At FlowPay, we aim to simplify the way you handle your money. Our platform offers a fast, secure, and user-friendly experience to manage your finances online. Whether it's transferring money to friends, storing your personal data securely, or managing your digital identity, we are committed to making financial transactions smarter and safer.
              <div className="font-bold pt-3 pb-1 text-lg">
             Why Choose Us?
             </div> <div className="py-1 pl-2">
             🔐 Safe and Secure Sign-In/Sign-Out
              </div><div className="py-1 pl-2">
            🤝 Easy Peer-to-Peer Money Transfers
             </div><div className="py-1 pl-2">
            💾 Encrypted Storage of User Data
              </div><div className="py-1">
             Join us in the journey of building a smarter digital future. Start sending and receiving money with just a few clicks! 
             </div>
             </div>

         </div>
       </div>
    </div>
    {/* <div className="flex  pl-10  py-12">
       <div class="max-w-2xl  ">
        <div class=" gap-3 bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start p-4">

              <Heading label={" Welcome to [Your App Name] – Your Trusted Digital Wallet"} />

             <div className="py-4">At [Your App Name], we aim to simplify the way you handle your money. Our platform offers a fast, secure, and user-friendly experience to manage your finances online. Whether it's transferring money to friends, storing your personal data securely, or managing your digital identity, we are committed to making financial transactions smarter and safer.
              <div>
             With a strong focus on security, simplicity, and speed, our goal is to bring financial freedom to your fingertips. Our team is constantly working to ensure you get a seamless digital payment experience — anytime, anywhere.
            </div><div className="font-bold pt-3 pb-1 text-lg">
             Why Choose Us?
             </div> <div className="py-1 pl-2">
             🔐 Safe and Secure Sign-In/Sign-Out
              </div><div className="py-1 pl-2">
            🤝 Easy Peer-to-Peer Money Transfers
             </div><div className="py-1 pl-2">
            💾 Encrypted Storage of User Data
              </div><div className="py-1 pl-2">
            📱 Smooth & Responsive Web Experience
             </div><div className="py-1">
             Join us in the journey of building a smarter digital future. Start sending and receiving money with just a few clicks! 
             </div>
             </div>
          </div>
        </div> */}
    {/* </div> */}

    </div>
    </div>

      
   
}
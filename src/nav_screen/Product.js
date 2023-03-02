import Styles from "./Product.module.css";
import { useState } from "react";
const Product = () => {
  // const [productName, setProductName] = useState("");
  // const [capitalStaff, setCapitalStaff] = useState("");
  // const [name, setName] = useState("");
  // const [paid, setPaid] = useState("");
  // const [sum, setSum] = useState("");
  // const [date, setDate] = useState("");
  // const [sex, setSex] = useState("");
  // const [policyTerm, setPolicyTerm] = useState("");
  // const [rider, setRider] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form submitted!");
  //   console.log("Product Name: ", productName);
  //   console.log("Capital Staff: ", capitalStaff);
  //   console.log("Name: ", name);
  //   console.log("Paid: ", paid);
  //   console.log("Sum: ", sum);
  //   console.log("Date: ", date);
  //   console.log("Sex: ", sex);
  //   console.log("Policy Term: ", policyTerm);
  //   console.log("Rider: ", rider);
  // };
  return (
    <>
    <div className={Styles.navBar}>
      <ul>
        <li>Home /</li>
        <li>Sales /</li>
        <li>Product illustration</li>
      </ul>

    </div>
      <form>
        <label>
          <b>Product Name :</b>
          <select className={Styles.productselect} name="" id="">
            <option value="">product one</option>
            <option value="">product one</option>
            <option value="">product one</option>
            <option value="">product one</option>
          </select>
        </label>
        <label>
           <b>Phillip Capital Staff :</b> 
          <select className={Styles.CapitalStaff} name="" id="">
            <option value="">product one</option>
            <option value="">product one</option>
            <option value="">product one</option>
            <option value="">product one</option>
          </select>
        </label> <br />
        <label htmlFor="">
          <b>Policyholder (Full Name)</b>
          <input className={Styles.poliInput} type="text" placeholder="Full Name" />
        </label>
        <label htmlFor="">
          <b>Insured (Full Name)</b>
          <input className={Styles.insureinput} type="text" placeholder="Full Name" />
        </label>
        <label htmlFor="">
          <b>date of birth</b>
          <input className={Styles.dateInput} type="date" name="" id="" />
        </label>
        <label>
           <b>Sex:</b> 
          <select className={Styles.sexSelect} name="" id="">
            <option value="">male</option>
            <option value="">female</option>
          </select>
        </label>
        <label htmlFor="">
          <b>Payment Mode</b>
          <select className={Styles.paymentSelect} name="" id="">
            <option value="1">annually</option>
            <option value="1">annually</option>
          </select>
        </label>
        <label htmlFor="">
          <b>Policy Term</b>
          <select className={Styles.policyTermSelect} name="" id="">
            <option value="1">annually</option>
            <option value="1">annually</option>
          </select>
        </label> <br />
        <label htmlFor="">
          <b>Sum assured</b>
          <input className={Styles.SumSelect} type="text" placeholder="10000" />
        </label>
        <label htmlFor="">
          <b>Rider</b>
          <select className={Styles.policyTermSelect} name="" id="">
            <option value="1">select...</option>
            <option value="1">annually</option>
          </select>
        </label> <br />
        <button className={Styles.buttonEvaluate} >Evaluate</button>
        

        
      </form>
    </>
  );
};

export default Product;

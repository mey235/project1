import "./productlist.css"
import ima from "./images"
import React from "react"
const Sidebarfile=()=>
{
    const [datas, setData] = useState([]);
    const {searchQuery}= useSearch();
    const [price,setprice]=useState(1);
    const[close,setclose]=useState(false);
 
    const toggleLoginWindow = () => {
       setclose((close) => !close);
     };
 
    const Query=searchQuery;
   let det=[];
   
   const change=(searchvalue)=>
   {
      setData(searchvalue)
   }
   useEffect(() => {
    // Fetch data when the component mounts
    get();
  }, [searchQuery]);
   const get= async()=>
   {
    const response = await fetch(`http://localhost:5321/api/places/${searchQuery}`)
    const data = await response.json();
    console.log(data.use)
    if(data.use!=null)
    {
       
       
    setData(data.use);
    console.log(searchQuery);
    console.log(datas[0]);
       
    }
    else
    {
       const response = await fetch(`http://localhost:5321/api/places/all`)
       const data = await response.json();
       setData(data.use);
       console.log(searchQuery);
       console.log(datas);
    }
 
   }
   const Setprice=(e)=>
   {
       const b=parseInt(e.target.value);
       setprice(b*price);
   }
    const ame=()=>
    {
       return(
        <div className="but">
           {Array.isArray(datas) ?(
       datas.map((dataItem, index) => (
         <div className="cards">
           <img className="proimg" src={ima.vegetable} alt="asdas" />
           <div className="colum">
             <h2>{dataItem.name}</h2>
             <select onChange={Setprice}>
               <option value={500}>500g</option>
               <option value={1000}>1000g</option>
               <option value="option3">Option 3</option>
             </select>
             <p className="price">{price}</p>
             <button className="buybutton" onClick={toggleLoginWindow}>Buy Now</button>
           </div>
         </div>
       ))):( 
       <div className="cards">
           <img className="proimg" src={ima.vegetable} alt="asdas" />
           <div className="colum">
             <h2>{datas.name}</h2>
             <select onChange={Setprice}>
               <option value={500}>500g</option>
               <option value={1000}>1000g</option>
               <option value="option3">Option 3</option>
             </select>
             <p className="price">{price}</p>
             <button className="buybutton" onClick={toggleLoginWindow}>Buy Now</button>
           </div>
         </div>
    )}
     </div>
  
       );
    }
    
       return (
        <div>
        <Navbar />
        <h1 className="cathead">Meat</h1>
        {ame()}
        </div>
       )   

}
export default Sidebarfile;

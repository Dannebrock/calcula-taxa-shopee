import { useEffect, useState } from "react"
import './assets/App.css';
import linkedin from "./images/Linkedin.png";


function App() {


  const [valor, setValor] = useState(0) 
  const result = (valor/0.82).toFixed(2);
  
 return (

<div>
    <div style={{
    
    alignContent: "center",
    alignItems: "center"
  }}
    >

  <div>
  <h1 style={{
    color: '#D3D3D3',
    textAlign: "center",
    marginTop:50

  }}>Calcule o valor correto a ser cobrado na Shopee! </h1>
  </div>

  <div>
  <h1 style={{
    color: '#CD853F',
    fontSize:30,
    fontStyle:'normal',
    fontWeight: 'bold',
    marginTop:50,
    textAlign: "center",
    

  }}
  >Informe o valor que deseja receber: </h1>
  </div>

  <div style={{
     display:'flex',
     flexDirection: 'row',
     alignContent:'center',
     justifyContent: 'center',
     marginTop:15
  }}
  >
          
     <h1 style={{
      fontSize:40,
      padding: 10,
      marginTop:18,
      marginLeft:10,
      color: '#D3D3D3',
     }}
     >R$</h1>
      
      <input   
      style={{
        backgroundColor: '#363636',
        width: 150,
        height:60,
        marginBottom: 15,
        marginTop:15,
        color: '#D3D3D3',
        fontSize: 40,
        borderRadius: 12,
        marginRight:65,
        textAlign:'center',
        opacity: 0.9,
        border:'none'
        
        
     }}

        type="number"
        placeholder="0.00"
        step=".01"
        value={valor}
        onChange={(e) => setValor(e.target.valueAsNumber)}
        
        
        
              />
  </div>

  

  <div style={{
    alignItems: 'center'
  }}>      
     
      <h1 style={{
    color: '#D3D3D3',
    fontSize:30,
    fontStyle:'normal',
    fontWeight: 'bold',
    marginTop:10,
    textAlign: "center"
      }}
      >Valor que deve ser anunciado:</h1>
      
      <h1 style={{
        color: '#228B22',
        fontSize:50,
        fontStyle:'normal',
        fontWeight: 'bold',
        marginTop:15,
        textAlign: "center"
      }}
      >R${result}</h1>
  </div>

  <div>
       <div style={{
        fontSize:12,
        fontFamily: 'Arial, Helvetica, sans-serif',
        textAlign: 'center',
        marginBottom: 20,
        marginTop:50        
       }}>

    <a  href="https://www.linkedin.com/in/matheus-dannebrock-906276153/" target='_blank'> 
    <button role="button" 
    style={{
    backgroundImage: `url(${linkedin})`,
    backgroundColor: 'rgba(0,0,0,0.2)',
    width:20, 
    height:20,
    border: 'none',
    color: 'white',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: 5,
    padding: 20,
    fontSize:12,
    margin : 0,
    marginBottom: 10,
    cursor: "pointer"

    }}>

    </button> 
    </a>
    
    <h1 
    style={{
      color: '#D3D3D3',
      textAlign: "center",
      fontSize:12
    }}>Matheus Dannebrock ® 2022</h1>

      </div>
  </div>


  </div>
  
</div>


 )
}

export default App

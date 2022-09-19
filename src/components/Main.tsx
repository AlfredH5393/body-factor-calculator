import React,{useState} from "react";
import '../styles/Main.css';
import '../styles/Buttons.css';
import '../styles/Form.css'

const Main = () =>{
  const [radioGender, setRadioGender] = useState("H");
  const [height, setHeight] = useState(0); //Altura
  const [weight, setWeight] = useState(0); //Peso
  const [waist, setWaist] = useState(0); //Cintura
  const [neck, setNeck] = useState(0); //Cuello
  const [hip, setHip] = useState(0); //Cadera
  const [btnDisableCalculate, setBtnDisableCalculate] = useState(true);
  const [resultBodyFactorPercentage, setResultBodyFactorPercentage] = useState(0);

  const enabledButton = (): any => {
    
    if(radioGender === "H"){
        if( height > 0 &&  weight > 0 && waist > 0 && neck > 0 ){
            setBtnDisableCalculate(false);
        }else{
            setBtnDisableCalculate(true);
        }
    }else{
        if(height > 0 &&  weight > 0 && waist > 0 && neck > 0 && hip > 0){
            setBtnDisableCalculate(false);
        }else{
            setBtnDisableCalculate(true);
        }
    }
  }

  const clearValues = () : any => { 
    setHeight(0);
    setWeight(0);
    setWaist(0);
    setNeck(0);
    setHip(0);
    setResultBodyFactorPercentage(0);
  }
  
  const calculateBodyFat = () : any =>{
    
    setResultBodyFactorPercentage(0);
    let BFP: number = 0;
    console.log(radioGender);
    switch (radioGender){
        case 'H':
                BFP = 495 / ( 1.0324 - 0.19077 * Math.log10( waist - neck ) + 0.15456 * Math.log10( height ) ) - 450;
                BFP = parseFloat(BFP.toFixed(1)); 
                BFP = isNaN(BFP) ? 0 : BFP;
            break;
        case 'M':
                debugger;
                BFP = 495 / ( 1.29579 - 0.35004 * Math.log10( waist + hip - neck ) + 0.22100 * Math.log10( height ) ) - 450;
                BFP = parseFloat(BFP.toFixed(1)); 
                BFP = isNaN(BFP) ? 0 : BFP;
            break;
    }
    setResultBodyFactorPercentage(BFP);
  }

  return (
    <div className="main  flex mt-16 p-4">
       <div className="col1 ">
            <h1 className="text-white font-bold text-5xl"> Calculadora de Grasa Coporal </h1>
            <p className="text-info mt-9">
                El método de la Marina de Estados Unidos US Navy Method ofrece una manera sencilla  de calcular un aproxiamado 
                del porcentaje de tejido en el cuerpo de una persona 
            </p>
            <p className="text-info mt-9">
                Los valores requeridos por la formula son los siguientes:
            </p>

            <p className="mt-9 text-white">Genero:</p>
            <label className="text-white mr-4">
                <input 
                        type="radio" 
                        value="H" 
                        name="gender" 
                        checked = { radioGender === "H"}
                        onChange = {( event: any ) => { setRadioGender(event.target.value); setBtnDisableCalculate(true) ; clearValues() }}
                    /> 
                 Hombre
            </label> 
            <label className="text-white mr-4">
                <input 
                    type="radio" 
                    value="M" 
                    name="gender" 
                    checked = { radioGender === "M"}
                    onChange = {( event: any ) => { setRadioGender(event.target.value); setBtnDisableCalculate(true); clearValues() } }
                    className="pr-2"
                /> 
                 Mujer
            </label> 
            <form className="flex flex-col">
                <label className="text-white mt-4 mb-2">
                    Altura(cm) 
                </label>
                <input 
                    className="input-number"
                    type="number"
                    id="height"
                    value ={height}
                    name="weight"
                    min={0}
                    placeholder="Escribe tu altura"
                    onChange={ (event:any) => { setHeight(parseFloat(event.target.value)); }}
                    onKeyUp= {() => { enabledButton();}}
                />
                <label className="text-white mt-4 mb-2">
                    Peso(kg) 
                </label>
                <input 
                    className="input-number"
                    type="number"
                    id="weight"
                    min={0}
                    value ={weight}
                    name="weight"
                    placeholder="Escribe tu peso"
                    onChange={ (event:any) => { setWeight(parseFloat(event.target.value));}}
                    onKeyUp= {() => { enabledButton(); }}
                />
                <label className="text-white mt-4 mb-2">
                    Cintura(cm) 
                </label>
                <input 
                    type="number"
                    className="input-number"
                    id="waist"
                    min={0}
                    value ={waist}
                    name="waist"
                    placeholder="Medida de tu cintura"
                    onChange={ (event:any) => { setWaist(parseFloat(event.target.value));  }}
                    onKeyUp= {() => { enabledButton();}}
                />
                <label className="text-white mt-4 mb-2">
                    Cuello(cm) 
                </label>
                <input 
                    type="number"
                    id="neck"
                    className="input-number"
                    value ={neck}
                    min={0}
                    name="neck"
                    placeholder="Medida de tu cuello"
                    onChange={ (event:any) => { setNeck(parseFloat(event.target.value)); }}
                    onKeyUp= {() => { enabledButton();  }}
                />

                {
                    (radioGender === "M") 
                    ?
                    <label className="text-white mt-4 mb-2">
                        Cadera(cm) 
                    </label>
                    :<div></div>
                }
                {
                    (radioGender === "M")
                    ?
                      <input 
                        type="number"
                        id="hip"
                        className="input-number"
                        value ={hip}
                        name="hip"
                        min={0}
                        placeholder="Medida de tu cadera"
                        onChange={ (event:any) => { setHip(parseFloat(event.target.value)); }}
                        onKeyUp= {() => { enabledButton();}}
                      />
                    :<div></div>
                }
                
            </form>
            <div className="flex mt-4">
                <button className="btn-purple text-white font-bold py-2 px-4 rounded-full mr-3" disabled = {btnDisableCalculate} onClick= {() => calculateBodyFat()}>
                    Calcular
                </button>
                <button className="text-white font-bold py-2 px-4 rounded-full" onClick={() => {clearValues();}}>
                    Limpiar
                </button>
            </div>
           
       </div>
       <div className="col2 ">
            <h3 className="text-white mb-12 font-bold text-3xl ">
                Tu resultado: {resultBodyFactorPercentage}%
            </h3>
            <div className="content-indicator bg-gradient-indicator"></div>
            {
                (radioGender === "H")
                ?
                    <div className="indicators-point">
                        <div className="content-indicator-color">
                            <div className="indicator-size indicator-1"></div>
                            <p>2-5%</p>
                            <p>Esencial</p>
                        </div>
                        <div className="content-indicator-color">
                            <div className=" indicator-size indicator-2"></div>
                            <p>6-13%</p>
                            <p>Deportista</p>
                        </div>
                        <div className="content-indicator-color">
                            <div className="indicator-size indicator-3"></div>
                            <p>14-17%</p>
                            <p>Fitness</p>
                        </div>
                        <div className="content-indicator-color">
                            <div className="indicator-size indicator-4"></div>
                            <p>18-25%</p>
                            <p>Aceptable</p>
                        </div>
                        <div className="content-indicator-color">
                            <div className="indicator-size indicator-5"></div>
                            <p>25% +</p>
                            <p>Obeso</p>
                        </div>
                    </div>
                :
                    <div className="indicators-point">
                        <div className="content-indicator-color">
                            <div className="indicator-size indicator-1"></div>
                            <p>10-13%</p>
                            <p>Esencial</p>
                        </div>
                        <div className="content-indicator-color">
                            <div className=" indicator-size indicator-2"></div>
                            <p>14-20%</p>
                            <p>Deportista</p>
                        </div>
                        <div className="content-indicator-color">
                            <div className="indicator-size indicator-3"></div>
                            <p>21-24%</p>
                            <p>Fitness</p>
                        </div>
                        <div className="content-indicator-color">
                            <div className="indicator-size indicator-4"></div>
                            <p>25-31%</p>
                            <p>Aceptable</p>
                        </div>
                        <div className="content-indicator-color">
                            <div className="indicator-size indicator-5"></div>
                            <p>32% +</p>
                            <p>Obeso</p>
                        </div>
                    </div>
            }
           
       </div>
    </div>
  );
}

export default Main;
import React, {useState} from "react";
import Input from "./input";
import List from "./list";


//create your first component

const Home = () => {
	const [texto_Prueba, setTexto_Prueba] = useState([]);
	
	const entradaTeclado = (palabra) => {
        setTexto_Prueba(texto_Prueba.concat(palabra));
    };
	
	return (
		<div className="text-center">
			<Input onEnter={entradaTeclado}/>
			<List palabras={texto_Prueba}/>
		</div>
	);
};

export default Home;

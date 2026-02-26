import { useState } from 'react';
import NavButtons from '../components/NavButtons';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',    
  alignItems: 'center',        
  justifyContent: 'center',   
  minHeight: '100vh',         
  width: '100%',              
};


const contentStyle = {
  backgroundColor: 'white',    
  padding: '40px',                
  width: '400px',             
  textAlign: 'center'          
};

const inputStyle = {
  width: '100%',               
  padding: '12px',             
  borderRadius: '5px',
  border: '1px solid #070707',
  fontSize: '16px',            
  boxSizing: 'border-box',      
  marginBottom: '30px'          
};


const saveButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '12px 24px',
  fontSize: '16px',
  cursor: 'pointer',
  width: '100%',
  marginTop: '10px'
};

const PageOne = () => {
	
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [company, setCompany] = useState('');
	return (
	<div style={containerStyle}>
		<div style={contentStyle}>
			<NavButtons />
			<input style={inputStyle}
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Имя"
			/>
			<input style={inputStyle}
				type="text"
				value={lastName}
				onChange={ (e) => setLastName(e.target.value)}
				placeholder="Фамилия"
			/>
			<input style={inputStyle}
				type="text"
				value={company}
				onChange={ (e) => setCompany(e.target.value)}
				placeholder="Компания"
			/>
			<button style={saveButtonStyle}>
				СОХРАНИТЬ
			</button>
			<p>Имя: {name}</p>
			<p>Фамилия: {lastName}</p>
			<p>Компания: {company}</p>
		</div>
	</div>
	);
};

export default PageOne;
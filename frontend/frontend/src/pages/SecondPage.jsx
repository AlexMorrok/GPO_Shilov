import NavButtons from '../components/NavButtons';

const containerStyle = {
  minHeight: '100vh',  
  width: '100%',         
  backgroundColor: '#f5f5f5',  
  display: 'flex',
  flexDirection: 'column'    
};

const header = {
  padding: '20px', 
  backgroundColor: 'white',  
};

const mainContent = {
  flex: 1,     
  padding: '20px'  
};

const listStyle = {
  border: '2px solid #000',
  borderRadius: '20px',
  padding: '15px 20px',
  marginBottom: '10px',
  backgroundColor: 'white',
  fontSize: '16px',
  display: 'flex',            
  justifyContent: 'space-between', 
  alignItems: 'center'          
};

const buttonsStyle = {
  display: 'flex',
  gap: '10px'                   
};

const buttonStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',           
  border: '0px',
  backgroundColor: 'white',
  fontSize: '20px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s'
};


const SecondPage = () => {
	const users =
	[
		{ id: 1, firstName: 'Иван', lastName: 'Иванов', company: 'Яндекс' },
		{ id: 2, firstName: 'Петр', lastName: 'Петров', company: 'Google' },
		{ id: 3, firstName: 'Сидор', lastName: 'Сидоров', company: 'Mail.ru' }
	];
	
  return (
    <div style={containerStyle}>
		<div style={header}>
			<NavButtons />
		</div>
		<div style={mainContent}>
			{users.map(user => ( //взял из нейронки, но вроде разобрался почему оно так выглядит
				<div key={user.id} style={listStyle}>
					<span>
						{user.id}. {user.lastName} {user.firstName}, {user.company}
					</span>
					<div style={buttonsStyle}>
						<button style={buttonStyle}>
							⛔
						</button>
						<button style={buttonStyle}>
							✏️
						</button>
					</div>
				</div>
			))}
		</div>
    </div>
  );
};

export default SecondPage;
import { Link } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '12px 24px',
  fontSize: '16px',
  marginRight: '10px',
  cursor: 'pointer',
  textDecoration: 'none' 
};

const NavButton = ({ to, children }) => {
  return (
    <Link to={to} style={buttonStyle}>
      {children}
    </Link>
  );
};

const NavButtons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <NavButton to="/">FIRST PAGE</NavButton>
      <NavButton to="/second">SECOND PAGE</NavButton>
    </div>
  );
};

export default NavButtons;
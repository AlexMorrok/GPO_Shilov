import { useState } from 'react';
import { 
  Box, 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Stack,
  Alert
} from '@mui/material';
import NavButtons from '../components/NavButtons';
import { createPerson } from '../services/api';  // импортируем API

const PageOne = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setSuccessMessage('');
    setErrorMessage('');
    
    if (!name.trim() || !lastName.trim() || !company.trim()) {
      setErrorMessage('Заполните все поля');
      return;
    }
    
    setLoading(true);
    
    try {
      await createPerson({
        firstName: name,
        lastName: lastName,
        company: company
      });
      
      setSuccessMessage('Пользователь успешно сохранён!');
      setName('');
      setLastName('');
      setCompany('');
      
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      
    } catch (error) {
      console.error('Ошибка:', error);
      setErrorMessage('Не удалось сохранить пользователя');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '40px',
          width: '400px',
          textAlign: 'center'
        }}
      >
        <NavButtons />

        <Typography variant="h5" gutterBottom sx={{ mt: 2, mb: 3 }}>
          Создание пользователя
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Имя"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
            disabled={loading}
          />

          <TextField
            fullWidth
            label="Фамилия"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Введите фамилию"
            disabled={loading}
          />

          <TextField
            fullWidth
            label="Компания"
            variant="outlined"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Введите компанию"
            disabled={loading}
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSave}
            disabled={loading}
            sx={{ mt: 1 }}
          >
            {loading ? 'СОХРАНЕНИЕ...' : 'СОХРАНИТЬ'}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default PageOne;
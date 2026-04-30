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

const PageOne = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSave = () => {
    console.log('Сохраняем:', { name, lastName, company });
    setSuccessMessage('Пользователь успешно сохранён!');
    setName('');
    setLastName('');
    setCompany('');
    
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
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

        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Создание пользователя
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
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
          />

          <TextField
            fullWidth
            label="Фамилия"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Введите фамилию"
          />

          <TextField
            fullWidth
            label="Компания"
            variant="outlined"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Введите компанию"
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSave}
            sx={{ mt: 1 }}
          >
            СОХРАНИТЬ
          </Button>
        </Stack>

        {/* Отладка */}
        <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1, textAlign: 'left' }}>
          <Typography variant="body2">
            <strong>Имя:</strong> {name || 'не указано'}
          </Typography>
          <Typography variant="body2">
            <strong>Фамилия:</strong> {lastName || 'не указано'}
          </Typography>
          <Typography variant="body2">
            <strong>Компания:</strong> {company || 'не указано'}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default PageOne;
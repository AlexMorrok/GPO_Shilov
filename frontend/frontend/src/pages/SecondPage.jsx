import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  Stack,
  Paper
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import NavButtons from '../components/NavButtons';

const SecondPage = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Иван', lastName: 'Иванов', company: 'Яндекс' },
    { id: 2, firstName: 'Петр', lastName: 'Петров', company: 'Google' },
    { id: 3, firstName: 'Сидор', lastName: 'Сидоров', company: 'Mail.ru' }
  ]);

  const handleDelete = (id) => {
    console.log('Удалить пользователя с id:', id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (id) => {
    console.log('Редактировать пользователя с id:', id);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Простой белый хедер с кнопками по центру */}
      <Box sx={{ bgcolor: 'white', py: 2, borderBottom: '1px solid #e0e0e0' }}>
        <NavButtons />
      </Box>

      <Container maxWidth="md" sx={{ py: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Список пользователей
        </Typography>

        <Stack spacing={2}>
          {users.map(user => (
            <Card key={user.id} variant="outlined" sx={{ borderRadius: '20px' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  '&:last-child': { pb: 2 }
                }}
              >
                <Typography variant="body1">
                  {user.id}. {user.lastName} {user.firstName}, {user.company}
                </Typography>

                <Stack direction="row" spacing={1}>
                  <IconButton 
                    onClick={() => handleDelete(user.id)}
                    color="error"
                    sx={{ border: '1px solid', borderColor: 'error.main' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton 
                    onClick={() => handleEdit(user.id)}
                    color="primary"
                    sx={{ border: '1px solid', borderColor: 'primary.main' }}
                  >
                    <EditIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {users.length === 0 && (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography color="textSecondary">
              Пользователей пока нет
            </Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default SecondPage;
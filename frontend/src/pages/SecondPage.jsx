import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  Stack,
  Paper,
  CircularProgress
} from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import NavButtons from '../components/NavButtons';
import { getPersons, deletePerson } from '../services/api';

const SecondPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getPersons();
      setUsers(data);
    } catch (err) {
      console.error('Ошибка загрузки:', err);
      setError('Не удалось загрузить пользователей');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePerson(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      console.error('Ошибка удаления:', err);
      setError('Не удалось удалить пользователя');
    }
  };

  const handleEdit = (id) => {
    console.log('Редактировать пользователя с id:', id);
    // TODO: открыть модальное окно с редактированием
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
        <Box sx={{ bgcolor: 'white', py: 2, borderBottom: '1px solid #e0e0e0' }}>
          <NavButtons />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Box sx={{ bgcolor: 'white', py: 2, borderBottom: '1px solid #e0e0e0' }}>
        <NavButtons />
      </Box>

      <Container maxWidth="md" sx={{ py: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Список пользователей
        </Typography>

        {error && (
          <Paper sx={{ p: 2, mb: 2, bgcolor: '#ffebee' }}>
            <Typography color="error">{error}</Typography>
          </Paper>
        )}

        {users.length === 0 ? (
          <Paper sx={{ p: 4, textAlign: 'center' }}>
            <Typography color="textSecondary">
              Пользователей пока нет. Создайте первого на странице "Создать пользователя"
            </Typography>
          </Paper>
        ) : (
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
        )}
      </Container>
    </Box>
  );
};

export default SecondPage;
const API_URL = 'https://localhost:7000/api/persons';


export const getPersons = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Ошибка загрузки');
  return response.json();
};


export const createPerson = async (person) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  });
  if (!response.ok) throw new Error('Ошибка сохранения');
  return response.json();
};

export const updatePerson = async (id, person) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...person, id }),
  });
  if (!response.ok) throw new Error('Ошибка обновления');
};

export const deletePerson = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Ошибка удаления');
};
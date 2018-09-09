import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '456xyz' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '456xyz'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('456xyz', { note: 'New note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '456xyz',
    updates: {
      note: 'New note'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last semester rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});

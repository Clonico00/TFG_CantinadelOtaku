import { atom } from 'jotai';

// Obtener el valor almacenado en localStorage
const storedValue = localStorage.getItem('userDataAtom');
const initialValue = storedValue ? JSON.parse(storedValue) : null;

// Crear el átomo con el valor inicial
export const userDataAtom = atom(initialValue);
export const dateFormatter = (value) => {  
  const date = new Date(value);
  const options = { month: 'short', day: 'numeric' };

  return date.toLocaleDateString('es-PE', options);
}
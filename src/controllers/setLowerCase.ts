export function setLowerCase(text: string): string {
  if (typeof text !== 'string') return '';
  return text.replace(/-/g, '').toLowerCase();
};
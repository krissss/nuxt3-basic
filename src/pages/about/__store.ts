export function usePageCounter() {
  return useState('page-counter', () => 1)
}

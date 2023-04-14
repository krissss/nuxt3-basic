export const promiseSleep = (ts: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), ts)
  })
}

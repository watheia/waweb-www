export default function cycler() {
  // eslint-disable-next-line prefer-rest-params
  const args = Array.prototype.slice.call(arguments)
  let index = 0
  return {
    next: () => args[index++ % args.length],
  }
}

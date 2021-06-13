export default function attribute(name: any, value: any, condition: boolean) {
  if (typeof condition === "undefined") {
    condition = true
  }
  return condition ? { [name]: value } : null
}

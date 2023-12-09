export function isMatchFilter(driver, filter) {
  if (filter.name) {
    if (!driver.name.toLowerCase().includes(filter.name.toLowerCase())) return false
  }

  if (filter.minNum) {
    if (parseInt(filter.minNum) > driver.exp) return false
  }

  if (filter.maxNum) {
    if (parseInt(filter.maxNum) < driver.exp) return false
  }

  return true
}

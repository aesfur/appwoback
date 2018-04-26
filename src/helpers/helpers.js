export default function getMaxId(contacts) {
  let maxId = 0;
  for (let i = 0; i < contacts.length; i++) {
    if (maxId < contacts[i]["id"]) {
      maxId = contacts[i]["id"]
    }
  }
  return maxId + 1;
}
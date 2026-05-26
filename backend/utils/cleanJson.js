export function cleanJson(raw) {

  return raw
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}
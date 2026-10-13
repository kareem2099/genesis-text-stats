export default function run(input: { text: string }) {
  const text = input.text;
  return {
    words: text.trim() ? text.trim().split(/\s+/u).length : 0,
    characters: Array.from(text).length,
    lines: text ? text.split(/\r\n|\r|\n/u).length : 0,
  };
}

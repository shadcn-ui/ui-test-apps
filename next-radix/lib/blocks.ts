export const blocks = [
  "chatgpt",
  "elevenlabs",
  "github",
  "preview",
  "vercel",
] as const;

export type BlockName = (typeof blocks)[number];

export const blockMap = new Map<BlockName, { name: BlockName }>(
  blocks.map((name) => [name, { name }])
);

export function getBlockIndex(name: string) {
  return blocks.indexOf(name as BlockName);
}

export function getPrevBlock(name: string) {
  const index = getBlockIndex(name);
  if (index <= 0) return null;
  return blocks[index - 1];
}

export function getNextBlock(name: string) {
  const index = getBlockIndex(name);
  if (index === -1 || index >= blocks.length - 1) return null;
  return blocks[index + 1];
}

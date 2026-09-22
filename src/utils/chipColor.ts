const CHIP_COLORS = [
  'chip-c-orange',
  'chip-c-blue',
  'chip-c-green',
  'chip-c-purple',
  'chip-c-pink',
  'chip-c-cyan',
] as const;

/** Deterministic color identity per tech name — same name, same color, everywhere. */
export function chipColorClass(name: string): string {
  const sum = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return CHIP_COLORS[sum % CHIP_COLORS.length];
}

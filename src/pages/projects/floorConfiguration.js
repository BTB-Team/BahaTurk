const ROOM_PATTERN = /^(\d+)-Room/i;

function shortName(name) {
  const match = ROOM_PATTERN.exec(name);
  return match ? match[1] : name.replace(/\s*Residence$/i, "").trim();
}

export function groupByUnitsPerFloor(residenceTypes = []) {
  const groups = new Map();

  for (const type of residenceTypes) {
    if (type.units_per_floor == null) continue;
    if (!groups.has(type.units_per_floor)) groups.set(type.units_per_floor, []);
    groups.get(type.units_per_floor).push(type);
  }

  return [...groups.entries()].map(([unitsPerFloor, types]) => {
    const shortNames = types.map((type) => shortName(type.name));
    const isRooms = types.every((type) => ROOM_PATTERN.test(type.name));
    const joined = shortNames.join(" / ");
    return {
      unitsPerFloor,
      kind: isRooms ? "rooms" : "other",
      shortNames,
      label: isRooms ? `${joined} - Room Blocks` : `${joined} Blocks`,
      unitsNoun: isRooms ? "Residential Units" : "Residences",
      types,
    };
  });
}

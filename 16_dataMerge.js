/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
export default function mergeData(sessions) {
    const orderedUsers = [];

    // need to think for another logic to replace this built-in
    const result = structuredClone(sessions);
    return result.reduce((acc, curr, idx) => {
      const { user, duration, equipment } = curr;
      if (!orderedUsers.includes(user)) {
        orderedUsers.push(user);
        acc.push(curr);
      } else {
        const userIdx = orderedUsers.indexOf(user);
        const combinedEquipment = new Set([
          ...acc[userIdx].equipment,
          ...equipment,
        ]);
        acc[userIdx].duration += duration;
        acc[userIdx].equipment = Array.from(combinedEquipment).sort();
      }
      console.log(sessions);
      return acc;
    }, []);
  }
  
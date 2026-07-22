import { COLOR_OPTIONS } from '../constants'

export function getColorBreakdown(crewmates) {
  return COLOR_OPTIONS.map((color) => {
    const count = crewmates.filter((crewmate) => crewmate.color === color).length
    return {
      color,
      count,
      percent: crewmates.length === 0 ? 0 : Math.round((count / crewmates.length) * 100),
    }
  }).filter((entry) => entry.count > 0)
}

export function getAverageSpeed(crewmates) {
  if (crewmates.length === 0) return 0
  const total = crewmates.reduce((sum, crewmate) => sum + Number(crewmate.speed ?? 0), 0)
  return total / crewmates.length
}

export function getCrewSuccessScore(crewmates) {
  if (crewmates.length === 0) return { score: 0, tier: 'none' }

  const avgSpeed = getAverageSpeed(crewmates)
  const speedScore = Math.min(avgSpeed / 10, 1) * 50

  const uniqueColors = new Set(crewmates.map((crewmate) => crewmate.color)).size
  const diversityScore = (uniqueColors / COLOR_OPTIONS.length) * 50

  const score = Math.round(speedScore + diversityScore)

  let tier = 'poor'
  if (score >= 75) tier = 'great'
  else if (score >= 50) tier = 'good'

  return { score, tier }
}

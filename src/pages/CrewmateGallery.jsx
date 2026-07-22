import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../client'
import CrewmateCard from '../components/CrewmateCard'
import { getColorBreakdown, getAverageSpeed, getCrewSuccessScore } from '../utils/crewStats'

function CrewmateGallery() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crew')
        .select()
        .order('created_at', { ascending: false })

      if (error) {
        console.error(error)
        return
      }

      setCrewmates(data ?? [])
    }

    fetchCrewmates()
  }, [])

  return (
    <div className="page-section">
      <h1>Your Crewmate Gallery!</h1>

      {crewmates.length === 0 ? (
        <div className="empty-gallery">
          <p>You haven't made a crewmate yet!</p>
          <Link className="submit-button" to="/create">Create one here!</Link>
        </div>
      ) : (
        <>
          <div className="crew-stats">
            <h2>Crew Stats</h2>
            <p><strong>Total Crewmates:</strong> {crewmates.length}</p>
            <p><strong>Average Speed:</strong> {getAverageSpeed(crewmates).toFixed(1)} mph</p>
            <div className="crew-stats-colors">
              {getColorBreakdown(crewmates).map(({ color, count, percent }) => (
                <span key={color} className="crew-stats-color-chip">
                  {color}: {count} ({percent}%)
                </span>
              ))}
            </div>
            <p className={`crew-success crew-success-${getCrewSuccessScore(crewmates).tier}`}>
              Crew Success Score: {getCrewSuccessScore(crewmates).score}/100
            </p>
          </div>

          <div className={`crewmate-grid crew-success-${getCrewSuccessScore(crewmates).tier}`}>
            {crewmates.map((crewmate) => (
              <CrewmateCard key={crewmate.id} crewmate={crewmate} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default CrewmateGallery

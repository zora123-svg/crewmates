import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function CrewmateDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase
        .from('crew')
        .select()
        .eq('id', id)
        .single()

      setCrewmate(data)
    }

    fetchCrewmate()
  }, [id])

  if (!crewmate) {
    return (
      <div className="page-section">
        <p>Loading crewmate...</p>
      </div>
    )
  }

  const isSlow = crewmate.speed < 3

  return (
    <div className="page-section crewmate-detail">
      <h1>Crewmate: {crewmate.name}</h1>
      <h2>Stats:</h2>
      <p>Category: {crewmate.category}</p>
      <p>Color: {crewmate.color}</p>
      <p>Speed: {crewmate.speed} mph</p>

      {isSlow && (
        <p className="detail-hint">
          You may want to find a Crewmate with more speed, this one is kind of slow 🐌
        </p>
      )}

      <button className="submit-button" onClick={() => navigate(`/crewmate/${id}/edit`)}>
        Wanna edit this Crewmate?
      </button>

      <img
        className="crewmate-detail-img"
        src="https://web102-crewmates-demo.onrender.com/assets/crewmates.43d07b24.png"
        alt="crewmate"
      />
    </div>
  )
}

export default CrewmateDetail

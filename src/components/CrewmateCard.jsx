import { useNavigate } from 'react-router-dom'

function CrewmateCard({ crewmate }) {
  const navigate = useNavigate()

  return (
    <div
      className={`crewmate-card color-${crewmate.color.toLowerCase()}`}
      onClick={() => navigate(`/crewmate/${crewmate.id}`)}
    >
      <div className="crewmate-card-icon" />
      <p><strong>Name of Crewmate:</strong> {crewmate.name}</p>
      <p><strong>Speed of Crewmate:</strong> {crewmate.speed} mph</p>
      <p><strong>Color of Crewmate:</strong> {crewmate.color}</p>
      <p><strong>Category:</strong> {crewmate.category}</p>
      <button
        className="edit-button"
        onClick={(event) => {
          event.stopPropagation()
          navigate(`/crewmate/${crewmate.id}/edit`)
        }}
      >
        Edit Crewmate
      </button>
    </div>
  )
}

export default CrewmateCard

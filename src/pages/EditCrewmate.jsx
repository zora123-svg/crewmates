import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../client'
import CrewmateForm from '../components/CrewmateForm'

function EditCrewmate() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crew')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.error(error)
        return
      }

      setCrewmate(data)
    }

    fetchCrewmate()
  }, [id])

  const updateCrewmate = async (event) => {
    event.preventDefault()

    const { error } = await supabase
      .from('crew')
      .update({
        name: crewmate.name,
        speed: parseFloat(crewmate.speed),
        category: crewmate.category,
        color: crewmate.color,
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error(error)
      return
    }

    navigate('/gallery')
  }

  const deleteCrewmate = async (event) => {
    event.preventDefault()

    const { error } = await supabase
      .from('crew')
      .delete()
      .eq('id', id)

    if (error) {
      console.error(error)
      return
    }

    navigate('/gallery')
  }

  if (!crewmate) {
    return (
      <div className="page-section">
        <p>Loading crewmate...</p>
      </div>
    )
  }

  return (
    <div className="page-section">
      <h1>Update Your Crewmate :)</h1>
      <p className="current-info">
        Current Crewmate Info: Name: {crewmate.name}, Speed: {crewmate.speed}, Color: {crewmate.color}
      </p>

      <CrewmateForm
        crewmate={crewmate}
        onChange={setCrewmate}
        onSubmit={updateCrewmate}
        submitLabel="Update Crewmate"
      />


      
      <button className="delete-button" onClick={deleteCrewmate}>
        Delete Crewmate
      </button>
    </div>
  )
}

export default EditCrewmate

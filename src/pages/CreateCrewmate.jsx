import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'
import CrewmateForm from '../components/CrewmateForm'
import { CATEGORIES } from '../constants'

function CreateCrewmate() {
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState({
    name: '',
    speed: '',
    category: CATEGORIES[0].name,
    color: CATEGORIES[0].colors[0],
  })

  const createCrewmate = async (event) => {
    event.preventDefault()

    const { error } = await supabase
      .from('crew')
      .insert({
        name: crewmate.name,
        speed: parseFloat(crewmate.speed),
        category: crewmate.category,
        color: crewmate.color,
      })
      .select()

    if (error) {
      console.error(error)
      return
    }

    navigate('/gallery')
  }

  return (
    <div className="page-section">
      <h1>Create a New Crewmate</h1>
      <CrewmateForm
        crewmate={crewmate}
        onChange={setCrewmate}
        onSubmit={createCrewmate}
        submitLabel="Create Crewmate"
      />
    </div>
  )
}

export default CreateCrewmate

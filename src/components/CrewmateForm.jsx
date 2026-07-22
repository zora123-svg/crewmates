import { CATEGORIES } from '../constants'

function CrewmateForm({ crewmate, onChange, onSubmit, submitLabel }) {
  const handleChange = (field) => (event) => {
    onChange({ ...crewmate, [field]: event.target.value })
  }

  const handleCategoryChange = (event) => {
    const category = event.target.value
    const allowedColors = CATEGORIES.find((c) => c.name === category)?.colors ?? []

    onChange({
      ...crewmate,
      category,
      color: allowedColors.includes(crewmate.color) ? crewmate.color : allowedColors[0],
    })
  }

  const colorOptions = CATEGORIES.find((c) => c.name === crewmate.category)?.colors ?? []

  return (
    <form className="crewmate-form" onSubmit={onSubmit}>
      <img
        className="crewmate-form-img"
        src="https://web102-crewmates-demo.onrender.com/assets/crewmates.43d07b24.png"
        alt="crewmates"
      />

      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter crewmate's name"
            value={crewmate.name}
            onChange={handleChange('name')}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="speed">Speed (mph):</label>
          <input
            id="speed"
            type="number"
            step="0.1"
            placeholder="Enter speed in mph"
            value={crewmate.speed}
            onChange={handleChange('speed')}
            required
          />
        </div>

        <div className="form-field category-field">
          <span className="color-label">Category:</span>
          {CATEGORIES.map((category) => (
            <label key={category.name} className="color-option">
              <input
                type="radio"
                name="category"
                value={category.name}
                checked={crewmate.category === category.name}
                onChange={handleCategoryChange}
                required
              />
              {category.name}
            </label>
          ))}
        </div>

        <div className="form-field color-field">
          <span className="color-label">Color:</span>
          {colorOptions.length === 0 && <p className="detail-hint">Pick a category first</p>}
          {colorOptions.map((color) => (
            <label key={color} className="color-option">
              <input
                type="radio"
                name="color"
                value={color}
                checked={crewmate.color === color}
                onChange={handleChange('color')}
                required
              />
              {color}
            </label>
          ))}
        </div>
      </div>

      <input className="submit-button" type="submit" value={submitLabel} />
    </form>
  )
}

export default CrewmateForm

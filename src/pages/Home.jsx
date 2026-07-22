function Home() {
  return (
    <div className="home-section">
      <h1>Welcome to the Crewmate Creator!</h1>
      <h3>
        Here is where you can create your very own set of crewmates before sending them off <br />
        into space!
      </h3>
      <div className="welcome-images">
        <img
          className="crew-img"
          src="https://web102-crewmates-demo.onrender.com/assets/crewmates.43d07b24.png"
          alt="crew"
        />
        <img
          className="spaceship-img"
          src="https://web102-crewmates-demo.onrender.com/assets/spaceship.3d8f767c.png"
          alt="spaceship"
        />
      </div>
    </div>
  )
}

export default Home

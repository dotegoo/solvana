import './App.css'

function App() {
  return (
    <>
     <header>
        <div className="h1p">
        <h1>Solvana</h1>
        <p>Balance Breathe Thrive</p>
        </div>
        <embed src="https://cdn.pixabay.com/animation/2022/10/27/12/59/12-59-10-594_512.gif" height={90}/>
     </header>
     <article>
      <div className="h1p">
      <h1>🌿 Embrace Peace, Elevate Your Mind 🌿</h1>
      <p>You deserve peace, balance, and space where your mental well-being comes first. Solvana is here to support you on your journey to less stress and more calm. Whether you’re navigating anxiety, seeking mindfulness, or simply looking for ways to feel lighter each day, we provide the tools, guidance, and community to help you thrive.</p>
      </div>
      <div className="h1p">
      <h1>✨ Find Your Balance, Your Way ✨</h1>
      <p>Your journey to a calmer, more centered mind starts here. Whether you’re looking for simple stress relief or a deeper dive into mindfulness, Solvana has a path for you. Explore our tailored plans and choose the level of support that fits your needs.
      </p>
      </div>
     </article>
     <main>
      <div><h1>There are the free and paid plans we offer</h1></div>
      <div className="el2">
      <a href="">
        <div className="rank">
          <h2>Breeze</h2>
        </div>
      </a>
      <a href=''>
      <div className="rank">
        <h2>Flow</h2>
      </div>
      </a>
      <a href=''>
        <div className="rank">
          <h2>Harmony</h2>
        </div>
      </a>
</div>
     </main>
    </>
  )
}

export default App

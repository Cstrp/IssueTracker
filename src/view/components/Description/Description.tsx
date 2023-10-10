export const Description = () => {
  const gradientText = 'text-transparent/40 bg-clip-text bg-gradient-to-r from-purple-300 to-green-400'

  return (
    <div>
      <div>
        <p>
          A modern web app build with
          <span className={gradientText}> React.js | Tailwind CSS.</span>
        </p>
        <p className={gradientText}>
          It allows users to find and contribute to various open-source projects on GitHub with ease.
        </p>
      </div>
    </div>
  )
}

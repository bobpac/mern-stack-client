export default function AddCity({ city, handleSubmit, handleChange }) {
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
          <input type="text" name="city" onChange={handleChange} required />
          <input type="submit" value="Add City" />
      </form>
    </>
  )
}
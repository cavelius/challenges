export default function Main({ headline, labeldescription }) {
  return (
    <main className="main">
      <h1 className="headline">{headline}</h1>
      <form className="form">
        <label htmlFor="details">{labeldescription}</label>
        <textarea
          name="details"
          id="details"
          rows="5"
          cols="20"
          placeholder="Please provide as much detail as possible"
        ></textarea>
      </form>
    </main>
  );
}

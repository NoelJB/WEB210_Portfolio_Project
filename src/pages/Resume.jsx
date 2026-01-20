import MyResume from "../data/MyResume";

export default function Resume() {
  const resume = MyResume();

  return (
    <>
      <div>Resume for {resume.name}</div>
      <hr />
      <form>
        <table padding="10">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input id="name" type="text" value={resume.name} readOnly />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email">E-Mail</label>
              </td>
              <td>
                <input id="email" type="email" value={resume.email} readOnly />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}

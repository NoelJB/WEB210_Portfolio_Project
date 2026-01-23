import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import MyResume from "../data/MyResume";

export default function Resume() {
  const resume = MyResume();

  return (
    <>
      <div>Resume for {resume.name}</div>
      <hr />
      <Container>
        <Section id="resume">
          <table className="table-auto">
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
              <tr>
                <td>
                  <label htmlFor="phone">Phone Number</label>
                </td>
                <td>
                  <input id="phone" type="tel" value={resume.phone} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="linkedin">Linked-In</label>
                </td>
                <td>
                  <input id="linkedin" type="url" value={resume.linkedin} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="summary">Summary</label>
                </td>
                <td>
                  <input id="summary" type="text" value={resume.summary} readOnly />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            Skills:
            <Container>
              <ul>
                {resume.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Container>
          </div>
          <div>
            Education:
            <Container>
              <ul>
                {resume.education.map((school) => (
                  <li key={school.school}>
                    <p>School: {school.school}</p>
                    <p>Start: {school.start}</p>
                    <p>End: {school.end}</p>
                    <p>Degree: {school.degree || "N/A"}</p>
                    <hr />
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </Section>
      </Container>
    </>
  );
}

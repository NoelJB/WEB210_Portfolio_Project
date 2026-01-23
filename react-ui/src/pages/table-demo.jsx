/* This is straight from https://tailwindcss.com/docs/table-layout
   Currently, this illustrates a problem in that it does not render
   as TailWind CSS says that it should look.  That is the same issue
   we're currently seeing on the Resume page.

   I have not tracked down what in our additional css (index.css) is
   causing the faulty rendering.
*/
export default function TableDemo() {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
}

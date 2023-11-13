import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const Schedule = () => {
  return (
    <PageWrapper>
      <Content>
        <h1>Schedule</h1>
        <hr />
        <ul>
          <li>
            <b>Workshop Presentation</b>: 15 minutes of presentation and 5
            minutes Q/A
          </li>
          <li>
            <b>Conference Presentation (full)</b>: 20 minutes of presentation
            and 10 minutes Q/A
          </li>
          <li>
            <b>Conference Presentation (short)</b>: 15 minutes of presentation
            and 5 minutes Q/A
          </li>
          <li>
            <b>Poster Session</b>: on-demand during breaks
          </li>
        </ul>
      </Content>
      <div className="fullImg">
        <table className="schedule">
          <tbody>
            <tr>
              <td id="sjs-A1"></td>
              <td
                colspan="2"
                data-t="s"
                data-v="December 4th, 2023"
                id="sjs-B1"
              >
                December 4th, 2023
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="December 5th, 2023"
                id="sjs-D1"
              >
                December 5th, 2023
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="December 6th, 2023"
                id="sjs-F1"
              >
                December 6th, 2023
              </td>
              <td data-t="s" data-v="December 7th, 2023" id="sjs-H1">
                December 7th, 2023
              </td>
            </tr>
            <tr>
              <td id="sjs-A2"></td>
              <td data-t="s" data-v="Room A" id="sjs-B2">
                Room A
              </td>
              <td data-t="s" data-v="Room B" id="sjs-C2">
                Room B
              </td>
              <td data-t="s" data-v="Room A" id="sjs-D2">
                Room A
              </td>
              <td data-t="s" data-v="Room B" id="sjs-E2">
                Room B
              </td>
              <td data-t="s" data-v="Room A" id="sjs-F2">
                Room A
              </td>
              <td data-t="s" data-v="Room B" id="sjs-G2">
                Room B
              </td>
              <td data-t="s" data-v="Room A" id="sjs-H2">
                Room A
              </td>
            </tr>
            <tr class="gray">
              <td data-t="s" data-v="08:00 - 08:45" id="sjs-A3">
                08:00 - 08:45
              </td>
              <td colspan="2" data-t="s" data-v="Registration" id="sjs-B3">
                Registration
              </td>
              <td
                rowspan="2"
                colspan="2"
                data-t="s"
                data-v="Registration"
                id="sjs-D3"
              >
                Registration
              </td>
              <td
                rowspan="2"
                colspan="2"
                data-t="s"
                data-v="Registration"
                id="sjs-F3"
              >
                Registration
              </td>
              <td rowspan="2" data-t="s" data-v="Registration" id="sjs-H3">
                Registration
              </td>
            </tr>
            <tr class="gray">
              <td data-t="s" data-v="08:45 - 09:00" id="sjs-A4">
                08:45 - 09:00
              </td>
              <td style={{backgroundColor: 'unset'}} colspan="2" data-t="s" data-v="Opening" id="sjs-B4">
                Opening
              </td>
            </tr>
            <tr>
              <td data-t="s" data-v="09:00 - 10:00" id="sjs-A5">
                09:00 - 10:00
              </td>
              <td
                data-t="s"
                data-v="Keynote Speaker Frank Karlitschek, NextCloud"
                id="sjs-B5"
              >
                <i>Keynote Speaker</i>
                <br />
                Frank Karlitschek, NextCloud
              </td>
              <td id="sjs-C5"></td>
              <td
                data-t="s"
                data-v="Keynote Speaker Fakhri Karray, University of Waterloo"
                id="sjs-D5"
              >
                <i>Keynote Speaker</i>
                <br />
                Fakhri Karray, University of Waterloo
              </td>
              <td id="sjs-E5"></td>
              <td
                data-t="s"
                data-v="Invited Speaker Manish Parashar, Utah University"
                id="sjs-F5"
              >
                <i>Invited Speaker</i>
                <br />
                Manish Parashar,
                <br />
                Utah University
              </td>
              <td id="sjs-G5"></td>
              <td data-t="s" data-v="Panel Session" id="sjs-H5">
                Panel Session
              </td>
            </tr>
            <tr class="gray">
              <td data-t="s" data-v="10:00 - 10:30" id="sjs-A6">
                10:00 - 10:30
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="Coffee Break Poster Session"
                id="sjs-B6"
              >
                Coffee Break
                <br />
                Poster Session
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="Coffee Break Poster Session"
                id="sjs-D6"
              >
                Coffee Break
                <br />
                Poster Session
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="Coffee Break Poster Session"
                id="sjs-F6"
              >
                Coffee Break
                <br />
                Poster Session
              </td>
              <td data-t="s" data-v="Coffee Break Poster Session" id="sjs-H6">
                Coffee Break
                <br />
                Poster Session
              </td>
            </tr>
            <tr>
              <td data-t="s" data-v="10:30 - 12:30" id="sjs-A7">
                10:30 - 12:30
              </td>
              <td data-t="s" data-v="Intel4EC Workshop 6 Papers" id="sjs-B7">
                Intel4EC Workshop
                <br />6 Papers
              </td>
              <td
                data-t="s"
                data-v="BigNDA Workshop 7 Papers (full and short)"
                id="sjs-C7"
              >
                BigNDA Workshop
                <br />
                7 Papers
                <br />
                (full and short)
              </td>
              <td data-t="s" data-v="UCC 4 Papers" id="sjs-D7">
                UCC
                <br />4 Papers
              </td>
              <td data-t="s" data-v="BDCAT 4 Papers" id="sjs-E7">
                BDCAT
                <br />4 Papers
              </td>
              <td data-t="s" data-v="UCC 4 Papers" id="sjs-F7">
                UCC
                <br />4 Papers
              </td>
              <td data-t="s" data-v="BDCAT 4 Papers" id="sjs-G7">
                BDCAT
                <br />4 Papers
              </td>
              <td data-t="s" data-v="UCC 4 Papers" id="sjs-H7">
                UCC
                <br />4 Papers
              </td>
            </tr>
            <tr class="gray">
              <td data-t="s" data-v="12:30 - 14:30" id="sjs-A8">
                12:30 - 14:30
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="Lunch Poster Session"
                id="sjs-B8"
              >
                Lunch
                <br />
                Poster Session
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="Lunch Poster Session"
                id="sjs-D8"
              >
                Lunch
                <br />
                Poster Session
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="Lunch Poster Session"
                id="sjs-F8"
              >
                Lunch
                <br />
                Poster Session
              </td>
              <td data-t="s" data-v="Lunch Poster Session" id="sjs-H8">
                Lunch
                <br />
                Poster Session
              </td>
            </tr>
            <tr>
              <td data-t="s" data-v="14:30 - 16:00" id="sjs-A9">
                14:30 - 16:00
              </td>
              <td
                rowspan="4"
                data-t="s"
                data-v="BigNDA for BDCAT4WM Workshop 1 Paper Inspire Workshop 9 Papers QSERV Workshop 2 Papers"
                id="sjs-B9"
              >
                BigNDA for BDCAT4WM Workshop
                <br />
                1 Paper
                <br />
                <br />
                Inspire Workshop
                <br />
                9 Papers
                <br />
                <br />
                QSERV Workshop
                <br />2 Papers
              </td>
              <td
                rowspan="4"
                data-t="s"
                data-v="Cloud AM Workshop 3 Papers DML-ICC Workshop 9 Papers"
                id="sjs-C9"
              >
                Cloud AM Workshop
                <br />
                3 Papers
                <br /><br />
                DML-ICC Workshop
                <br />9 Papers
              </td>
              <td data-t="s" data-v="UCC 3 Papers" id="sjs-D9">
                UCC
                <br />3 Papers
              </td>
              <td data-t="s" data-v="CIFS Workshop 4 Papers" id="sjs-E9">
                CIFS Workshop
                <br />4 Papers
              </td>
              <td data-t="s" data-v="UCC 3 Papers" id="sjs-F9">
                UCC
                <br />3 Papers
              </td>
              <td data-t="s" data-v="BDCAT 3 Papers" id="sjs-G9">
                BDCAT
                <br />3 Papers
              </td>
              <td data-t="s" data-v="UCC 3 Papers" id="sjs-H9">
                UCC
                <br />3 Papers
              </td>
            </tr>
            <tr>
              <td data-t="s" data-v="16:00 - 16:30" id="sjs-A10">
                16:00 - 16:30
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="Coffee Break Poster Session"
                id="sjs-D10"
              >
                Coffee Break
                <br />
                Poster Session
              </td>
              <td
                colspan="2"
                data-t="s"
                data-v="Coffee Break Poster Session"
                id="sjs-F10"
              >
                Coffee Break
                <br />
                Poster Session
              </td>
              <td data-t="s" data-v="Closing" id="sjs-H10">
                Closing
              </td>
            </tr>
            <tr>
              <td data-t="s" data-v="16:30 - 18:00" id="sjs-A11">
                16:30 - 18:00
              </td>
              <td data-t="s" data-v="UCC 3 Papers" id="sjs-D11">
                UCC
                <br />3 Papers
              </td>
              <td data-t="s" data-v="CEICO Workshop 4 Papers" id="sjs-E11">
                CEICO Workshop
                <br />4 Papers
              </td>
              <td data-t="s" data-v="UCC 3 Papers" id="sjs-F11">
                UCC
                <br />3 Papers
              </td>
              <td data-t="s" data-v="BDCAT 4 Papers" id="sjs-G11">
                BDCAT
                <br />4 Papers
              </td>
              <td id="sjs-H11"></td>
            </tr>
            <tr>
              <td data-t="s" data-v="18:00 - 18:30" id="sjs-A12">
                18:00 - 18:30
              </td>
              <td id="sjs-D12"></td>
              <td id="sjs-E12"></td>
              <td id="sjs-F12"></td>
              <td></td>
              <td id="sjs-G12"></td>
            </tr>
            <tr class="gray">
              <td data-t="s" data-v="from 20:00" id="sjs-A13">
                from 20:00
              </td>
              <td colspan="2" data-t="s" data-v="Welcome Cocktail" id="sjs-B13">
                Welcome Cocktail
              </td>
              <td id="sjs-D13"></td>
              <td id="sjs-E13"></td>
              <td colspan="2" data-t="s" data="" v="Gala Dinner" id="sjs-F13">
                Gala Dinner
              </td>
              <td id="sjs-H13"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
};

export default Schedule;

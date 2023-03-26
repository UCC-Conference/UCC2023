import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const CallForPaper = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Committes</h1>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h3>General Chair(s)</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>Massimo Villari, University of Messina, Italy</td>
                        </tr>
                        <tr>
                            <td>Omer Rana, Cardiff University, UK</td>
                        </tr>

                        <tr>
                            <th>
                                <h3>Program Chair(s)</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>Lorenzo Carnevale, University of Messina, Italy</td>
                        </tr>
                        <tr>
                            <td>Song Fu, University of North Texas, US</td>
                        </tr>



                        <tr>
                            <th>
                                <h3>Publicity Co-Chair(s)</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>Antonino Galletta, University of Messina, Italy</td>
                        </tr>


                        <tr>
                            <th>
                                <h3>Proceedings Chair(s)</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>Armando Ruggeri, University of Messina, Italy</td>
                        </tr>

                        <tr>
                            <th>
                                <h3>Web Chair(s)</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>Mario Colosi, University of Messina, Italy</td>
                        </tr>
                    </tbody>
                </table>
            </Content>
        </PageWrapper>
    );
};

export default CallForPaper;

import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const Committees = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Committees</h1>
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
                            <td>Sukhpal Singh Gill, Queen Mary University of London, UK</td>
                        </tr>
                        <tr>
                            <td>Bahman Javadi, Western Sydney University, Australia</td>
                        </tr>
                        <tr>
                            <td>Eirini Eleni Tsiropoulou, New Mexico University, USA</td>
                        </tr>
                        <tr>
                            <td>Ching-Hsien Hsu, National Chung Cheng University, Taiwan</td>
                        </tr>
                        <tr>
                            <td>Dip Sankar Banerjee, Indian Institute of Technology (IIT) Jodhpur, India</td>
                        </tr>
                        <tr>
                            <td>Carlos Westphall, Federal University of Santa Catarina, Brazil</td>
                        </tr>

                        <tr>
                            <th>
                                <h3>Student Program Chair(s)</h3>
                            </th>
                        </tr>
                        <tr>
                            <td>Francesco Martella, University of Messina, Italy</td>
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

export default Committees;

import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const SteeringCommittee = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Steering Committee</h1>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td>Rajkumar Buyya, University of Melbourne, Australia</td>
                        </tr>
                        <tr>
                            <td>Alan Sill, Texas Tech University, Texas, USA</td>
                        </tr>
                        <tr>
                            <td>Omer Rana, Cardiff University, UK</td>
                        </tr>
                        <tr>
                            <td>Ashiq Anjum, University of Leicester, UK</td>
                        </tr>
                        <tr>
                            <td>Josef Spillner, ZHAW Zurich University of Applied Sciences, Switzerland</td>
                        </tr>
                        <tr>
                            <td>Xinghui Zhao, Washington State University, Vancouver, USA</td>
                        </tr>
                    </tbody>
                </table>
            </Content>
        </PageWrapper>
    );
};

export default SteeringCommittee;

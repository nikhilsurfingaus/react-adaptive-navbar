import React from "react";
import { storiesOf } from "@storybook/react";

import Nav from "../components/Resources/Nav";
import { BrowserRouter } from 'react-router-dom';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return (
        <>
            <BrowserRouter>
                <Nav bg="#000" />
            </BrowserRouter>

        </>
    );
});
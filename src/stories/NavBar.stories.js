import React from "react";
import { storiesOf } from "@storybook/react";

import {NavBar} from "../components/Bar/NavBar";

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    return (<NavBar/>);
});
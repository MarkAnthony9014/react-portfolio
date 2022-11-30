import React from 'react';
//this is used to render the component in a simulated DOM and prevent memory leaking.
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutMe from '..';

//this cleanup will ensure we don't have leftover data that can lead to false results.
afterEach(cleanup);

describe('AboutMe Component', () => {
    //First Test
    it('renders', () => {
        render(<AboutMe />);
    });

    //Second test
    it('matches snapshot DOM node structure', () => {
        //render About Me
        const { asFragment } = render(<AboutMe />);
        //see if snapshots match
        expect(asFragment()).toMatchSnapshot();
    });
})
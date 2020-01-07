import Trend from "./Trend"
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const setUp = (props={}) => {
    const component = shallow(<Trend {...props} />);
    return component;
}

const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper
}

describe('Trend Component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () => {
        const wrapper = component.find('.trends-card');
        expect(wrapper.length).toBe(1);
    });

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: '',
                desc: '',
                link: ''
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const trendsInfo = component.find('.trends-info');
            expect(trendsInfo.length).toBe(1);
        })
    });

})
import { shallow } from 'enzyme';
import { TestScheduler } from 'jest';
import { expectation } from 'sinon';
import App from '../App';
import { ApiMusic } from '../pages';

describe('App', ()=>{
    let component;

    beforeEach(()=>{
        component = shallow(<App />);
    });

    test("Does it exist", () => {
        expect(component).toExist;
    })
})
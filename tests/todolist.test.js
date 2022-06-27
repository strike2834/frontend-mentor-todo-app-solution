import { h } from 'preact';
import Todolist from '../src/components/todolist';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the page', () => {
	test('Todolist renders 4 list items', () => {
		const context = shallow(<Todolist />);
		expect(context.find('h1').text()).toBe('TODO');
		expect(context.find('ul li').length).toBe(4);
	});
});

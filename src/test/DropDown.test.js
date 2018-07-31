import React from 'react';
import {configure, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropDown from '../components/DropDown';


configure({adapter: new Adapter()})

describe('<DropDown />', () =>{
	it('Number of DropDown', () => {
		const wrapper = render(<DropDown />)
		  const select = wrapper.find('select')
		  expect(select.length).toEqual(2);
	})
    it('Select DropDown', () => {
		const wrapper = mount(<DropDown />);
  		const select = wrapper.find('select').first();
  		select.simulate('change',{target: {value:"HR"}});
  		expect(select.instance()[1].value).toEqual("HR");
	})

})
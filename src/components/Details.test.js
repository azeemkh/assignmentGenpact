import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Details from './Details';


configure({adapter: new Adapter()})

describe('<Details />', () =>{
	const props = {
			'avatar': "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
			'first_name': "Janet",
			'id': 2,
			'last_name': "Weaver"
		}
	it('Check Details', () => {
		const wrapper = mount(<Details {...props}/>)
		  expect(wrapper.prop('first_name')).toEqual("Janet");
	})
})
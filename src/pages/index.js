import { HeaderLayout } from 'components/student/header-layout';
import _ from 'lodash';
import TopPage from './top';
import LoginStudent from './login';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const Page = (props) => {
	const router = useRouter();
	const [isUser, setIsUser] = useState(false);
	useEffect(() => {
		let user
		if (typeof window !== "undefined") {
			user = JSON.parse(localStorage.getItem('user'));
		}
		
		if (!user) {
			router.push('/login');
		} else {
			router.push('/top');
			setIsUser(true);
		}
	}, []);
	return isUser ? <TopPage /> : <LoginStudent />;
};

Page.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default Page;

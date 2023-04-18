import { HeaderLayout } from 'components/student/header-layout';
import _ from 'lodash';
import TopPage from './top';


export const Page = (props) => {
	return <TopPage />;
};

Page.getLayout = (page) => <HeaderLayout>{page}</HeaderLayout>;

export default Page;

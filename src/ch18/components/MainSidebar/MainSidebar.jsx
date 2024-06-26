/** @jsxImportSource @emotion/react */
import MainSidebarBody from './MainSidebarBody/MainSidebarBody';
import MainSidebarHeader from './MainSidebarHeader/MainSidebarHeader';
import * as s from './style';

function MainSidebar() {
    return (
        <div css={s.layout}>
            <MainSidebarHeader />
            <MainSidebarBody />
        </div>
    );
}

export default MainSidebar;
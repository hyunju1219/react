/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';
import MainSidebarBody from './MainSidebarBody/MainSidebarBody';
import MainSidebarHeader from './MainSidebarHeader/MainSidebarHeader';
import * as s from './style';
import { mainSidebarShowAtom } from '../../atoms/mainSidebarShowAtom';

function MainSidebar() {

    //기본값으로 atom이 들어감
    const [ mainSidebarShow ] = useRecoilState(mainSidebarShowAtom);
    return (
        <div css={s.layout(mainSidebarShow)}>
            <MainSidebarHeader />
            <MainSidebarBody />
        </div>
    );
}

export default MainSidebar;
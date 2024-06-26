import React from 'react';
import MainLayout from './components/MainLayout/MainLayout';
import MainSidebar from './components/MainSidebar/MainSidebar';
import MainHeader from './components/MainHeader/MainHeader';
import { Global } from '@emotion/react';
import { reset } from './styles/global';

function App(props) {
    return (
        <>
            <Global styles={reset}/>
            <MainLayout>
                <MainHeader />
                <MainSidebar />
           </MainLayout>
        </>
    );
}

export default App;
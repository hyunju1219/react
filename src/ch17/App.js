/** @jsxImportSource @emotion/react */ //jsx에 emotion라이브러리 적용

import * as s from "./style";

function App() {

    return (
        <div css={s.container}>
            <div css={s.container2}>
                <div css={s.container3}>
                    <button css={s.button}>버튼</button>
                </div>
            </div>
        </div>
    );
}

export default App;
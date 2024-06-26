import { css } from "@emotion/react";

export const container = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 500px;
    height: 500px;
    `;

export const container2 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 400px;
    height: 400px;
`;

export const container3 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
`;

export const button = css`
    width: 100px;
    height: 100px;
    padding: 10px;
    font-size: 20px;
    background-color: darkorange;
    &:hover {
        background-color: bisque;
    }
    &:active {
        background-color: darkorange;
    }
`;
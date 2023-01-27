/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

const LogIn = () => {
    const router = useRouter();
    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    };
    
    const onChangeUserPw = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPw(e.target.value);
    };

    // api 받아서 값넘겨주기
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div css={allWrap}>
            <div css={logInWrap}>
                <h1>로그인</h1>
                <form onSubmit={onSubmit} css={formList}>
                    <input
                        type="text"
                        placeholder="ID"
                        onChange={onChangeUserId}
                        value={userId}
                    />
                    <input
                        type="password"
                        placeholder="PW"
                        onChange={onChangeUserPw}
                        value={userPw}
                    />

                    <div css={submitBtn}>
                        <Link href="./signUp">
                            <button>회원가입</button>
                        </Link>
                        <button type="submit">로그인</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;

const allWrap = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const logInWrap = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 3rem;

    width: 25rem;
    height: 35rem;
    border-radius: 1rem;

    background-color: ${theme.color.skyblue};
    font-weight: ${theme.fontWeight.normal};
    text-align: center;

    h1 {
        color: white;
    }
`;

const formList = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    input {
        all: unset;
        width: 20rem;
        padding: 0.65rem;

        color: ${theme.color.white};
        text-align: left;
        border-bottom: 1px solid white;
    }
    input::placeholder {
        color: ${theme.color.white};
    }
`;

const submitBtn = (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;

    margin-top: 3.5rem;

    color: ${theme.color.white};

    button {
        width: 7rem;
        height: 2rem;
        border: 1px solid white;
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-5px);
            cursor: pointer;
        }
    }
`;

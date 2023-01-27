/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import theme from "styles/Theme/theme";
import LottieWrapper from "components/Common/LottieWrapper";
import typerCat from "assets/lottieJSON/typerCat.json";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import Link from "next/link";

const NewPost = () => {
    const router = useRouter();

    const [title, setTitle] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [contents, setContents] = useState<string>("");

    const categoryarray = [
        "진로",
        "사회",
        "경제",
        "건강",
        "연애",
        "뷰티",
        "대학",
        "유흥",
    ];

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onClickTypeData = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCategory(e.currentTarget.value);
    };

    const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value);
    };

    return (
        <div css={main}>
            <div css={posth1}>
                <p>새 글 작성</p>
                <p></p>
            </div>
            <div css={post}>
                <form css={postList}>
                    <input
                        css={postTitle}
                        type="text"
                        placeholder="제목"
                        onChange={onChangeTitle}
                        value={title}
                    />
                    <div css={chips}>
                        {categoryarray.map((ctgr, index) => {
                            return (
                                <input
                                    key={index}
                                    css={chip}
                                    type="text"
                                    onClick={onClickTypeData}
                                    defaultValue={ctgr}
                                />
                            );
                        })}
                    </div>
                    <textarea
                        css={postContents}
                        placeholder="내용"
                        onChange={onChangeContents}
                        value={contents}
                    />

                    <div css={submitBtn}>
                        <Link href="./">
                            <button>뒤로가기</button>
                        </Link>
                        <button type="submit">작성</button>
                    </div>
                </form>
                <div css={lottieCat}>
                    <LottieWrapper lottieData={typerCat}></LottieWrapper>
                </div>
            </div>
        </div>
    );
};

export default NewPost;

const main = (theme: Theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    background-color: ${theme.color.skyblue};
`;

const posth1 = (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    width: 74vw;
    margin: 2rem;
    color: ${theme.color.white};
    font-size: 32px;
    border: 4px dashed black;
`;

const post = (theme: Theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    border: 4px dashed black;
`;

const postList = (theme: Theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40rem;
    gap: 1rem;
    padding: 1rem;
`;

const lottieCat = (theme: Theme) => css`
    width: 36vw;
    height: 40vh;

    border-radius: 4rem;
`;

const postTitle = (theme: Theme) => css`
    all: unset;
    width: 20rem;
    padding: 0.65rem;

    color: ${theme.color.white};
    text-align: left;
    font-size: 32px;
    border-bottom: 1px solid white;
    ::placeholder {
        color: ${theme.color.white};
    }
`;

const postContents = (theme: Theme) => css`
    all: unset;
    width: 20rem;
    height: 25rem;
    padding: 0.65rem;

    color: ${theme.color.white};
    vertical-align: top;
    text-align: left;
    border: 1px solid white;
    overflow: hidden;
    ::placeholder {
        color: ${theme.color.white};
    }
`;

const chips = (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    flex-wrap: wrap;
    width: 25rem;
`;

const chip = (theme: Theme) => css`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    padding: 5px 15px;
    border-radius: 32px;
    background: ${theme.color.lightYellow};
    font-size: 13px;
    text-align: center;
    &:hover {
        cursor: pointer;
        background: ${theme.color.yellow};
    }
`;

const submitBtn = (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;

    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

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

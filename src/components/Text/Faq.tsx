/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";

interface Props {
  title: string;
  summary: string;
}

function Faq({ title, summary }: Props) {
  return (
    <details css={detailsWrapper}>
      <summary css={summaryWrapper}>Q. {title}</summary>
      <div css={contentMargin}>
        <span css={contentWrapper}>{summary}</span>
      </div>
    </details>
  );
}

export default Faq;

const detailsWrapper = (theme: Theme) => css`
  padding: 0.75rem 0;
  width: 100%;
  margin: 2.8rem 0;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${theme.color.grey100};
  letter-spacing: 0.3px;
`;

const summaryWrapper = (theme: Theme) => css`
  display: flex;
  flex-direction: row;
  font-size: 1.4rem;
  font-weight: ${theme.fontWeight.bold};
  opacity: 0.88;
  cursor: pointer;
`;

const contentMargin = css`
  margin: 1rem 0;
`;

const contentWrapper = (theme: Theme) => css`
  font-size: 1.1rem;
  font-weight: ${theme.fontWeight.light};
  word-break: keep-all;
`;

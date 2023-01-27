/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";

interface Props {
  summary?: string;
  highlight?: string;
}

function OneLineContent({ summary, highlight }: Props) {
  return (
    <div css={summaryWrapper}>
      <span css={summaryContent}>
        <strong css={strongContent}>{highlight}</strong>
        {summary}
      </span>
    </div>
  );
}

export default OneLineContent;

const summaryWrapper = css`
  margin: 0.7rem 0rem;
`;

const summaryContent = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  font-size: 1rem;
  opacity: 0.9;
  word-break: keep-all;
  letter-spacing: 0.8px;
`;

const strongContent = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.normal};
`;

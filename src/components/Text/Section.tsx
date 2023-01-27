/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";

interface Props {
  title: string;
  summary: string;
}

function Section({ title, summary }: Props) {
  return (
    <div css={wrapper}>
      <span css={titleWrapper}>{title}</span>
      <p css={summaryWrapper}>{summary}</p>
    </div>
  );
}

export default Section;

const wrapper = css`
  margin: 0 4.7rem;
`;

const titleWrapper = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.8rem;
`;

const summaryWrapper = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

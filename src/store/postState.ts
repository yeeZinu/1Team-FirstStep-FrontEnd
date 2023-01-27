import { atom } from "recoil";

export const postState = atom<IGetPost[]>({
  key: "postState",
  default: [],
});

import React from "react";
import * as S from "./style";
import { useRename } from "../../../../../store/rename";

interface FooterProps {
  footerValue: {
    isButton: boolean;
    setIsButton: React.Dispatch<React.SetStateAction<boolean>>;
    setIsConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const NotSetFooter: React.FC<FooterProps> = ({ footerValue }) => {
  const { isButton, setIsButton, setIsConfirm } = footerValue;
  const { name, rename } = useRename();

  const handleClear = () => {
    rename("");
    setIsButton(true);
  };

  return (
    <>
      {isButton && name === "" ? (
        <S.Button onClick={() => setIsButton((prev) => !prev)}>
          새 테이블 생성
        </S.Button>
      ) : (
        <S.InputContainer>
          <S.InputName
            placeholder="테이블 이름을 적어주세요. (입력 후 엔터)"
            maxLength={10}
            onChange={(e) => rename(e.target.value)}
            value={name}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsButton(true);
                setIsConfirm(true);
              }
            }}
          />
          {name && <S.Cancel src="/images/Cancel.svg" onClick={handleClear} />}
        </S.InputContainer>
      )}
    </>
  );
};

export default NotSetFooter;

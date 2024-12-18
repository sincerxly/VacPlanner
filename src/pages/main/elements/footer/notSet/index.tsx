import React from "react";
import * as S from "./style";

interface FooterProps {
  footerValue: {
    name: string;
    isButton: boolean;
    setName: (name: string) => void;
    setIsButton: React.Dispatch<React.SetStateAction<boolean>>;
    setIsConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const NotSetFooter: React.FC<FooterProps> = ({ footerValue }) => {
  const { name, isButton, setName, setIsButton, setIsConfirm } = footerValue;

  const handleClear = () => {
    setName("");
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
            onChange={(e) => setName(e.target.value)}
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

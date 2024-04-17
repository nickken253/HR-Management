import { Select } from 'antd';
import { EngFlag } from '../../../assets/svgs';
import { BaFlag } from '../../../assets/svgs';
import * as S from './LanguageSelector.styled';
import "./LanguageSelector.css";

export const LanguageSelect = () => {
    const options = [
        { value: 1, label: <S.LanguageItem><S.FlagWrapper src={EngFlag} alt="EngFlag" />EN</S.LanguageItem> },
        { value: 2, label: <S.LanguageItem><S.FlagWrapper src={BaFlag} alt="BaFlag" />BA</S.LanguageItem>},
    ];
    return (
        <S.LanguageSelect defaultValue={options[0]} options={options}/>
    );
};
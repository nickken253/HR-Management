import { Select } from 'antd';
import { EngFlag } from '../../../assets/svgs';
import { BaFlag } from '../../../assets/svgs';
import * as S from './LanguageSelector.styled';

export const LanguageSelect = () => {
    const options = [
        { value: 1, label: 'EN' },
        { value: 2, label: 'BA' },
    ];

    return (
        <S.LanguageSelect defaultValue={"EN"} options={options} optionRender={(option) => {
            const svgIcon = option.value === 1 ? EngFlag : BaFlag;
            return (
                <div style={{width: "fit-content"}}>
                    <img src={svgIcon} alt="Flag" />
                    {option.label}
                </div>
            );
        }} />
    );
};
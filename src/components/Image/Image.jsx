import { ImgWrapper, Img } from './Images.styled';

export function Image({ src, alt }){
    return (
    <ImgWrapper>
        <Img src={src} alt={alt} />
    </ImgWrapper>
    );
};
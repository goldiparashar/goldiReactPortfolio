import { createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --dark-color:#0A0A0A;
    --gray-color:#5F5F5F;
    --dark-gray-color:#484E53;
    --white-color:#DEDEDE;
    --green-color:#1D6400;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color:#0A0A0A;
    color:#fff;
    font-family: 'Urbanist', sans-serif;
    font-weight:300;
}
.dark-color{
    color:var(--dark-color);
}
.fs-24{
    font-size:24px;
}
.sticky-header{
    background-color:var(--dark-color);
    padding:20px 0;
}
.pill-btn{
    padding:11px 10px;
    min-width:119px;
    // width:100%;
    display:inline-block;
    border:1px solid #A9A9A9;
    background-color:transparent;
    color: #A9A9A9;
    border-radius:50px;
}
.home-wrapper h1{
    font-size:75px;
    color:#5F5F5F;
    font-weight:300;
}
.mouse-animate{
    position:absolute;
    bottom:100px;
    right:0;
}
p{
    font-size:38px;
    font-weight:300px;
}
.proj-tags{
    position:absolute;
    bottom:0;
    left:0;
}
.block-item{
    border:1px solid #484E53;
    font-weight:300;
    height:100%;
    padding-top:110px !important;
    transition:1s all;
    // min-height:344px;
    // display:flex;
    // flex-direction:column;
    // justify-content:end;
    // align-items:top;
}
.block-item .icon{
    font-size:25px;
    border:1px solid #fff;
    border-radius:6px;
    padding:5px;
    display:inline-block;
    line-height:1;
}
.block-item:hover{
    -webkit-box-shadow:rgba(255, 255, 255, 0.35) 0px 5px 5px;
    -moz-box-shadow:rgba(255, 255, 255, 0.35) 0px 5px 5px;
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 5px;
}
.block-item .title{
    font-size:28px;
}
.block-item .descrip{
    font-size:14px;
}
.offcanvas{
    background-color:var(--dark-color);
    color:#fff;
}
.offcanvas ul li a{
    font-size:50px;
    color:#fff;
}
.offcanvas button.btn-close {
    background-color: #fff;
    opacity: 1;
}
.hello-btn:hover{
    box-shadow:rgba(255, 255, 255, 0.35) 0px 1px 2px;
}
.hello-btn .icon{
    display:inline-block;
}
.hello-btn:hover .icon{
    animation: rotateText 1s linear infinite;
    // transform: rotate(30deg)
}
@keyframes rotateText {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
@media (max-width:991px){
    p{
        font-size:28px;
    }
    .home-wrapper h1{
        font-size:50px;
        color:#5F5F5F;
        font-weight:300;
    }
}
`;
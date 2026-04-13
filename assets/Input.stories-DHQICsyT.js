import{j as r}from"./jsx-runtime-DUoqHfTI.js";import{r as s}from"./iframe-lb_dILUR.js";import{I as l}from"./Input-ge2QMwN3.js";import{P as f}from"./Popover-v383RAF1.js";import{I as o}from"./IconInfo-Bi7ojP_l.js";import{I as h}from"./IconCalendarRight-nlQY0r0l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMi4cka0.js";import"./index-5MvGIPCt.js";import"./ErrorMessage-BVYX-oV0.js";import"./Text-CdChZzd0.js";import"./helpers-uo1c56Nd.js";import"./IconDynamicComponent-Cg_2CUIx.js";import"./Label-BJhMevCW.js";import"./IconCheckmarkCircleFilled-xLJY5VGd.js";import"./index-AboGxAif.js";import"./types-CvKYa35Y.js";import"./IconDismiss-Bf6A66rz.js";import"./Tooltip-DQWvOstr.js";import"./Button-DH-fj3wa.js";import"./Link-BFpiW-88.js";const N={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const changeHandler = (e: TChangeEventType, value: string) => {
    setValue(value);
    setIsErrorVisible(true);
  };
  return <div style={{
    maxWidth: 300
  }}>
      <_Input {...args} error={!value && isErrorVisible ? 'requeired field' : ''} currentValue={value} handleChange={changeHandler} />
    </div>;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const O=["Input"];export{e as Input,O as __namedExportsOrder,N as default};

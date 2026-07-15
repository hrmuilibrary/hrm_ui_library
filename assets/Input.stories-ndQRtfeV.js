import{j as r}from"./jsx-runtime-hG3Vka6i.js";import{r as s}from"./iframe-G8znBDlN.js";import{I as l}from"./Input-B1vvj3CK.js";import{P as f}from"./Popover-DhLB_qpy.js";import{I as o}from"./IconInfo-DrOOWeaC.js";import{I as h}from"./IconCalendarRight-Drp8MK8S.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C-kaY9gP.js";import"./index-BzgLc-4F.js";import"./ErrorMessage-DV_eGs6U.js";import"./Text-BGs7_8FC.js";import"./helpers-DAKI7Y_y.js";import"./IconDynamicComponent-tVGzrZ1J.js";import"./Label-Bi9Do9zE.js";import"./IconCheckmarkCircleFilled-xwTwBnjJ.js";import"./index-AboGxAif.js";import"./types-DFaGMykD.js";import"./useOnOutsideClick-Dgd-DzgO.js";import"./IconDismiss-BzVgVY58.js";import"./Tooltip-CqiyEJp-.js";import"./Button-DSZy3bBL.js";import"./Link-svha7DwQ.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const U=["Input"];export{e as Input,U as __namedExportsOrder,O as default};

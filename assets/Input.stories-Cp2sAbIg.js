import{j as r}from"./jsx-runtime-eLskHub1.js";import{r as s}from"./iframe-CCA8howa.js";import{I as l}from"./Input-BIMDtQrL.js";import{P as f}from"./Popover-DH-FN3UR.js";import{I as o}from"./IconInfo-DBKauIV4.js";import{I as h}from"./IconCalendarRight-DSyIXk6T.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cw5hxcD_.js";import"./index-D-1MbwyK.js";import"./ErrorMessage-QCDO-32m.js";import"./Text-CQrBgAQK.js";import"./helpers-CDZpRNsE.js";import"./IconDynamicComponent-CWHwBLok.js";import"./Label-kHjGuaR6.js";import"./IconCheckmarkCircleFilled-XSXCM_0j.js";import"./index-AboGxAif.js";import"./types-B2i5IIBE.js";import"./useOnOutsideClick-CCA1KmND.js";import"./IconDismiss-BCU1u5xd.js";import"./Tooltip-Bvm4nk3g.js";import"./Button-uJWmugQC.js";import"./Link-DXGYqrz3.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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

import{j as r}from"./jsx-runtime-BQ8XKDWZ.js";import{r as s}from"./iframe-DuzJ3-xf.js";import{I as l}from"./Input-DO9B7b5M.js";import{P as f}from"./Popover-CQTjngkz.js";import{I as o}from"./IconInfo-BaYuM2sj.js";import{I as h}from"./IconCalendarRight-C2M3aCAg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BoNFqYXL.js";import"./index-BXUB3CAz.js";import"./ErrorMessage-C5HC5Vf_.js";import"./Text-pLVOucf6.js";import"./helpers-CH0y8nQM.js";import"./IconDynamicComponent-Dk4FBIIr.js";import"./Label-DQSMISYM.js";import"./IconCheckmarkCircleFilled-vhCnGYex.js";import"./index-AboGxAif.js";import"./types-3LfPC6TZ.js";import"./useOnOutsideClick-DwyUj8qM.js";import"./IconDismiss-Ceoj2xTf.js";import"./Tooltip-Bp9DWzwB.js";import"./Button-DsWIgKwr.js";import"./Link-CxigbnfV.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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

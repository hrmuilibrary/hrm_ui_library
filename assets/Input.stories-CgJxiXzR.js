import{j as r}from"./jsx-runtime-eZA7XPs2.js";import{r as s}from"./iframe-Bu6IG7x0.js";import{I as l}from"./Input-B3gaEhlb.js";import{P as f}from"./Popover-BRffxo4f.js";import{I as o}from"./IconInfo-mOmcxJkQ.js";import{I as h}from"./IconCalendarRight-Tp-CNvi1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CRfeIcbX.js";import"./index-DyZCXPR1.js";import"./ErrorMessage-Dr5Ip2Xf.js";import"./Text-BEaaacjR.js";import"./helpers-B70rEIFi.js";import"./IconDynamicComponent-D25EWgep.js";import"./Label-Tbk4f5TT.js";import"./IconCheckmarkCircleFilled-F7rA0MYH.js";import"./index-AboGxAif.js";import"./types-DkRXjhPg.js";import"./useOnOutsideClick-Brbv3MrL.js";import"./IconDismiss-BJxm4N4p.js";import"./Tooltip-BcuKIR9W.js";import"./Button-0fHBq_V-.js";import"./Link-CHUmyIqN.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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

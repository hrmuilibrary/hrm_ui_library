import{j as r}from"./jsx-runtime-BtgfURVQ.js";import{r as s}from"./iframe-Dzwn7jFr.js";import{I as l}from"./Input-CvBeAiws.js";import{P as f}from"./Popover-pZ77Y-ar.js";import{I as o}from"./IconInfo-BkG6q60h.js";import{I as h}from"./IconCalendarRight-BHBYwEe8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BI6OO8u8.js";import"./index-BSkP1pyL.js";import"./ErrorMessage-Cv4wEjz1.js";import"./Text-DlqznRJU.js";import"./helpers-Jrcu8OdA.js";import"./IconDynamicComponent-CIdkvJV_.js";import"./Label-Do6HhDve.js";import"./IconCheckmarkCircleFilled-nMLbhk0t.js";import"./index-AboGxAif.js";import"./types-XEo9Gk2s.js";import"./useOnOutsideClick-B1t7TlwA.js";import"./IconDismiss-ByHcyab1.js";import"./Tooltip-BHdDeY2S.js";import"./Button-DwuE8RYj.js";import"./Link-5B3blEnc.js";const O={title:"Input",component:l,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}},g=p=>{const[t,m]=s.useState(""),[u,c]=s.useState(!1),d=(I,x)=>{m(x),c(!0)};return r.jsx("div",{style:{maxWidth:300},children:r.jsx(l,{...p,error:!t&&u?"requeired field":"",currentValue:t,handleChange:d})})},e=g.bind({});e.args={type:"text",label:"Some text",size:"large",mask:"",maskChar:"",leftIconProps:{Component:o},rightIconProps:{Component:h},disabled:!1,required:!0,maxCount:15,witUpperCase:!1,placeholder:"Some text",labelAddons:r.jsx(f,{linkAddons:{url:"link",beforeLink:"text before link"},id:"beneficiary-tooltip",text:"data",position:"top-center",children:r.jsx("div",{id:"beneficiary-tooltip",children:r.jsx(o,{type:"information",size:"xsmall",className:"ml-4 pointer"})})}),helperText:"This is your helper text",successMessage:"Success message"};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
